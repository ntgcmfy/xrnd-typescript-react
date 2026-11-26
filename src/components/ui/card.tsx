import type { ComponentProps } from "react";

// 白いカード。画面の中身のまとまりごとに使う
export function Card({ className = "", ...props }: ComponentProps<"section">) {
  return (
    <section
      className={`rounded-card border border-slate-200 bg-white p-5 shadow-card sm:p-6 ${className}`.trim()}
      {...props}
    />
  );
}
