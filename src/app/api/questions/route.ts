import { NextResponse } from "next/server";
import { createQuestion, listQuestions } from "@/lib/questions-store";

export const dynamic = "force-dynamic";

const JSON_UTF8 = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

export async function GET() {
  try {
    const questions = await listQuestions();
    return NextResponse.json(questions, { headers: JSON_UTF8 });
  } catch (error) {
    console.error("[GET /api/questions]", error);
    return NextResponse.json(
      { error: "질문 목록을 불러오지 못했습니다." },
      { status: 500, headers: JSON_UTF8 },
    );
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400, headers: JSON_UTF8 });
  }

  const authorName =
    typeof body === "object" &&
    body !== null &&
    "authorName" in body &&
    typeof (body as { authorName: unknown }).authorName === "string"
      ? (body as { authorName: string }).authorName.trim()
      : "";

  const content =
    typeof body === "object" &&
    body !== null &&
    "content" in body &&
    typeof (body as { content: unknown }).content === "string"
      ? (body as { content: string }).content.trim()
      : "";

  if (authorName.length < 1 || authorName.length > 20) {
    return NextResponse.json(
      { error: "이름은 1~20자로 입력해 주세요." },
      { status: 400, headers: JSON_UTF8 },
    );
  }

  if (content.length < 5 || content.length > 500) {
    return NextResponse.json(
      { error: "질문은 5~500자로 입력해 주세요." },
      { status: 400, headers: JSON_UTF8 },
    );
  }

  try {
    const question = await createQuestion({ authorName, content });
    return NextResponse.json(question, { status: 201, headers: JSON_UTF8 });
  } catch (error) {
    console.error("[POST /api/questions]", error);
    return NextResponse.json(
      { error: "질문 등록 중 오류가 발생했습니다." },
      { status: 500, headers: JSON_UTF8 },
    );
  }
}
