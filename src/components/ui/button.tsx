import Link from "next/link";
import type { ComponentProps } from "react";

// ボタンの見た目。primary: 保存・作成 / ai: AI を呼ぶもの / danger: 削除だけ
type Variant = "primary" | "secondary" | "ai" | "danger" | "ghost";

// 押しやすいように、高さは44px以上（min-h-11）
const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus-visible:outline-slate-500",
  ai: "bg-ai text-white shadow-sm hover:bg-ai-hover focus-visible:outline-ai",
  danger:
    "border border-red-300 bg-white text-danger hover:bg-danger-soft focus-visible:outline-danger",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-slate-500",
};

export function buttonClass(variant: Variant = "secondary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`.trim();
}

// type の既定は "button"（押してもフォームを送らない）。フォームを送るボタンには type="submit" を付ける
export function Button({
  variant = "secondary",
  className = "",
  type = "button",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button type={type} className={buttonClass(variant, className)} {...props} />;
}

// ボタンの見た目のリンク（ほかの画面に移るとき）
export function LinkButton({
  variant = "secondary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={buttonClass(variant, className)} {...props} />;
}
