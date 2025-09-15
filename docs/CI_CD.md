# ⚙️ CI/CD Guide

This document outlines the Continuous Integration and Continuous Deployment (CI/CD) process used for the `translation-webapp` project.

We use **GitHub Actions** for CI, and optionally **Netlify** or **Vercel** for automated deployments.

### ════════════════════════════════════

## 🧰 Tools & Services

- **GitHub Actions** – For running automated workflows (linting, testing, building).
- **Netlify / Vercel** – For hosting and continuous deployment.
- _(Optional: add other integrations like Slack, Sentry, or Codecov here later)_

### ════════════════════════════════════

## 🚀 Workflow Overview

1. **Trigger** on `push` or `pull_request`
2. **Install** dependencies
3. **Lint** source code
4. **Run** unit/integration tests
5. **Build** the application
6. _(Optional)_ **Deploy** to hosting provider

### ════════════════════════════════════

## 🧪 Example GitHub Actions Workflow

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: 📥 Checkout code
        uses: actions/checkout@v3

      - name: 🔧 Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "22.14.0"

      - name: 📦 Install dependencies
        run: npm install

      - name: 🧹 Lint code
        run: npm run lint

      - name: 🧪 Run tests
        run: npm run test

      - name: 🏗️ Build project
        run: npm run build

      # Optional: Deploy step using Netlify CLI
      # - name: 🚀 Deploy to Netlify
      #   run: netlify deploy --prod --dir=dist
      #   env:
      #     NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
      #     NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```
