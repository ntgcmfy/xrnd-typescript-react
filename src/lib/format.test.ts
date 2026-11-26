import { describe, expect, it } from "vitest";
import { formatDate, formatDateTime, todayInJapan } from "./format";

describe("formatDate", () => {
  it("日付だけの文字列を「YYYY/MM/DD」にする", () => {
    expect(formatDate("2026-11-21")).toBe("2026/11/21");
  });

  it("日付の列の値（UTC の0時の Date）を、その日付にする", () => {
    expect(formatDate(new Date("2026-11-21T00:00:00Z"))).toBe("2026/11/21");
    expect(formatDate(new Date(todayInJapan(new Date("2026-11-22T15:30:00Z"))))).toBe("2026/11/23");
  });
});

describe("formatDateTime", () => {
  it("日本時間の「YYYY/MM/DD HH:mm」にする", () => {
    expect(formatDateTime("2026-11-23T05:30:00Z")).toBe("2026/11/23 14:30");
  });

  it("日付をまたぐときも日本時間にする", () => {
    expect(formatDateTime("2026-11-22T15:05:00.000Z")).toBe("2026/11/23 00:05");
  });
});

describe("todayInJapan", () => {
  it("日本時間の今日を「YYYY-MM-DD」で返す", () => {
    expect(todayInJapan(new Date("2026-11-23T05:30:00Z"))).toBe("2026-11-23");
  });

  it("UTC ではまだ前の日でも、日本で日付が変わっていれば次の日にする", () => {
    expect(todayInJapan(new Date("2026-11-22T15:30:00Z"))).toBe("2026-11-23");
  });
});
