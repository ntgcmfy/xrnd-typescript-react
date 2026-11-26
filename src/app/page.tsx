import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { requireUser } from "@/lib/session";

// ログインが必要な画面の例。ログインしていなければ /login に移る
export default async function Home() {
  const user = await requireUser();

  return (
    <>
      <PageHeader title="（アプリの名前）" description="（アプリの説明）" />
      <Card>
        <p className="font-semibold text-slate-900">{user.name} さんがログインしています。</p>
        <p className="mt-2 text-sm text-slate-600">
          工程3で、docs/design.md の画面を作っていきます。
        </p>
      </Card>
    </>
  );
}
