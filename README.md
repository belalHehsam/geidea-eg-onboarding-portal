# Geidea Onboarding Portal

An Angular frontend prototype for the Geidea merchant onboarding experience. Users can explore payment services and devices, view product details, and proceed through account registration and phone verification. The UI supports English/Arabic (LTR/RTL) and light/dark themes.

> **Note:** This repository's environment configuration, backend integration, and supported Angular/Node versions must be confirmed with the project team. Do not use real customer data in local mocks.

## Geting Started

**Prerequisites:** Node.js and npm (use versions compatible with this project's Angular version).

```bash
# First time: clone the repository
 git clone <repository-url>
 cd <repository-folder>

# Install dependencies
 npm install

# Start locally and open the browser
 npx ng serve -o
```

If Angular CLI is installed globally, `ng serve -o` works too. The default local URL is `http://localhost:4200/`.

**Get the latest changes (existing clone):**

```bash
 git switch develop
 git pull --ff-only origin develop
 npm install  # if dependencies changed
```

Use the team's actual base branch if it is not `develop`.

**Production build:**

```bash
 npx ng build
```

## Project Structure

Organize code by business feature; keep cross-cutting infrastructure and reusable UI separate.

```text
src/
└── app/
    ├── core/                       # App-wide infrastructure
    │   ├── auth/                   # Auth service and guards
    │   ├── http/                   # Interceptors and error handling
    │   └── services/               # Theme / language services
    ├── shared/                     # Reusable, feature-agnostic code
    │   ├── components/             # Buttons, inputs, bottom sheets
    │   ├── directives/
    │   ├── pipes/
    │   └── utils/
    ├── layouts/                    # Public / auth layouts
    ├── features/
    │   ├── onboarding/
    │   │   ├── pages/              # Service, product, phone, OTP pages
    │   │   ├── components/         # Product card, details sheet
    │   │   ├── services/           # Feature API/data services
    │   │   ├── models/             # Feature types/interfaces
    │   │   ├── state/              # Only when shared feature state is needed
    │   │   └── onboarding.routes.ts
    │   └── account/
    │       ├── pages/              # Login / register
    │       ├── services/
    │       └── account.routes.ts
    ├── app.config.ts
    └── app.routes.ts
```

**Rule:** Keep feature-specific services and types inside their feature. Use `core/` for application-wide concerns and `shared/` for genuinely reusable code.

## Coding Conventions

- Use **standalone components** and **lazy-loaded routes** where appropriate.
- Prefer **signals** (`signal`, `computed`) for local reactive UI state; use RxJS when it fits asynchronous streams.
- Use **template-driven forms** (`ngModel`) for this project's forms, with clear validation and error messages.
- Keep components focused; move API access into feature services.
- Support **Arabic/English**, **RTL/LTR**, **light/dark mode**, responsive layouts, and accessible interactions.
- Never commit secrets, credentials, real OTPs, or customer data.

| Item | Convention | Example |
|---|---|---|
| Files / folders | `kebab-case` | `product-details-sheet.ts`, `phone-verification/` |
| Functions / variables | `camelCase` | `selectProduct()`, `selectedProduct` |
| Classes / interfaces / types | `PascalCase` | `ProductCard`, `ProductResponse` |
| Booleans | Descriptive prefix | `isLoading`, `hasError`, `canSubmit` |
| Observables | `$` suffix | `products$` |
| Component selectors | `app-` + kebab-case | `app-product-card` |

Name functions for their **action**, not their filename: prefer `openDetails()` over `productDetailsOpenDetails()`.

## Git Workflow

Start from the latest team base branch and create one branch per task:

```bash
 git switch develop
 git pull --ff-only origin develop
 git switch -c feat/product-selection

 # After implementing and reviewing changes
 git add .
 git commit -m "feat: add product selection page"
 git push -u origin feat/product-selection
```

**Branch naming:** `<type>/<short-kebab-case-description>`

| Type | Purpose | Example |
|---|---|---|
| `feat/` | New feature | `feat/auth-login` |
| `fix/` | Bug fix | `fix/otp-validation` |
| `refactor/` | Internal cleanup | `refactor/product-service` |
| `docs/` | Documentation | `docs/update-readme` |
| `chore/` | Tooling / maintenance | `chore/eslint-setup` |

Use concise **Conventional Commits**, e.g. `fix: correct RTL alignment`. Open a pull request to the team's base branch; include a summary, screenshots for UI changes, and testing notes. Do not push directly to protected branches.
