# 🚀 Express + TypeScript Template

A clean and modern starter template for building Express.js apps using TypeScript, with built-in support for ESLint, Prettier, Husky, lint-staged, and dotenv.

---

## 📦 Tech Stack

- **Express.js**
- **TypeScript**
- **ESLint** (with Prettier integration)
- **Prettier**
- **Husky** + **lint-staged**
- **dotenv**

---

## 📁 Directory Structure

```
express-ts-template/
├── .env
├── .eslintrc.json
├── .prettierrc
├── .prettierignore
├── .husky/
│   └── pre-commit
├── src/
│   ├── app.ts
│   └── server.ts
├── tsconfig.json
├── package.json
└── yarn.lock
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Initialize Git & Husky

```bash
git init
yarn prepare
npx husky add .husky/pre-commit "npx lint-staged"
```

> This sets up Git hooks for linting and formatting before each commit.

### 3. Start development server

```bash
yarn dev
```

### 4. Build for production

```bash
yarn build
```

### 5. Run built app

```bash
yarn start
```

---

## ⚙️ Scripts

| Script        | Description                            |
| ------------- | -------------------------------------- |
| `yarn dev`    | Run development server via ts-node-dev |
| `yarn build`  | Compile TypeScript into `dist/`        |
| `yarn start`  | Run compiled JavaScript (from `dist/`) |
| `yarn lint`   | Run ESLint checks                      |
| `yarn format` | Format all files using Prettier        |

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
```

In your `src/app.ts`, load it with:

```ts
import dotenv from 'dotenv';
dotenv.config();
```

---

## 💡 Pre-commit Hook

This template uses **Husky** and **lint-staged** to lint & format files before commits.

### Lint-staged config in `package.json`

```json
"lint-staged": {
  "**/*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

### Husky hook (`.husky/pre-commit`)

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

---

## ✅ Example Request

```http
GET http://localhost:3000/
```

Response:

```
Hello from Express + TypeScript!
```

---

## 📝 Notes

- Git must be initialized (`git init`) for Husky to work.
- `.env` is git-ignored by default.
- Compatible with Node.js >= 16 (preferably >= 20.18.0 for latest `lint-staged`).

---

## 📜 License

MIT
