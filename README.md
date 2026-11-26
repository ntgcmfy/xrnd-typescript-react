# （アプリの名前）

（アプリの説明を1〜2文で書く。工程1で決めた `docs/theme.md` の内容）

言語編（TypeScript React編）の課題で作るアプリです。

## 使っている技術

| 役割             | 使っているもの                              |
| ---------------- | ------------------------------------------- |
| 画面とサーバー   | Next.js（App Router）                       |
| データベース     | Neon（PostgreSQL）＋ Prisma                 |
| ログイン         | Better Auth（メールアドレスとパスワード）   |
| AI               | OpenAI の API                               |
| テスト           | Vitest（ユニット・統合）、Playwright（E2E） |
| 型・リンタ・書式 | TypeScript、ESLint、Prettier                |

Node.js 22 以上が必要です（[Node.js の公式サイト](https://nodejs.org/)の LTS を入れる）。

Cursor に入れる拡張機能は、`.vscode/extensions.json` に一覧があります（ESLint・Path Intellisense・Prettier・Playwright・Prisma・Tailwind CSS IntelliSense）。

## 最初にやること（工程3）

1. パッケージを入れる

   ```bash
   npm install
   ```

2. `.env.example` をコピーして `.env` を作り、Neon の開発用のブランチの接続文字列を入れる。`BETTER_AUTH_SECRET` には `npx auth@latest secret` で作った文字列を入れる
3. `.env.test.example` をコピーして `.env.test` を作り、Neon の `test` ブランチの接続文字列を入れる
4. Playwright のブラウザを入れる

   ```bash
   npx playwright install chromium
   ```

5. ログインのテーブルを作る（開発用と test の両方のブランチに）

   ```bash
   npm run db:migrate
   npm run db:test:migrate
   ```

6. チェックがすべて通ることを確かめる

   ```bash
   npm run check
   ```

`.env` と `.env.test` は Git に入れません（`.gitignore` 済み）。Cursor のエージェントにも読ませません（`.cursorignore` 済み）。

## コマンド

| コマンド                  | すること                                                                                                        |
| ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `npm run dev`             | 開発用のサーバーを起動する（http://localhost:3000）                                                             |
| `npm run check`           | リンタ・書式・型・ユニットテスト・統合テストをまとめて実行する                                                  |
| `npm run e2e`             | E2E テストを実行する（マージの前に実行する）                                                                    |
| `npm run format`          | 書式を自動で直す                                                                                                |
| `npm run db:migrate`      | テーブルの変更を、開発用のブランチに反映し、`prisma generate` も実行する（そのあと `npm run dev` を起動し直す） |
| `npm run db:test:migrate` | テーブルの変更を、`test` ブランチに反映する                                                                     |

## フォルダの構成

| 場所                 | 中身                                                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `docs/`              | テーマ・要件・設計・タスク・レポート                                                                                   |
| `src/app/`           | 画面と API（`src/app/api/`）                                                                                           |
| `src/components/`    | 画面の部品。どの画面でも使う部品（ボタン・カード・入力欄など）は `ui/`、削除の確認は `confirm-delete.tsx`              |
| `src/lib/`           | データベースを使う、サーバー側の処理。ログインは `auth.ts`（Better Auth）と `session.ts`（ログインしている人を調べる） |
| `src/lib/ai/`        | OpenAI を使う処理（AI の機能ごとに1ファイル。プロンプトは `prompts/`、テスト用の決まった出力は `mocks/`）              |
| `prisma/`            | テーブルの定義とマイグレーション                                                                                       |
| `tests/integration/` | 統合テスト（Neon の `test` ブランチを使う）                                                                            |
| `e2e/`               | E2E テスト                                                                                                             |
| `.cursor/`           | ルール・サブエージェント・Skill（ハーネス）                                                                            |
