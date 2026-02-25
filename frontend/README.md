# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Uber Frontend Overview

This repository contains the React frontend for the Uber-like application. It is built with [Vite](https://vitejs.dev/) and React, and communicates with the backend located in `../Backend`.

### Available Pages

The `/src/pages` directory includes the following React components that correspond to major routes:

- `CaptainLogin.jsx` – login form for captains
- `CaptainSignup.jsx` – registration form for captains
- `UserLogin.jsx` – login form for users
- `UserSignup.jsx` – registration form for users
- `Home.jsx` – landing page shown after authentication

You can extend these components or add new pages under `src/pages` as needed.

### Getting Started

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

### Notes

- Make sure the backend API is running (`../Backend/server.js`) so that authentication and data requests succeed.
- ESLint configuration is located in `eslint.config.js` at the project root; modify rules as needed.

Feel free to customize styles in `src/App.css` and `src/index.css`, or add assets under `src/assets`.
