"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ErrorText } from "@/components/ui/error-text";
import { Field, inputClass } from "@/components/ui/field";
import { authClient } from "@/lib/auth-client";

// 登録とログインの画面で共通に使うフォーム
export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email"));
    const password = String(form.get("password"));

    const { error } =
      mode === "signup"
        ? await authClient.signUp.email({ name: String(form.get("name")), email, password })
        : await authClient.signIn.email({ email, password });

    setPending(false);
    if (error) {
      setError(
        mode === "signup"
          ? "登録できませんでした。入力を確かめてください。"
          : "メールアドレスかパスワードが違います。",
      );
      return;
    }
    router.push("/");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {mode === "signup" && (
        <Field label="名前" htmlFor="name">
          <input id="name" name="name" required className={inputClass} />
        </Field>
      )}
      <Field label="メールアドレス" htmlFor="email">
        <input id="email" name="email" type="email" required className={inputClass} />
      </Field>
      <Field label="パスワード（8文字以上）" htmlFor="password">
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          className={inputClass}
        />
      </Field>
      {error && <ErrorText>{error}</ErrorText>}
      <Button type="submit" variant="primary" disabled={pending} className="mt-2 w-full">
        {mode === "signup" ? "登録する" : "ログインする"}
      </Button>
      {mode === "signup" ? (
        <Link
          href="/login"
          className="inline-flex min-h-11 items-center justify-center text-sm text-primary hover:underline"
        >
          登録済みの人は、ログインへ
        </Link>
      ) : (
        <Link
          href="/signup"
          className="inline-flex min-h-11 items-center justify-center text-sm text-primary hover:underline"
        >
          はじめての人は、登録へ
        </Link>
      )}
    </form>
  );
}
