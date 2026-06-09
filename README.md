# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- Tailwind-CSS-React  setup

→ Every React project created with vite doesnot actually come by default with tailwind setup inside of it.

So to set up tailwind and install it we need to install two packages in our project.
npm install tailwindcss @tailwindcss/vite
--Tailwind css package and then need to install a plugin so that we can make it work for VIT. This plugin is going to be the at @tailwindcss/vite.


→ After installing we have to come to our vite.config.js and then we have to import at the top
import tailwindcss from '@tailwindcss/vite'
then to add Tailwind css plugin to the end of the plugin list.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

→ Then the last thing we need to do is going to open up src folder → to index.css → Remove all things → then also delete App.css file.

Then in the index.css file we need to import Tailwind package inside our css file.
@import "tailwindcss";

→ Then come to App.jsx → we will delete everything & Start from scratch. -->