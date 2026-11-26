import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

// 無いページや、ほかの人のデータを開いたとき（ページで notFound() を呼んだときも）
export default function NotFound() {
  return (
    <>
      <PageHeader title="見つかりません" />
      <Card>
        <p className="text-sm text-slate-600">消されたか、ほかの人のものか、URL が違います。</p>
        <LinkButton href="/" className="mt-4">
          トップページへ
        </LinkButton>
      </Card>
    </>
  );
}
