import { config } from "dotenv";

// 統合テストは、Neon のテスト用ブランチ（.env.test）に接続する
const result = config({ path: ".env.test", override: true, quiet: true });
if (result.error) {
  throw new Error(".env.test がありません。.env.test.example をコピーして作ってください。");
}
