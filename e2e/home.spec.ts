import { expect, test } from "@playwright/test";

// 発表で見せる操作を通すテスト。今は「登録 → トップページ → ログアウト」まで
test("登録すると、トップページに名前が出て、ログアウトできる", async ({ page }) => {
  const email = `e2e-${Date.now()}@example.com`;

  await page.goto("/");
  await expect(page).toHaveURL(/\/login$/);

  await page.getByRole("link", { name: "はじめての人は、登録へ" }).click();
  await page.getByLabel("名前").fill("E2E テスト");
  await page.getByLabel("メールアドレス").fill(email);
  await page.getByLabel("パスワード（8文字以上）").fill("password-1234");
  await page.getByRole("button", { name: "登録する" }).click();

  await expect(page.getByText("E2E テスト さんがログインしています。")).toBeVisible();

  await page.getByRole("button", { name: "ログアウト" }).click();
  await expect(page).toHaveURL(/\/login$/);
});
