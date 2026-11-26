import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "@/lib/prisma";

// ログインの土台（Better Auth）。メールアドレスとパスワードでログインする
// このファイルには import "server-only" を書かない（Better Auth の CLI が読めなくなるため）。
// CLI を使うときは、src/lib/prisma.ts の import "server-only" も一時的に外す。
// 環境変数: BETTER_AUTH_SECRET（秘密の文字列）、BETTER_AUTH_URL（アプリの URL）
export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
  },
  // Server Actions からログインしたときに、Cookie を設定できるようにする（最後に置く）
  plugins: [nextCookies()],
});
