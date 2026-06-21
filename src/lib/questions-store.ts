import { get, put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";

export type QuestionRecord = {
  id: number;
  authorName: string;
  content: string;
  reply: string | null;
  createdAt: string;
  repliedAt: string | null;
};

const BLOB_PATH = "questions/data.json";

function useBlobStore() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function toRecord(row: {
  id: number;
  authorName: string;
  content: string;
  reply: string | null;
  createdAt: Date;
  repliedAt: Date | null;
}): QuestionRecord {
  return {
    id: row.id,
    authorName: row.authorName,
    content: row.content,
    reply: row.reply,
    createdAt: row.createdAt.toISOString(),
    repliedAt: row.repliedAt?.toISOString() ?? null,
  };
}

async function readBlobQuestions(): Promise<QuestionRecord[]> {
  const result = await get(BLOB_PATH, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200 || !result.stream) return [];

  const text = await new Response(result.stream).text();
  if (!text) return [];

  const parsed = JSON.parse(text) as unknown;
  if (!Array.isArray(parsed)) return [];

  return parsed as QuestionRecord[];
}

async function writeBlobQuestions(questions: QuestionRecord[]) {
  await put(BLOB_PATH, JSON.stringify(questions), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function listQuestions(): Promise<QuestionRecord[]> {
  if (useBlobStore()) {
    const questions = await readBlobQuestions();
    return questions.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  const rows = await prisma.question.findMany({ orderBy: { createdAt: "desc" } });
  return rows.map(toRecord);
}

export async function createQuestion(input: {
  authorName: string;
  content: string;
}): Promise<QuestionRecord> {
  if (useBlobStore()) {
    const questions = await readBlobQuestions();
    const nextId =
      questions.length > 0 ? Math.max(...questions.map((q) => q.id)) + 1 : 1;

    const question: QuestionRecord = {
      id: nextId,
      authorName: input.authorName,
      content: input.content,
      reply: null,
      createdAt: new Date().toISOString(),
      repliedAt: null,
    };

    questions.push(question);
    await writeBlobQuestions(questions);
    return question;
  }

  const row = await prisma.question.create({ data: input });
  return toRecord(row);
}

export async function replyToQuestion(
  questionId: number,
  reply: string,
): Promise<QuestionRecord | null> {
  if (useBlobStore()) {
    const questions = await readBlobQuestions();
    const index = questions.findIndex((q) => q.id === questionId);
    if (index === -1) return null;

    const updated: QuestionRecord = {
      ...questions[index],
      reply,
      repliedAt: new Date().toISOString(),
    };

    questions[index] = updated;
    await writeBlobQuestions(questions);
    return updated;
  }

  const existing = await prisma.question.findUnique({ where: { id: questionId } });
  if (!existing) return null;

  const row = await prisma.question.update({
    where: { id: questionId },
    data: { reply, repliedAt: new Date() },
  });
  return toRecord(row);
}

export async function getQuestionById(questionId: number): Promise<QuestionRecord | null> {
  if (useBlobStore()) {
    const questions = await readBlobQuestions();
    return questions.find((q) => q.id === questionId) ?? null;
  }

  const row = await prisma.question.findUnique({ where: { id: questionId } });
  return row ? toRecord(row) : null;
}
