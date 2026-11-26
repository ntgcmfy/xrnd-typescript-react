import { createAuthClient } from "better-auth/react";

// 画面（ブラウザ側）から、登録・ログイン・ログアウトを呼ぶためのクライアント
export const authClient = createAuthClient();
