---
name: design
description: Use only when the user explicitly invokes `/design` or explicitly asks to write the design document. Turns docs/requirements.md into docs/design.md — tables, API endpoints and screens. Does not write code.
---

# Write the design

Use this skill only when the user explicitly calls `/design` or explicitly asks for a design document.

**Do not write code.** Do not create migration or source files.

## How to run it

### 1. Read the requirements

Read `docs/requirements.md` and `docs/theme-conditions.md`. If the requirements do not exist, stop and tell the user to write them first.

### 2. Write the design

Save to **`docs/design.md`** in this shape (headings in the user's language):

```markdown
# Design — (app name)

## Tables (3–5, including the users table from the template)

### (table name)

| Column    | Type                                       | Required | Notes |
| --------- | ------------------------------------------ | -------- | ----- |
| id        | integer (auto)                             | yes      |       |
| ...       | text / integer / boolean / date / datetime | yes/no   |       |
| createdAt | datetime                                   | yes      |       |

Relations: (which table refers to which, one line each)

## API

| Method | Path     | What it does | Request | Response |
| ------ | -------- | ------------ | ------- | -------- |
| GET    | /api/... | ...          | —       | ...      |
| POST   | /api/... | ...          | ...     | ...      |

## Screens (5–7, including log-in and sign-up)

| Screen | Path | What is visible | APIs it uses |
| ------ | ---- | --------------- | ------------ |
```

### 3. Rules

- Every item in "What it does" and "Interactions" must be covered by at least one API and one screen.
- Include the API that calls the AI feature. Decide whether the AI result is saved, and if so, in which table.
- The template already has the users table and the sign-up, log-in and log-out APIs. Reuse them; do not design another login.
- Mark every API that requires login. Only sign-up and log-in work without it. Data belongs to the logged-in user unless the requirements say otherwise.
- Use plain, portable column types (text / integer / boolean / date / datetime). Do not write framework-specific code.

### 4. Confirm

Check out loud: the number of tables (3–5) and screens (5–7), that every API except sign-up and log-in requires login, that nothing under "Out of scope" appears, and that the AI API exists.

## Out of scope for this skill

- Writing code, schemas or migrations
- Splitting into tasks
