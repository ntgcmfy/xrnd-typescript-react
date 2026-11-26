import Link from "next/link";
import type { ReactNode } from "react";

// 画面のいちばん上。戻るリンク・見出し（h1）・説明・右側のボタン
export function PageHeader({
  title,
  description,
  back,
  actions,
}: {
  title: string;
  description?: ReactNode;
  back?: { href: string; label: string };
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6">
      {back && (
        <Link
          href={back.href}
          className="inline-flex min-h-11 items-center text-sm text-primary hover:underline"
        >
          ← {back.label}
        </Link>
      )}
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
          {description && <div className="mt-1 text-sm text-slate-600">{description}</div>}
        </div>
        {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
      </div>
    </div>
  );
}
