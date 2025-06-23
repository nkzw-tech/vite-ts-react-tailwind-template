# Starter Kit for Vite, React, TypeScript, Tailwind and Node.js ESM

_Minimal, sensible defaults, fast._

Read [the blog post about this template](https://cpojer.net/posts/fastest-frontend-tooling-in-2022).

<img src="https://github.com/user-attachments/assets/9a19ed15-1fcd-447e-bcd9-b1d9f7902555"  width="49%" />
<img src="https://github.com/user-attachments/assets/6ec7a315-5650-4d46-aedf-82b7c16f52ae"  width="49%" />

## Technologies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/) with [React Compiler](https://react.dev/learn/react-compiler) enabled
- [Relay](https://relay.dev/) for data fetching
- [Tailwind](https://tailwindcss.com/)
- [fbtee](https://github.com/nkzw-tech/fbtee) for i18n
- [Better Auth](https://www.better-auth.com/) for authentication
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org)
- [pnpm](https://pnpm.io/)

Check out the [`nkzw-tech/server-template`](https://github.com/nkzw-tech/server-template) for a GraphQL based server with Pothos and Prisma, or the [`nkzw-tech/expo-app-template`](https://github.com/nkzw-tech/expo-app-template) for building mobile apps.

## Setup

- Press the "Use this template" button on the top of this repository's GitHub page.
- Run `pnpm install` (or `npm install` if you don't use `pnpm`).
- Run `pnpm dev:setup`.
- `pnpm dev` for development.
- Use `pnpm test` to run tests.
- `pnpm build` for production builds.

_Note: You can install `pnpm` via `homebrew` on macOS: `brew install pnpm`._

## Relay Setup

By default, this template expects the [`nkzw-tech/server-template`](https://github.com/nkzw-tech/server-template) to be located side-by-side with this repository. You can adjust the location of the GraphQL schema in your [`relay.config.js`](https://github.com/nkzw-tech/web-app-template/blob/with-relay/relay.config.json#L4) file.

## Protips for the fastest Developer Experience

- Use [`npm-run-all2`](https://github.com/bcomnes/npm-run-all2) to parallelize local test runs.
- Prettier and eslint have `--cache` flags. Use them!
- Do not run prettier inside of `eslint`. It commonly takes 50% of the eslint runtime!
- Automatically sort imports when running prettier/saving the document via [`@ianvs/prettier-plugin-sort-imports`](https://github.com/ianvs/prettier-plugin-sort-imports).
- Use `swc` with `ts-node` for fast node scripts with [ESM](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/). See below ↓

## I'm not using Better Auth

You can simply remove everything related to Better Auth in the `src/user` directory.

## Run node scripts with ESM and TypeScript, fast.

Create a `script.ts` file, run `chmod x script.ts` and execute it via `./script.ts`.

```
#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

console.log('Your code goes here.');
```

Use this to restart your scripts instantly when a file changes:

```
#!/usr/bin/env NODE_ENV=development node --watch --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

console.log('This processes instantly restarts when a file changes.');
```
