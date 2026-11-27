# Requirements — InterviewNote (面接メモ整理)

## What it does

- A logged-in recruiter registers applicants (name, position, status).
- The recruiter records each interview of an applicant: date, interviewer name, and raw notes or transcript (up to 10000 characters).
- With one button, the AI turns the raw notes into an evaluation sheet that uses the same 4 criteria for every interviewer.
- The AI also checks its sheet for personality judgments, statements not found in the notes, and scores that contradict their comments.
- The recruiter edits the draft and saves it. The recommendation (advance / hold / reject) is only a draft; the recruiter makes the final decision.
- The recruiter compares the saved evaluations of one applicant side by side.
- Every user sees only their own applicants, interviews and evaluations.

## Screens

Common to every screen:

- A header at the top with: the app name, a language toggle button (shows "EN" when the screen is Japanese and "日本語" when it is English), and, when logged in, the user's name and a Log-out button. Log-in and Sign-up show the header without the name and Log-out.
- Below the header, one page title (one per screen), then the content. The content is one column and at most 3xl wide.
- The language toggle switches all screen text between Japanese and English: labels, buttons, placeholders, messages, errors, criteria names, status names and the not-found screen. The choice is remembered for the next visit. The default is Japanese. Text the user typed is never translated.
- Buttons and inputs are at least 44px high. Every screen works at 360px width.
- Dates are shown as `2026/11/23`, in the same format in both languages.
- Required fields are marked. An error is shown in red text directly under the field it belongs to.
- Delete always asks first on the same page: the text "Delete this?" with a "Yes" and a "No" button. "No" closes the question and changes nothing. "Yes" deletes.
- A screen for an item that is not the user's own, or does not exist, shows the not-found screen: the title "見つかりません" / "Not found" and a link back to the applicant list.

The 4 fixed criteria, in this order, are: communication, job skills and experience, problem solving, motivation.
The 4 statuses, in this order, are: in progress (選考中), offer (内定), rejected (不採用), withdrawn (辞退). A new applicant starts as "in progress".

### 1. Log-in (/login)

- Title: Log in.
- Fields: email, password.
- Buttons and links: a "Log in" button (submit); a link "Create an account" to Sign-up.
- Email format check on the screen: the email must look like an email address (text, "@", then a domain with a dot, no spaces; for example `name@example.com`). If not, the error "Enter a valid email address." is shown under the email field, and nothing is sent. The check runs when the user leaves the field and again when the user presses "Log in".
- Wrong email or password: one error message above the button; the fields are kept.
- Success: go to the applicant list.
- If the user is already logged in, go to the applicant list.

### 2. Sign-up (/signup)

- Title: Sign up.
- Fields: name, email, password (at least 8 characters).
- Buttons and links: a "Sign up" button (submit); a link "I already have an account" to Log-in.
- Checks on the screen, before anything is sent: the email must look like an email address (text, "@", then a domain with a dot, no spaces), otherwise the error "Enter a valid email address." is shown under the email field; the password must have at least 8 characters, otherwise the error "Password must be at least 8 characters." is shown under the password field; the name must not be empty. The checks run when the user leaves a field and again when the user presses "Sign up".
- The server checks the same rules again; the screen check is only for quick feedback.
- Email already used, or invalid input: an error under the field or above the button.
- Success: the user is logged in and goes to the applicant list.

### 3. Applicant list (/)

- Title: Applicants.
- Top, in this order: the note "Do not enter real personal information." (always visible); a search bar (placeholder "Search by name"); a "New applicant" button (goes to screen 4 in create mode).
- List: one card per applicant, newest created first, 20 per page. Each card shows name, position and status. Clicking the card opens the applicant detail (screen 5).
- Below the list: "Previous" and "Next" buttons, shown only when there is more than one page. "Previous" is disabled on the first page and "Next" on the last.
- Search: matches applicants whose name contains the typed text; partial match; upper and lower case are the same; leading and trailing spaces are ignored. The list updates while typing, 300 ms after the last key. A search starts again at page 1. The search never shows other users' applicants.
- When the user has no applicants: the message "No applicants yet. Create the first one." When the search finds nothing: "No applicants match."
- The search text stays in the search bar until the user clears it or leaves the screen.

### 4. Applicant create/edit (/applicants/new and /applicants/[id]/edit)

- Title: "New applicant" (create) or "Edit applicant" (edit).
- The note "Do not enter real personal information." is shown above the fields.
- Fields: name (required, 1–50 characters), position (required, 1–50 characters), status (a select with the 4 statuses). In edit mode the fields are filled with the saved values.
- Buttons: "Save" (primary) and "Cancel" (goes back without saving: to the list in create mode, to the applicant detail in edit mode). In edit mode also "Delete" (red, asks Yes / No); after "Yes" the applicant, its interviews and its evaluations are deleted and the user goes to the applicant list.
- Save success: goes to the applicant detail (of the new applicant in create mode).
- Validation: an empty or over-long name or position shows an error under the field and saves nothing. Spaces only counts as empty.

### 5. Applicant detail (/applicants/[id])

- Title: the applicant's name.
- Top card: position, status, and the buttons "Edit" (screen 4 edit mode) and "Back to list".
- Interviews section: the heading "Interviews" and a "New interview" button (screen 6 in create mode). One card per interview, newest interview date first, showing date, interviewer name, and a label "Evaluated" or "Not evaluated". Clicking the card opens the evaluation sheet (screen 7). Each card also has an "Edit notes" link to screen 6 in edit mode. With no interviews: "No interviews yet."
- Comparison section: the heading "Compare evaluations". It shows a table only when at least 2 interviews have a saved evaluation; otherwise the text "Save evaluations of at least 2 interviews to compare them."
- The table has one column per evaluated interview (header: date and interviewer name; oldest on the left) and these rows: one row per criterion showing the score (1–5), then "Recommendation" (advance / hold / reject), then "Summary" (the one-line summary). On a narrow screen the table scrolls sideways.
- Clicking a column header opens that interview's evaluation sheet.

### 6. Interview create/edit (/applicants/[id]/interviews/new and /interviews/[id]/edit)

- Title: "New interview" (create) or "Edit interview" (edit). The applicant's name is shown under the title.
- The note "Do not enter real personal information." is shown above the fields.
- Fields: interview date (required, a date picker, default today in Japan), interviewer name (required, 1–50 characters), notes (required, a multi-line text area at least 10 rows high, 1–10000 characters). A character counter "123 / 10000" is shown under the notes. The notes are plain text only; there is no file input.
- Buttons: "Save" (primary) and "Cancel" (goes back to the applicant detail). In edit mode also "Delete" (red, asks Yes / No); after "Yes" the interview and its evaluation are deleted and the user goes to the applicant detail.
- Save success: create goes to the evaluation sheet of the new interview; edit goes to the applicant detail.
- Validation: errors under the fields; nothing is saved.
- Saving edited notes keeps the existing evaluation sheet as it is.

### 7. Evaluation sheet (/interviews/[id]/evaluation)

- Title: "Evaluation sheet". Under it: the applicant's name, position, interview date and interviewer name, and the links "Edit notes" (screen 6 edit mode) and "Back to applicant" (screen 5).
- Layout: on a wide screen two columns, the notes on the left and the sheet on the right. On a narrow screen one column, the notes first.
- Notes area: the heading "Interview notes" and the full notes, read-only, in a box with a fixed height that scrolls. The user can scroll through all of the notes at any time. Line breaks are kept. Only the evidence of the chosen criterion is highlighted (yellow background); all other text looks normal.
- Sheet area, from top to bottom:
  1. The "AI draft" button (purple).
  2. Four criterion blocks in the fixed order. Each has: the criterion name; a score select (1–5; empty when there is no sheet yet); a one-line comment input (up to 80 characters); a "Show evidence" button.
  3. "Strengths": a multi-line text area, one strength per line (up to 5 lines).
  4. "Concerns": a multi-line text area, one concern per line (up to 5 lines).
  5. "Recommendation (draft)": a select with advance, hold, reject; next to it the text "This is only a draft. The final decision is yours."
  6. "Summary": a one-line input (up to 120 characters).
  7. "Check results": a list (see below).
  8. Buttons: "Save" (primary) and, only when a sheet is saved, "Delete sheet" (red, asks Yes / No; after "Yes" the sheet is deleted and the user stays on this screen with an empty form).
- Before any sheet exists, the fields are empty and the check results area says "Press AI draft to create a sheet." The user can also fill the fields by hand and save.
- "Show evidence": pressing it highlights all evidence quotes of that criterion in the notes and scrolls the notes box so that the first quote is in the vertical middle of the box (only the notes box scrolls, not the whole page); the button changes to "Hide evidence". Only one criterion is highlighted at a time: pressing another criterion's "Show evidence" button first removes the old highlight (and its button goes back to "Show evidence"), then highlights the evidence of the chosen criterion and scrolls the notes box so that its first quote is in the middle of the box. When a quote is near the start or end of the notes and cannot be centered, the box scrolls as far as it can. Pressing "Hide evidence" removes the highlight. The evidence is not shown anywhere else. If none of a criterion's evidence can be found in the notes, its button is disabled and the text "No evidence found" is shown next to it.
- "Check results": each item shows a kind label (Personality judgment / Not in the notes / Score contradicts comment), the sentence it points at, and a short reason. When there is nothing to flag: "Nothing to flag." Check results are hints; they never block saving.
- Save: the 4 scores, the 4 comments, the recommendation and the summary are required. A missing one shows an error under it and saves nothing. On success the message "Saved." is shown and the user stays on the screen.

## Interactions

- Someone who is not logged in and opens any screen except Log-in and Sign-up is sent to the Log-in screen.
- After log-in or sign-up the user lands on the applicant list. Log-out is in the header and sends the user to the Log-in screen.
- Deleting an applicant also deletes its interviews and evaluations; deleting an interview also deletes its evaluation. Each delete asks first (Yes / No).
- Each interview has at most one evaluation sheet.
- Pressing "AI draft" with empty notes does nothing and shows an error. While the AI works, the button is disabled and the message "Creating the draft…" is shown; the wait is at most 60 seconds.
- The AI draft fills the sheet fields, the evidence and the check results on the screen, but nothing is saved until the user presses "Save". If the form already has content, the user is asked "Replace the current content with a new draft?" (Yes / No) before the AI is called.
- The AI draft is written in the language selected when the button is pressed. Notes can be in either language.
- When the AI fails or times out, the screen shows one fixed error message, the form keeps what the user had, and nothing is saved.
- For each criterion the AI gives 1 to 3 evidence quotes copied word for word from the notes. A quote that cannot be found in the notes is not highlighted and is reported as "Not in the notes" in the check results.
- The evidence quotes are saved with the sheet. If the user edits the notes afterwards, quotes that no longer match are not highlighted.
- The user can change scores and text after the AI draft; the check results stay as the AI returned them until the next AI draft.

## Out of scope

- More ways to log in (Google and other providers, password-reset email)
- More than one kind of user (for example an administrator)
- External services, payments, file uploads
- Interview scheduling
- Emails to applicants (result notices and others)
- A second AI feature that summarizes all sheets of an applicant
- Custom evaluation criteria (the 4 criteria are fixed)
- Sharing applicants between users, and comments from several interviewers on one sheet
- Filters on the applicant list (only the name search is built)
- Languages other than Japanese and English
- Translating data the user typed (names, notes, saved sheets stay as typed)
- Real personal information (only fictional applicants are used)

## AI feature

### Input

- The raw interview notes or transcript, as text (up to 10000 characters).
- The applicant's position.
- The 4 fixed criteria: communication, job skills and experience, problem solving, motivation.
- The output language (Japanese or English).

Example:

```
Position: Sales representative
Language: English
Notes:
Interviewer: Please introduce yourself.
Applicant: I worked 3 years at a software company in sales. I handled about 30 accounts and reached 110% of my target in the last year.
Interviewer: Tell me about a difficult case.
Applicant: A client wanted to cancel. I visited twice, listened to their problem, and offered a cheaper plan. They stayed.
Interviewer: Why our company?
Applicant: I like your product. I'm not sure about the details of the market yet.
Seemed a bit nervous at the start.
```

### Expected output

One evaluation sheet:

- For each of the 4 criteria: a score (1–5), a one-line comment (up to 80 characters), and 1 to 3 evidence quotes copied word for word from the notes (used only for the highlight).
- Strengths (list) and concerns (list).
- A draft recommendation: advance, hold or reject.
- A one-line summary (up to 120 characters).
- Check results: a list of items, each with a kind (personality judgment, statement not in the notes, score contradicts comment) and the sentence it points at.
- Everything is written in the selected language.

Example for the input above:

```
Communication: 4 - Clear answers with concrete examples.
  Evidence: "I handled about 30 accounts"
Job skills and experience: 4 - Solid sales results over 3 years.
  Evidence: "reached 110% of my target"
Problem solving: 4 - Kept a client who wanted to cancel.
  Evidence: "I visited twice, listened to their problem, and offered a cheaper plan"
Motivation: 3 - Likes the product; knowledge of the market is limited.
  Evidence: "I like your product", "I'm not sure about the details of the market yet"
Strengths: Concrete results; careful with clients.
Concerns: Limited knowledge of our market.
Recommendation (draft): advance
Summary: Three years of sales with measurable results; needs to learn the market.
Check results:
- Personality judgment: "Seemed a bit nervous at the start" is an impression, not a fact.
```

### How to check the output

- The summary only have the information in the input text
- All 4 criteria are present, and every score is between 1 and 5.
- Each comment is at most 80 characters and the summary is at most 120.
- Every evidence quote can be found word for word in the notes.
- The recommendation is one of advance, hold or reject.
- Personality judgments are flagged.
