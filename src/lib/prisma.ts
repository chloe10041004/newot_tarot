import path from "node:path";
import Database from "better-sqlite3";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  dbReady?: boolean;
};

export function resolveDatabaseUrl() {
  // Vercel serverless: only /tmp is writable
  if (process.env.VERCEL) {
    return "file:/tmp/dev.db";
  }

  const url = process.env.DATABASE_URL ?? "file:./dev.db";
  if (!url.startsWith("file:")) return url;

  const filePath = url.slice("file:".length);
  if (path.isAbsolute(filePath)) return url;

  return `file:${path.resolve(process.cwd(), filePath)}`;
}

function ensureDatabaseSchema() {
  if (globalForPrisma.dbReady) return;

  const dbPath = resolveDatabaseUrl().replace(/^file:/, "");
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS "Note" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "title" TEXT NOT NULL,
      "content" TEXT,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "Question" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "authorName" TEXT NOT NULL,
      "content" TEXT NOT NULL,
      "reply" TEXT,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "repliedAt" DATETIME
    );
  `);

  db.close();
  globalForPrisma.dbReady = true;
}

function createPrismaClient() {
  ensureDatabaseSchema();
  const adapter = new PrismaBetterSqlite3({
    url: resolveDatabaseUrl(),
  });
  return new PrismaClient({ adapter });
}

function getPrismaClient() {
  const cached = globalForPrisma.prisma;
  if (cached && "question" in cached) return cached;

  const client = createPrismaClient();
  globalForPrisma.prisma = client;
  return client;
}

export const prisma = getPrismaClient();
