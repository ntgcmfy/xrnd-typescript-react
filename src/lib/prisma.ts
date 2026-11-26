import "server-only";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/generated/prisma/client";

// 開発中のホットリロードで接続が増え続けないように、1つの PrismaClient を使い回す
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  // アプリからはプール接続（ホスト名に -pooler が付くほう）で接続する
  // DATABASE_URL が無いときは、データベースに問い合わせた時点でエラーになる
  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
