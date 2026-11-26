import { beforeEach, describe, expect, it, vi } from "vitest";

// ユニットテストではログインの仕組みを動かさず、ログインしている人を偽物に置き換える
vi.mock("@/lib/session", () => ({
  getCurrentUser: vi.fn(),
}));

import { getCurrentUser } from "@/lib/session";
import { GET } from "./route";

describe("GET /api/me", () => {
  beforeEach(() => {
    vi.mocked(getCurrentUser).mockReset();
  });

  it("ログインしていると、その人を返す", async () => {
    vi.mocked(getCurrentUser).mockResolvedValue({
      id: "u1",
      name: "テスト",
      email: "t@example.com",
    });

    const response = await GET();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ id: "u1", name: "テスト", email: "t@example.com" });
  });

  it("ログインしていないと 401 を返す", async () => {
    vi.mocked(getCurrentUser).mockResolvedValue(null);

    const response = await GET();

    expect(response.status).toBe(401);
  });
});
