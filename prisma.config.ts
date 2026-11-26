import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// 通常は .env を読む。テスト用のブランチに対して実行するときは ENV_FILE=.env.test を付ける
config({ path: process.env.ENV_FILE ?? ".env", quiet: true });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // マイグレーションは直接接続（-pooler が付かないほう）で行う
    // .env がまだ無くても prisma generate は動くように、env() ではなく process.env で読む
    url: process.env.DATABASE_URL_UNPOOLED,
  },
});
