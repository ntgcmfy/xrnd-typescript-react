# 工程2のレポート

## やったこと

- `docs/theme.md` から、`docs/requirements.md`（要件）、`docs/design.md`（設計）、`docs/tasks.md`（タスク分割）の3つを作った。
- 要件：7画面（ログイン、新規登録、応募者一覧、応募者の作成・編集、応募者の詳細、面接の作成・編集、評価シート）。評価基準は4つ、ステータスは4つに固定した。範囲外（日程調整、メール送信、独自の評価基準など）も書いた。
- AI の機能：面接メモから評価シートの下書きを作る。入力、出力の例、出力の確認方法を `docs/requirements.md` に書いた。設計には、プロンプト、構造化出力の形、サーバーでの検証（点数の範囲、文字数、引用がメモにあるか）を書いた。
- 設計：テーブル4つ（User、Applicant、Interview、Evaluation）と API。他のユーザーのデータは 404 を返す決まりにした。
- タスク：6つに分けた。1は登録と一覧、2は AI の機能、3は保存と比較、4は編集と削除、5はメールとパスワードのチェック、6は日本語・英語の切り替え。それぞれに「Done when」を付けた。

## AI に任せたことと、自分で確かめたこと

| AI に任せたこと | 自分で確かめたこと・直したこと |
| --------------- | ------------------------------ |
| `docs/theme.md` をもとにした `docs/requirements.md` の下書き | 画面ごとの動きと範囲外が、テーマの内容と合っているか読んで確認した。メールの形式チェックと日本語・英語の切り替えを要件に加えた。AI の機能の入力、出力、確認方法も自分で書いた。 |
| `docs/requirements.md` をもとにした `docs/design.md`（テーブル、API、AI プロンプト、画面） | 要件の機能がすべて API と画面で足りているか（Coverage check）を確認した。テーブルの各項目が適切かも確認した。OpenAI を呼ぶ API 用の固定プロンプトも自分で加えた。 |
| 要件と設計をもとにした `docs/tasks.md`（6つのタスクと「Done when」） | タスク1が登録と一覧、タスク2が AI の機能になっているか確認した。「Done when」が画面で確かめられる書き方になっているか見た。 |

## 詰まったことと、解決のしかた

なし

## かかった時間

| 手順 | 時間 |
| ---- | ---- |
| 1. 要件を書く（`docs/requirements.md`） | 2.5時間  |
| 2. 設計を書く（`docs/design.md`） | 1時間 |
| 3. タスクに分ける（`docs/tasks.md`） | 40分 |
| 4. レポートを作成 | 30分  |
| 合計 | 4時間40分 |

---

# Step 2 Report (English)

## What I did

- From `docs/theme.md`, I made three documents: `docs/requirements.md`, `docs/design.md` and `docs/tasks.md`.
- Requirements: 7 screens (log-in, sign-up, applicant list, applicant create/edit, applicant detail, interview create/edit, evaluation sheet). The 4 criteria and the 4 statuses are fixed. I also wrote the out-of-scope items (scheduling, emails, custom criteria and others).
- AI feature: it makes a draft evaluation sheet from interview notes. The input, an example output and how to check the output are in `docs/requirements.md`. The design has the prompt, the structured output shape and the server-side checks (score range, length, quotes found in the notes).
- Design: 4 tables (User, Applicant, Interview, Evaluation) and the APIs. Other users' data returns 404.
- Tasks: split into 6. Task 1 is register and list, task 2 is the AI feature, task 3 is save and compare, task 4 is edit and delete, task 5 is email and password checks, task 6 is the Japanese / English toggle. Each has a "Done when".

## What I left to the AI, and what I checked myself

| Left to the AI | What I checked or fixed myself |
| -------------- | ------------------------------ |
| The first draft of `docs/requirements.md` from `docs/theme.md` | I read each screen's behavior and the out-of-scope list against the theme. I added the email format check and the Japanese / English toggle. I wrote the AI feature input, output and how to check. |
| `docs/design.md` (tables, APIs, AI prompt, screens) from the requirements | I checked that every feature in the requirements is covered by an API and a screen (Coverage check). I make sure that all the record in the table are suitable. I also added the fixed promt for the API OpenAI call request.  |
| `docs/tasks.md` (6 tasks with "Done when") from the requirements and design | I checked that task 1 is register and list and task 2 is the AI feature, and that each "Done when" can be checked on screen. |

## Problems and how I solved them

None

## Time spent

| Step | Time |
| ---- | ---- |
| 1. Write the requirements (`docs/requirements.md`) | 2.5h |
| 2. Write the design (`docs/design.md`) | 1h |
| 3. Split into tasks (`docs/tasks.md`) | 40m |
| 4. Write the report | 30ⅿ |
| Total | 4h40ⅿ |
