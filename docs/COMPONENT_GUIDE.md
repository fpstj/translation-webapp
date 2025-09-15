# 🧩 Component Guide

A reference for writing clean, reusable, and consistent React components.

### ════════════════════════════════════

## 🧠 Naming Convention

- Use **PascalCase** for all component names (e.g., `UserCard`, `LoginForm`)
- File names should match the component (e.g., `LoginForm.tsx`)
- Group related components inside their own folders if needed

> 🔁 Example: `src/components/LoginForm/LoginForm.tsx`

### ════════════════════════════════════

## 🧱 Component Structure

```tsx
// ExampleComponent.tsx

import React from "react";

type Props = {
  title: string;
  onClick: () => void;
};

export const ExampleComponent: React.FC<Props> = ({ title, onClick }) => (
  <button onClick={onClick}>{title}</button>
);
```

### ════════════════════════════════════

## ✅ Best Practices

- Keep components focused – one job per component

- Use props and state intentionally – avoid prop-drilling where possible

- Avoid logic in JSX – use helpers or extract logic to hooks

- Split presentational and container logic when components get complex

- Use React.memo and useCallback/useMemo when needed for performance

### ════════════════════════════════════

## 🔁 Reusability Tips

Accept children when appropriate:
({ children }: { children: React.ReactNode }) => <div>{children}</div>

Expose only needed props, and use clear types

Use default props when suitable

Build atomic components that can be composed

### ════════════════════════════════════

## 🧪 Testing Components

Use React Testing Library for component tests

Test rendering, interactions, and prop-driven behavior

Keep tests close to components (**tests** or .test.tsx files)

### ════════════════════════════════════

## 🗂️ Directory Example

```css
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   └── UserCard/
│       ├── UserCard.tsx
│       └── UserCard.test.tsx
```

### ════════════════════════════════════

## 📚 Related Docs

- [Style Guide](STYLE_GUIDE.md)

- [Testing Guide](TESTING_GUIDE.md)

- [Architecture Guide](ARCHITECTURE.md)
