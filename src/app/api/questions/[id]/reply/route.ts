import { NextResponse } from "next/server";
import { getQuestionById, replyToQuestion } from "@/lib/questions-store";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const questionId = Number(id);

  if (!Number.isInteger(questionId) || questionId < 1) {
    return NextResponse.json({ error: "잘못된 질문 ID입니다." }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const passcode =
    typeof body === "object" &&
    body !== null &&
    "passcode" in body &&
    typeof (body as { passcode: unknown }).passcode === "string"
      ? (body as { passcode: string }).passcode
      : "";

  const reply =
    typeof body === "object" &&
    body !== null &&
    "reply" in body &&
    typeof (body as { reply: unknown }).reply === "string"
      ? (body as { reply: string }).reply.trim()
      : "";

  const expectedPasscode = process.env.AUTHOR_PASSCODE ?? "hagobooks";
  if (passcode !== expectedPasscode) {
    return NextResponse.json({ error: "작가 인증에 실패했습니다." }, { status: 401 });
  }

  if (reply.length < 1 || reply.length > 1000) {
    return NextResponse.json(
      { error: "답변은 1~1000자로 입력해 주세요." },
      { status: 400 },
    );
  }

  try {
    const existing = await getQuestionById(questionId);
    if (!existing) {
      return NextResponse.json({ error: "질문을 찾을 수 없습니다." }, { status: 404 });
    }

    const question = await replyToQuestion(questionId, reply);
    if (!question) {
      return NextResponse.json({ error: "질문을 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json(question);
  } catch (error) {
    console.error("[PATCH /api/questions/[id]/reply]", error);
    return NextResponse.json(
      { error: "답변 등록 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
