import type { ReactNode } from "react";

// 画面全体にかかわるエラー（保存できなかった、AI がつながらなかった など）
export function ErrorText({ children }: { children: ReactNode }) {
  return (
    <p role="alert" className="rounded-lg bg-danger-soft px-3 py-2 text-sm text-danger">
      {children}
    </p>
  );
}
