import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";

// E2E テストは、発表で見せる操作（登録 → 一覧 → AI の結果）を画面から通す。
// 開発用のデータを汚さないように、.env.test（Neon の test ブランチ）を使い、
// 開発用のサーバーとは別のポート（3100）と別の出力先（.next-e2e）でサーバーを起動する。
const testEnv: Record<string, string> = {};
config({ path: ".env.test", processEnv: testEnv, quiet: true });

const port = 3100;

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  // 起動した直後の開発用のサーバーは、ページを初めて開くときのコンパイルに5秒以上かかることがある
  expect: { timeout: 15_000 },
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `npx next dev --port ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: false,
    timeout: 120_000,
    // OpenAI は呼ばず、決まった出力を返す偽物を使う（工程4で使う）
    env: {
      ...testEnv,
      AI_MOCK: "true",
      NEXT_DIST_DIR: ".next-e2e",
      BETTER_AUTH_URL: `http://localhost:${port}`,
    },
  },
});
