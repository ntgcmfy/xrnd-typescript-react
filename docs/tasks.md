# Tasks

## 1. Register and list applicants and interviews

- What to do: Add the Applicant and Interview tables and the screens and APIs to create and list them for the logged-in user. Includes the name search, paging and the applicant detail with its interview list.
- Done when:
  - After log-in, the applicant list (/) shows the note "Do not enter real personal information.", the search bar and the "New applicant" button.
  - When you save a new applicant (name, position, status) with valid input, you go to its detail screen, and it appears at the top of the list as a card with name, position and status.
  - An empty or spaces-only name or position, or one over 50 characters, shows a red error under the field and saves nothing.
  - With 21 or more applicants, the list shows 20 per page, and "Previous" / "Next" work and are disabled on the first / last page; with one page they are hidden.
  - Typing in the search bar updates the list 300 ms after the last key (partial, case-insensitive, spaces ignored) and restarts at page 1; with no match it shows "No applicants match."; with no applicants it shows "No applicants yet. Create the first one."
  - On the applicant detail, "New interview" opens the form (date defaults to today in Japan, interviewer, notes with a "123 / 10000" counter); saving valid input goes to the evaluation sheet URL of the new interview, and the interview shows on the applicant detail as a card (date, interviewer, "Not evaluated"), newest date first. With no interviews it shows "No interviews yet."
  - Invalid interview input (empty fields, notes over 10000 characters) shows errors under the fields and saves nothing.
  - A second user cannot see the first user's applicants or interviews; opening them by URL shows 「見つかりません」 with a link to the applicant list. Logged-out users are sent to log-in.
  - The project's check command (`npm run check`) passes
- Tables / APIs / screens: Applicant, Interview; GET/POST /api/applicants, GET /api/applicants/[id], POST /api/applicants/[id]/interviews, GET /api/interviews/[id]; screens 3, 4 (create), 5 (interviews part), 6 (create)

## 2. AI draft on the evaluation sheet

- What to do: Add the Evaluation table (read side) and the evaluation sheet screen with notes box, the "AI draft" button, the draft API using OpenAI, and the evidence highlight and check results.
- Done when:
  - The evaluation sheet screen shows the applicant and interview info, the read-only notes in a fixed-height scrolling box, the 4 criterion blocks (empty), and "Press AI draft to create a sheet."
  - When you enter the input example from the "AI feature" section of docs/requirements.md, the output meets every item in "How to check the output".
  - While the AI works, the button is disabled and "Creating the draft…" is shown; the draft fills scores, comments, strengths, concerns, recommendation and summary on the screen, and nothing is saved (reloading shows an empty form).
  - If the form already has content, pressing "AI draft" first asks "Replace the current content with a new draft?" (Yes / No); "No" changes nothing.
  - Pressing "AI draft" with empty notes shows an error and does nothing; an AI failure or timeout shows one fixed error message and keeps the form.
  - "Show evidence" highlights only that criterion's quotes in yellow, centers the first quote in the notes box (only the box scrolls), and changes to "Hide evidence"; pressing another criterion switches the highlight; a criterion without findable evidence has a disabled button and "No evidence found".
  - A quote not found in the notes is not highlighted and appears as "Not in the notes" in the check results; personality judgments are flagged; with nothing to flag, "Nothing to flag." is shown.
  - The project's check command (`npm run check`) passes, with no real OpenAI call in tests
- Tables / APIs / screens: Evaluation; GET /api/interviews/[id]/evaluation, POST /api/interviews/[id]/evaluation/draft; screen 7 (without save)

## 3. Save evaluations and compare them

- What to do: Save, replace and delete the evaluation sheet, show the Evaluated label, and the comparison table on the applicant detail.
- Done when:
  - Pressing "Save" with the 4 scores, 4 comments, recommendation and summary filled shows "Saved." and stays on the screen; after reloading, the saved values, evidence highlight and check results are the same.
  - A missing required value shows a red error under it and saves nothing; strengths or concerns over 5 lines, comments over 80 or summary over 120 characters are rejected with an error.
  - A sheet can also be filled by hand and saved; saving again replaces the sheet (one per interview).
  - "Delete sheet" appears only when a sheet is saved; it asks "Delete this?" (Yes / No); "No" changes nothing, "Yes" empties the form and stays on the screen.
  - The interview card on the applicant detail shows "Evaluated" after saving.
  - With fewer than 2 saved sheets, the detail shows "Save evaluations of at least 2 interviews to compare them."; with 2 or more it shows a table (oldest left; header date and interviewer; 4 criteria scores, Recommendation, Summary) that scrolls sideways on a narrow screen, and clicking a header opens that sheet.
  - Other users' sheets cannot be read, saved or deleted (not-found screen).
  - The project's check command (`npm run check`) passes
- Tables / APIs / screens: Evaluation; PUT/DELETE /api/interviews/[id]/evaluation, GET /api/applicants/[id] (comparison); screens 5 (comparison), 7 (save, delete)

## 4. Edit and delete applicants and interviews

- What to do: Add edit modes and Yes / No deletes for applicants and interviews, with cascading deletes.
- Done when:
  - "Edit" on the applicant detail opens the form filled with saved values; saving goes to the detail and shows the changes; "Cancel" goes back to the detail without saving.
  - "Edit notes" on an interview card or the sheet opens the interview form filled in; saving goes to the applicant detail and the existing evaluation sheet stays as it was.
  - "Delete" asks "Delete this?" (Yes / No); "No" changes nothing; "Yes" on an interview deletes it and its sheet and goes to the applicant detail; "Yes" on an applicant deletes it, its interviews and sheets and goes to the list.
  - If notes are edited, evidence quotes that no longer match are not highlighted.
  - Editing or deleting another user's item shows the not-found screen.
  - The project's check command (`npm run check`) passes
- Tables / APIs / screens: PATCH/DELETE /api/applicants/[id], PATCH/DELETE /api/interviews/[id]; screens 4 (edit), 6 (edit)

## 5. Email and password checks on log-in and sign-up

- What to do: Add the email format check (and the sign-up password and name checks) on the existing log-in and sign-up screens, and the same checks on the server. The login itself is already in the template.
- Done when:
  - On Log-in, entering an email such as `abc`, `abc@example`, `a b@example.com` or `@example.com` and leaving the field shows the red error "Enter a valid email address." under the email field; pressing "Log in" with it sends nothing.
  - On Log-in, `name@example.com` shows no email error; a wrong email or password still shows one error above the button and keeps the fields.
  - On Sign-up, a bad email shows "Enter a valid email address." under the email field, a password under 8 characters shows "Password must be at least 8 characters." under the password field, and an empty name shows an error under the name field; each check runs when leaving the field and when pressing "Sign up", and nothing is sent while one fails.
  - Sending a bad email, a short password or an empty name straight to the sign-up API, or a bad email to the log-in API, returns 400 with the field error on `email`, `password` or `name`; an email already used shows an error and no user is created.
  - Valid sign-up logs the user in and goes to the applicant list.
  - The project's check command (`npm run check`) passes
- Tables / APIs / screens: no table change (User.email format rule); POST /api/auth/sign-up/email, POST /api/auth/sign-in/email; screens 1, 2

## 6. Japanese / English toggle

- What to do: Add the header language toggle and translate all screen text, including the new email, password and name error messages; remember the choice; AI draft uses the selected language.
- Done when:
  - The header shows "EN" on Japanese screens and "日本語" on English screens; pressing it switches all labels, buttons, placeholders, messages, errors, criteria and status names, the log-in and sign-up error messages and the not-found screen; user-typed text is unchanged.
  - The choice is kept after reload and on the next visit; the default is Japanese; dates look like `2026/11/23` in both languages.
  - Pressing "AI draft" writes the draft in the language selected at that moment.
  - The project's check command (`npm run check`) passes
- Tables / APIs / screens: no table or API change; header on every screen; POST /api/interviews/[id]/evaluation/draft (language)
