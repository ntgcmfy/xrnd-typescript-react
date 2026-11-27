# Theme: Interview Note Organizer "InterviewNote" (面接メモ整理)

- **Theme**: The recruiter pastes raw interview notes or a transcript. The app turns them into an evaluation sheet with the same criteria for every interviewer, then checks the sheet for biased or unsupported statements.
- **Business process**: B, post-interview records and evaluation sheets (HR industry). The research puts this at a median of 21 minutes per applicant, the longest step.
- **User**: One recruiter or hiring staff member.
- **AI feature**:
  - **Sends**: the raw notes or transcript, the applicant's position, and a fixed set of evaluation criteria (for example 4 criteria).
  - **Returns** (structured output):
    - A score and a comment for each criterion.
    - Strengths, concerns, and a recommendation (advance, hold or reject, as a draft).
    - A short summary.
    - **Check results**: personality judgments, statements not found in the notes, and a score that contradicts its comment.
- **Why AI is needed**: It addresses three pain points from `docs/research.md`:
  - Record-writing takes 21 minutes per applicant.
  - Evaluations differ by interviewer.
  - Internal pass/fail alignment is the main cause of stalled selection (40.2%).
- **Data (4 tables)**:
  - User (existing)
  - Applicant (userId, name, position, status)
  - Interview (applicantId, date, interviewer name, raw notes)
  - Evaluation (interviewId, scores and comments per criterion, strengths, concerns, recommendation, summary, check results)
  - Interview and Evaluation are reached through their parent Applicant, so they need no `userId` of their own.
- **Screens (7)**:
  1. Log-in (existing)
  2. Sign-up (existing)
  3. Applicant list
  4. Applicant create/edit
  5. Applicant detail (interview list and a side-by-side comparison of evaluations)
  6. Interview create/edit (enter notes)
  7. Evaluation sheet (AI draft button, check results, edit, save)
- **Conditions** (from `docs/theme-conditions.md`):
  1. Met. It covers one real process: interview records and evaluation of applicants.
  2. Met. It has 4 tables, including the user table, with create, list, update and delete.
  3. Met. Without the AI there is no evaluation sheet, only a note form. The AI is also what makes sheets from different interviewers comparable.
  4. Met. It has 7 screens, including log-in and sign-up.
  5. Met. It uses the template's Better Auth with one user type.
  6. Met. It uses only OpenAI and Neon. Scheduling and result emails are out of scope. There are no payments or file uploads.
  7. Met. It uses only fictional applicants. The screen shows a note: "Do not enter real personal information."
- **Rules for the AI**:
  - The AI only summarizes what is in the notes. It does not guess and does not judge the person.
  - The recommendation is only a draft. The user makes the final decision.
- **Out of scope**: interview scheduling, emails to applicants, and a second AI feature that summarizes all sheets of an applicant (optional later).

**AI feature in one line**: Raw interview notes go in, and a structured evaluation sheet (scores and comments per criterion, strengths, concerns, a draft recommendation, a summary and bias checks) comes back from one text-generation API call.

## Abandoned Idea:
- **Idea 1, Job Posting Writer "PostMake"**: drafts job postings with legal items and checks banned expressions. Not chosen.
- **Idea 2, Review Comment Coach "CommentNote"**: drafts performance review comments from fact notes. Not chosen. Its check style was reused in the chosen idea.
- **Idea 3, Onboarding Assistant "OnboardNavi"**: drafts onboarding documents and deadline tasks. Not chosen, because the AI could drift into a side feature behind task management.
