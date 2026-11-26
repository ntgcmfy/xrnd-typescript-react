import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";

// 登録・ログイン・ログアウトの API（/api/auth/...）は、Better Auth が受け持つ
export const { GET, POST } = toNextJsHandler(auth);
