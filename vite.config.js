// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY),
//     },
//     plugins: [react()],
//   };
// });

// alternative solution

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

const cherryPickedKeys = ['SOME_KEY_IN_YOUR_ENV_FILE', 'SOME_OTHER_KEY_IN_YOUR_ENV_FILE'];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]));

  return {
    define: {
      'process.env': processEnv,
    },
    plugins: [react()],
  };
});

// Uncaught ReferenceError: process is not defined

// Solving this issue
// Open the vite.config.ts file

// Add loadEnv in your imports:
// import { defineConfig, loadEnv } from 'vite'

// Add an env const assigment:
// const env = loadEnv(mode, process.cwd(), '');

// add a define object at the same level than the plugins array:

// The vite.config.js file before:

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// +
// define: { 'process.env': {} },

// https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
