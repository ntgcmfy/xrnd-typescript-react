import type { ReactNode } from "react";

// 入力欄の見た目。高さは44px以上。<input className={inputClass} /> のように使う
export const inputClass =
  "min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-danger aria-invalid:ring-danger/20";

// ラベル・入力欄・説明・エラーを縦に並べる。htmlFor と入力欄の id を同じにする
// エラーがある入力欄には aria-invalid と aria-describedby={`${id}-error`} を付ける（エラーの文が読み上げられる）
// 例: <input id="title" aria-invalid={!!error} aria-describedby={error ? "title-error" : undefined} />
export function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: ReactNode;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-slate-800">
        {label}
        {required && (
          <span aria-hidden className="ml-1.5 text-xs font-medium text-danger">
            必須
          </span>
        )}
      </label>
      {children}
      {hint && <p className="text-xs text-slate-500">{hint}</p>}
      {error && (
        <p id={`${htmlFor}-error`} className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
