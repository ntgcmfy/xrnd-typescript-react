import { getCurrentUser } from "@/lib/session";

// ログインしている人を返す API。ログインしていなければ 401
// ログインが必要な API は、この形で getCurrentUser() を最初に確かめる
export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "ログインしてください。" }, { status: 401 });
  }
  return Response.json(user);
}
