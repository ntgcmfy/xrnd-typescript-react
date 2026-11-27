---
name: requirements
description: Use only when the user explicitly invokes `/requirements` or explicitly asks to write the requirements document. Turns docs/theme.md into docs/requirements.md — what it does, screens, interactions, out of scope, and an "AI feature" section. Does not write code.
---

# Write the requirements

Use this skill only when the user explicitly calls `/requirements` or explicitly asks for a requirements document.

**Do not write code.** Do not start implementing until the requirements are settled.

## How to run it

### 1. Read the theme

Read `docs/theme.md` and `docs/theme-conditions.md`. If `docs/theme.md` does not exist, stop and tell the user to decide the theme first.

### 2. Ask once

Ask these together, in one message. You get **one follow-up round at most**; after that, propose answers yourself and ask "is this right?".

```
1. What has to work before you would call it done (3–7 things)?
2. Which screens are there (5–7, including log-in and sign-up), and what is visible and clickable on each? What can a logged-in user do, and what happens when someone who is not logged in opens a screen?
3. What are you deliberately NOT building this time?
```

### 3. Write the requirements out

Save to **`docs/requirements.md`** in this shape (headings in the user's language):

```markdown
# Requirements — (app name)

## What it does

- (3–7 bullets)

## Screens

- (each screen: what is visible / what can be clicked)

## Interactions

- (what happens when the user does something; also what does nothing or is not allowed)

## Out of scope

- More ways to log in (Google and other providers, password-reset email)
- More than one kind of user (for example an administrator)
- External services, payments, file uploads
- (at least one more item specific to this theme)

## AI feature

### Input

(left for the user — see below)

### Expected output

(left for the user)

### How to check the output

(left for the user)
```

Leave the three "AI feature" subsections with a short placeholder. The user fills them in the next step.

### 4. Confirm

Check out loud:

- Are there numbers where it matters (how many items, how many characters, what order)?
- Do the requirements say what a logged-in user can do, and what someone who is not logged in cannot do?
- Are there 5–7 screens?

## Rules for writing it

- Put numbers in: "show the newest 20 items", "the body is at most 1000 characters".
- One idea per line.
- Do not write implementation (library names, function names, table names). Write what happens.

## Out of scope for this skill

- Writing the "How to check the output" items for the user (the user writes them)
- Writing code, design or tasks
- Adding features nobody asked for
