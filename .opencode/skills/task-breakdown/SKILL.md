---
name: task-breakdown
description: Use only when the user explicitly invokes `/task-breakdown` or explicitly asks to split the requirements into tasks. Turns docs/requirements.md and docs/design.md into docs/tasks.md — 4 to 7 tasks, each with "Done when". Task 1 is registering and listing data, task 2 is the AI feature. Does not write code.
---

# Split it into tasks

Use this skill only when the user explicitly calls `/task-breakdown` or explicitly asks to split the requirements into tasks.

**Do not write code.** Stop once the task list exists.

## How to run it

### 1. Read the inputs

Read `docs/requirements.md` and `docs/design.md`. If either is missing, stop and tell the user to write it first.

### 2. Cut it into 4–7 tasks, in this order

1. **Register and list the data the AI feature uses** — the table(s), the APIs and the screens to add and list that data, for the logged-in user (the login itself is already in the template). The app must run after this task.
2. **The AI feature** — the API that calls the AI and the screen that shows the result.
3. and later: **the rest** (updating and deleting data, the remaining screens), one task per feature.

If it needs more than 7 tasks, the requirements are too big — suggest moving things into "Out of scope".

### 3. Write the list out

Save to **`docs/tasks.md`** in this shape (headings in the user's language):

```markdown
# Tasks

## 1. (task name)

- What to do: (1–2 lines)
- Done when:
  - (something you can check on screen: "when you do X, Y happens")
  - (another one)
  - The project's check command (tests, types, lint) passes
- Tables / APIs / screens: (from docs/design.md)

## 2. (task name)

...
```

### 4. Rules for "Done when"

- Write what you can confirm on screen: "when you do X, Y happens". Not the state of the code.
- Every task ends with the line about the check command passing.
- Task 2 (the AI feature) must include: "When you enter the input example from the 'AI feature' section of docs/requirements.md, the output meets every item in 'How to check the output'."
- If you cannot write "Done when" for a task, the task was cut badly. Cut it again.

## Out of scope for this skill

- Writing code
- Cutting it into more than 7 tasks
- Adding tasks that are not in the requirements
