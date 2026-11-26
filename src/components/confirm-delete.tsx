"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ErrorText } from "@/components/ui/error-text";

// 「削除する」→ 同じ画面の中に確認を出す →「はい」で消す（ブラウザの確認のダイアログは使わない）
// onConfirm が失敗したら（例外を投げたら）、確認を出したままエラーを出す
export function ConfirmDelete({
  message,
  onConfirm,
}: {
  message: string;
  onConfirm: () => Promise<void>;
}) {
  const [asking, setAsking] = useState(false);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!asking) {
    return (
      <Button variant="danger" onClick={() => setAsking(true)}>
        削除する
      </Button>
    );
  }
  return (
    <div
      role="alertdialog"
      aria-label="削除の確認"
      className="flex w-full flex-col gap-3 rounded-lg border border-red-200 bg-danger-soft p-4"
    >
      <p className="text-sm font-semibold text-red-800">{message}</p>
      {failed && <ErrorText>削除できませんでした。もう一度お試しください。</ErrorText>}
      <div className="flex gap-2">
        <Button
          variant="danger"
          disabled={pending}
          onClick={async () => {
            setPending(true);
            setFailed(false);
            try {
              await onConfirm();
            } catch (error) {
              console.error(error);
              setFailed(true);
            } finally {
              setPending(false);
            }
          }}
        >
          はい
        </Button>
        {/* 間違えて消さないように、いいえを先に選んでおく */}
        <Button
          autoFocus
          onClick={() => {
            setAsking(false);
            setFailed(false);
          }}
          disabled={pending}
        >
          いいえ
        </Button>
      </div>
    </div>
  );
}
