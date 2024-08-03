# Kayoo Dashboard

This project, `kayoo-dashboard`, is an assignment for Delve. Delve is the easiest way to get HIPAA & SOC 2 compliant.

We use AI to catch issues you can't and fix them before you can.

## Project Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property like this:

    ```js
    export default {
      // other rules...
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: __dirname,
      },
    }
    ```

2. Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.

3. Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.

4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

## Setup Instructions

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/kayoo-dashboard.git
    cd kayoo-dashboard
    ```

2. **Set Up the Project**:

    Inside your `kayoo-dashboard` directory, run the following commands to set up a new Vite project with React and TypeScript:

    ```bash
    npm create vite@latest . -- --template react-ts
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Run the Project**:

    Start the development server:

    ```bash
    npm run dev
    ```

    Open your web browser and go to the URL provided by the Vite development server (usually `http://localhost:5173`).

5. **Push Changes to GitHub**:

    ```bash
    git add .
    git commit -m "Set up React project with Vite and TypeScript"
    git push origin main
    ```

You now have your React project with Vite and TypeScript set up in your `kayoo-dashboard` repository. Start developing your application by editing the files in the `src` directory.
