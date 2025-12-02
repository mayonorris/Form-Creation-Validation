# Deep Dive into JavaScript — Week Project

Build real, interactive front-end features using **vanilla JavaScript**: form validation, DOM manipulation, event handling, and async API calls. By the end, you’ll have multiple small apps that demonstrate solid JS fundamentals and modern patterns.

---

## 🎯 Learning Objectives

- **Form Validation**: Validate inputs, block submission on errors, and provide clear, real-time feedback.
- **DOM & Events**: Select elements, read/update values, modify classes/HTML, and manage event listeners.
- **Async JavaScript (Fetch API)**: Use `async/await`, handle errors with `try/catch`, and render remote data.
- **User Experience**: Show helpful messages, avoid page reloads, and persist simple state when needed.

---

## 📦 Repositories & Folders

This week uses **two GitHub repos**:

### 1) `Form-Creation-Validation`
Tasks:
- **Task 0** — Form creation + client-side validation
- **Task 3** — Fetch user data and render a list

Structure:

```text
Form-Creation-Validation/
├─ index.html # Task 0 (form)
├─ style.css # Task 0 styles
├─ script.js # Task 0 validation logic
├─ fetch-data.html # Task 3 (API fetch UI)
├─ fetch-data.css # Task 3 styles
└─ fetch-data.js # Task 3 async fetch logic
```


### 2) `ALX_Simple_Quiz`
Tasks:
- **Task 1** — Simple interactive quiz
- **Task 2** — Simple calculator

Structure:

```text
ALX_Simple_Quiz/
├─ index.html # Task 1 (quiz UI)
├─ styles.css # Task 1 styles
├─ quiz.js # Task 1 logic
├─ calculator.html # Task 2 (calculator UI)
├─ calculator.css # Task 2 styles
└─ calculator.js # Task 2 logic
```

> All files must end with a newline and validate with the W3C validators. No external libraries or frameworks.

---

## ✅ Task Specs & Acceptance Criteria

### Task 0 — Form Creation & Validation (`Form-Creation-Validation`)
**Goal:** Validate username, email, and password on submit; display success or specific errors.

- Wrap JS in `DOMContentLoaded`.
- Select:
  - `form` → `#registration-form`
  - `feedbackDiv` → `#form-feedback`
  - inputs: `#username`, `#email`, `#password`
- On `submit`:
  - `event.preventDefault()`
  - Trim input values.
  - `isValid = true`, `messages = []`
  - **Username:** length ≥ 3
  - **Email:** includes `@` **and** `.`
  - **Password:** length ≥ 8
- Feedback:
  - Show `#form-feedback` (`style.display = "block"`).
  - If valid → `"Registration successful!"` (green).
  - Else → join error messages with `<br>` (red).

**Files:** `index.html`, `style.css`, `script.js`

---

### Task 1 — Simple Interactive Quiz (`ALX_Simple_Quiz`)
**Goal:** Check selected radio answer and print feedback.

- Implement `function checkAnswer()`.
  - `const correctAnswer = "4"`
  - `const userAnswer = document.querySelector('input[name="quiz"]:checked').value`
  - Compare and update `#feedback` text:
    - Correct → `"Correct! Well done."`
    - Incorrect → `"That's incorrect. Try again!"`
- Add a click listener to `#submit-answer` to call `checkAnswer` (pass the **function**, don’t invoke it).

**Files:** `index.html`, `styles.css`, `quiz.js`

---

### Task 2 — Simple Calculator (`ALX_Simple_Quiz`)
**Goal:** Perform + − × ÷ on two numbers and show the result.

- Implement:
  - `add(n1, n2)`, `subtract(n1, n2)`, `multiply(n1, n2)`, `divide(n1, n2)`
- For each button (`#add`, `#subtract`, `#multiply`, `#divide`):
  - `parseFloat` inputs with fallback to `0`
  - Call the appropriate function
  - Update `#calculation-result` text
- Handle divide by zero gracefully if you want (optional).

**Files:** `calculator.html`, `calculator.css`, `calculator.js`

---

### Task 3 — Fetching Data from an API (`Form-Creation-Validation`)
**Goal:** Fetch users from `https://jsonplaceholder.typicode.com/users` and render a list.

- `async function fetchUserData()`
  - `const apiUrl = 'https://jsonplaceholder.typicode.com/users'`
  - `const dataContainer = document.getElementById('api-data')`
  - `try { const response = await fetch(apiUrl); const users = await response.json(); ... } catch { ... }`
  - Clear the “Loading…” message
  - Build a `<ul>` and append `<li>` with each user’s name
  - On error: show `"Failed to load user data."`
- `document.addEventListener('DOMContentLoaded', fetchUserData)`

**Files:** `fetch-data.html`, `fetch-data.css`, `fetch-data.js`

---

## 🧪 How to Run Locally

1. **Clone** each repository:
   ```bash
   git clone https://github.com/<you>/Form-Creation-Validation.git
   git clone https://github.com/<you>/ALX_Simple_Quiz.git


## 📄 License

Educational use for ALX program exercises. © 2025 Mayo Takemsi Norris KADANGA