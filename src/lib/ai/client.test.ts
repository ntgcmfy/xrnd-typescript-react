import { afterEach, describe, expect, it, vi } from "vitest";
import { getModel, isAiMock } from "./client";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("isAiMock", () => {
  it("AI_MOCK が true のときだけ true を返す", () => {
    vi.stubEnv("AI_MOCK", "true");
    expect(isAiMock()).toBe(true);

    vi.stubEnv("AI_MOCK", "false");
    expect(isAiMock()).toBe(false);
  });
});

describe("getModel", () => {
  it("OPENAI_MODEL が無いとエラーにする", () => {
    vi.stubEnv("OPENAI_MODEL", "");
    expect(() => getModel()).toThrow("OPENAI_MODEL");
  });
});
