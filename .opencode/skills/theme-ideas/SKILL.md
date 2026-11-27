---
name: theme-ideas
description: Use only when the user explicitly invokes `/theme-ideas` or explicitly asks for app theme ideas for this assignment. Reads docs/theme-conditions.md and docs/research.md and proposes app themes that meet every condition, with an AI feature at the core. Does not write code.
---

# Propose app themes

Use this skill only when the user explicitly calls `/theme-ideas` or explicitly asks for theme ideas.

**Do not write code.** Do not create files unless the user asks you to save the result.

## How to run it

### 1. Read the inputs

- `docs/theme-conditions.md` — the 7 conditions every theme must meet
- `docs/research.md` — the business processes, pain points and reading/writing work the user researched

If `docs/research.md` does not exist, stop and tell the user to do the research first.

### 2. Propose themes

Propose **3 themes** unless the user asks for a different number. Make them differ: use a different business process from the research for each one where possible.

For each theme, write these items (in the user's language):

| Item             | Content                                               |
| ---------------- | ----------------------------------------------------- |
| Theme            | App name and a one-sentence description               |
| Business process | Which process from `docs/research.md` it handles      |
| User             | Who uses it (one person)                              |
| AI feature       | What the app sends to the AI, and what comes back     |
| Why AI is needed | Which pain point from `docs/research.md` it solves    |
| Data             | Candidate tables (3–5, including the users table)     |
| Screens          | Candidate screens (5–7, including log-in and sign-up) |
| Conditions       | Conditions 1–7: met / not met, one line each          |

### 3. Rules for the AI feature

- The AI feature must be the core value of the app. If the app is still useful with the AI feature removed (just registering and listing data), it is not a valid theme.
- Do not propose a general chatbot or "answer any question" feature. Tie the feature to a specific pain point in the research.
- The feature must work with one call to a text-generation API: send text, get text (or structured fields) back. No images, audio, file uploads or external services.

### 4. Check before answering

For each theme, check the conditions yourself and be honest. If a theme does not meet a condition, fix the theme or replace it — do not mark it as met.

## Out of scope for this skill

- Choosing a theme for the user
- Writing requirements, design or code
- Researching on the web (that is done before this skill)
