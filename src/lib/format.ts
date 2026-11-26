// 画面に出す日付と日時の形（project-conventions.mdc の「Screens and their look」）
// 日本時間（Asia/Tokyo）で出す。サーバーの時刻の設定には左右されない

const TIME_ZONE = "Asia/Tokyo";

function partsInJapan(value: Date, withTime: boolean) {
  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...(withTime ? { hour: "2-digit", minute: "2-digit", hourCycle: "h23" } : {}),
  }).formatToParts(value);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour"),
    minute: get("minute"),
  };
}

// 日付の列（DateTime @db.Date）→ 「2026/11/21」。日時には formatDateTime を使う
// 日付の列は UTC の0時で保存されるので、UTC の日付をそのまま出す
export function formatDate(value: Date | string): string {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value.replaceAll("-", "/");
  }
  return new Date(value).toISOString().slice(0, 10).replaceAll("-", "/");
}

// 日時 → 「2026/11/23 14:30」（日本時間）
export function formatDateTime(value: Date | string): string {
  const { year, month, day, hour, minute } = partsInJapan(new Date(value), true);
  return `${year}/${month}/${day} ${hour}:${minute}`;
}

// 日本時間の今日 → 「2026-11-23」（入力欄の type="date" と同じ形）
// 日付の列に保存するとき・比べるときは new Date(todayInJapan())（UTC の0時）にする
export function todayInJapan(now: Date = new Date()): string {
  const { year, month, day } = partsInJapan(now, false);
  return `${year}-${month}-${day}`;
}
