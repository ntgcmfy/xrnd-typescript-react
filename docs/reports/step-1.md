# 工程1のレポート

## やったこと

- 選んだ業種：人材
- 決めたテーマ：「InterviewNote（面接メモ整理）」。採用担当者1人が使う、面接メモを評価シートにまとめるアプリ。詳しくは `docs/theme.md` に書いた。
- AI の機能（1文）：面接の生メモを送ると、1回のテキスト生成 API 呼び出しで、基準ごとの点数とコメント、強み、懸念点、推薦の下書き、要約、偏りのチェック結果を、決まった項目の形で返す。
- AI が出した3つの案から1つを選んだ。選ばなかった案（求人票ライター、評価コメントコーチ、入社手続きアシスタント）は `docs/theme.md` の「Abandoned Idea:」に書いた。

## AI に任せたことと、自分で確かめたこと

| AI に任せたこと | 自分で確かめたこと・直したこと |
| --------------- | ------------------------------ |
| `docs/research.md` の調査（業務、困りごと、書類、出典 URL） | TODO：https://www.dodadsj.com/content/241101_concurrent-posts/  https://rpm.zeku.co.jp/research/2026-recruitment-workload 。 |
| `docs/theme-conditions.md` の7条件に沿ったテーマ案3つ | 案3（入社手続き）は条件3を満たしきれていなかった。タスク管理だけでも使えてしまい、AI がおまけになる恐れがあるため、選ばなかった。 |
| 選んだ案の最初の下書き | 条件6に合わなかったので直した。日程調整と結果メールは、カレンダーやメールとの連携が必要になるため、範囲から外した。あわせて AI のルール（メモにあることだけをまとめる、人を評価しない、推薦は下書きのみ）と、条件7のための「本物の個人情報を入力しない」注意書きを加えた。 |

## 詰まったことと、解決のしかた

なし

## かかった時間

| 手順 | 時間 |
| ---- | ---- |
| 1. 自分のリポジトリを作成 | 15分 |
| 2. 業種を選び、業務内容を調査 | 1時間 |
| 3. テーマ案を出す | 45分 |
| 4. テーマを1つに決定 | 45分 |
| 5. レポートを作成 | 15分 |
| 合計 | 3時間 |

---

# Step 1 Report (English)

## What I did

- Industry: HR (人材).
- Theme: "InterviewNote", an interview note organizer for one recruiter. It turns raw interview notes into an evaluation sheet. Details are in `docs/theme.md`.
- AI feature (one sentence): Raw interview notes go in, and one text-generation API call returns, in fixed fields, a score and comment per criterion, strengths, concerns, a draft recommendation, a summary and bias checks.
- I chose 1 of 3 ideas proposed by the AI. The other ideas (job posting writer, review comment coach, onboarding assistant) are listed under "Abandoned Idea:" in `docs/theme.md`.

## What I left to the AI, and what I checked myself

| Left to the AI | What I checked or fixed myself |
| -------------- | ------------------------------ |
| The research in `docs/research.md` (jobs, pain points, documents, source URLs) | TODO:checked link https://rpm.zeku.co.jp/research/2026-recruitment-workload https://www.dodadsj.com/content/241101_concurrent-posts/ |
| 3 theme ideas checked against the 7 conditions in `docs/theme-conditions.md` | Idea 3 (onboarding) did not fully meet condition 3. Task tracking alone would still be useful, so the AI could become a side feature. I did not choose it. |
| The first draft of the chosen idea | It broke condition 6, so I fixed it. Scheduling and result emails need calendar and email integration, so I removed them from the scope. I also added the AI rules (summarize only what is in the notes, do not judge people, the recommendation is only a draft) and the "do not enter real personal information" note for condition 7. |

## Problems and how I solved them

None

## Time spent

| Step | Time |
| ---- | ---- |
| 1. Create my own repository | 15 min |
| 2. Choose an industry and research the work | 1 hour |
| 3. Come up with theme ideas | 45 min |
| 4. Decide on one theme | 45 min |
| 5. Write the report | 15 min |
| Total | 3 hours |
