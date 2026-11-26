import { beforeEach, describe, expect, it, vi } from "vitest";

// ユニットテストではデータベースにつながず、prisma を偽物に置き換える
vi.mock("@/lib/prisma", () => ({
  prisma: { $queryRaw: vi.fn() },
}));

import { prisma } from "@/lib/prisma";
import { GET } from "./route";

describe("GET /api/health", () => {
  beforeEach(() => {
    vi.mocked(prisma.$queryRaw).mockReset();
  });

  it("データベースにつながると 200 と ok を返す", async () => {
    vi.mocked(prisma.$queryRaw).mockResolvedValue([{ "?column?": 1 }]);

    const response = await GET();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "ok", database: "ok" });
  });

  it("データベースにつながらないと 503 を返す", async () => {
    vi.mocked(prisma.$queryRaw).mockRejectedValue(new Error("connection failed"));

    const response = await GET();

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ status: "error", database: "error" });
  });
});
