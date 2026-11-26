import { prisma } from "@/lib/prisma";

// アプリとデータベースが動いているかを確かめるための API
export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return Response.json({ status: "ok", database: "ok" });
  } catch {
    return Response.json({ status: "error", database: "error" }, { status: 503 });
  }
}
