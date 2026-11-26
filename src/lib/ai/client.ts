import "server-only";
import OpenAI from "openai";

let client: OpenAI | undefined;

// OpenAI のクライアント。API キーは環境変数 OPENAI_API_KEY から読まれる
// 画面で利用者を待たせすぎないように、タイムアウトを30秒、再試行を1回にしている（SDK の既定は10分・2回）
export function getOpenAI(): OpenAI {
  client ??= new OpenAI({ timeout: 30_000, maxRetries: 1 });
  return client;
}

// 使うモデル。教材にモデル名を書かないため、メンターが指定したものを .env の OPENAI_MODEL に入れる
export function getModel(): string {
  const model = process.env.OPENAI_MODEL;
  if (!model) {
    throw new Error("OPENAI_MODEL が設定されていません。.env を確認してください。");
  }
  return model;
}

// AI_MOCK=true のときは OpenAI を呼ばず、決まった出力を返す（E2E テストや、API キーが無いときの確認に使う）
export function isAiMock(): boolean {
  return process.env.AI_MOCK === "true";
}
