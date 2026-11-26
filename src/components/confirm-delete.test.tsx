// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConfirmDelete } from "./confirm-delete";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("ConfirmDelete", () => {
  it("「削除する」を押すと、同じ画面に確認を出す", () => {
    render(<ConfirmDelete message="削除しますか？" onConfirm={vi.fn()} />);
    expect(screen.queryByText("削除しますか？")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "削除する" }));

    expect(screen.getByText("削除しますか？")).toBeTruthy();
    expect(screen.getByRole("button", { name: "はい" })).toBeTruthy();
  });

  it("「はい」を押すと onConfirm を呼ぶ", async () => {
    const onConfirm = vi.fn().mockResolvedValue(undefined);
    render(<ConfirmDelete message="削除しますか？" onConfirm={onConfirm} />);

    fireEvent.click(screen.getByRole("button", { name: "削除する" }));
    fireEvent.click(screen.getByRole("button", { name: "はい" }));

    await waitFor(() => expect(onConfirm).toHaveBeenCalledTimes(1));
  });

  it("「いいえ」を押すと、消さずに元に戻る", () => {
    const onConfirm = vi.fn();
    render(<ConfirmDelete message="削除しますか？" onConfirm={onConfirm} />);

    fireEvent.click(screen.getByRole("button", { name: "削除する" }));
    fireEvent.click(screen.getByRole("button", { name: "いいえ" }));

    expect(onConfirm).not.toHaveBeenCalled();
    expect(screen.queryByText("削除しますか？")).toBeNull();
    expect(screen.getByRole("button", { name: "削除する" })).toBeTruthy();
  });

  it("「はい」で消せなかったら、エラーを出して確認を残す", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const onConfirm = vi.fn().mockRejectedValue(new Error("500"));
    render(<ConfirmDelete message="削除しますか？" onConfirm={onConfirm} />);

    fireEvent.click(screen.getByRole("button", { name: "削除する" }));
    fireEvent.click(screen.getByRole("button", { name: "はい" }));

    expect(await screen.findByText("削除できませんでした。もう一度お試しください。")).toBeTruthy();
    expect(screen.getByText("削除しますか？")).toBeTruthy();
    expect((screen.getByRole("button", { name: "はい" }) as HTMLButtonElement).disabled).toBe(
      false,
    );
  });

  it("確認を出したとき、「いいえ」が選ばれている", () => {
    render(<ConfirmDelete message="削除しますか？" onConfirm={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "削除する" }));
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "いいえ" }));
  });
});
