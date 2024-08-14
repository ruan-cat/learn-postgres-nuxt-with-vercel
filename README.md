---
name: Vercel Postgres + Nuxt Starter
slug: postgres-nuxt
description: Simple Nuxt template that uses Vercel Postgres as the database.
framework: Nuxt
useCase: Starter
css: Tailwind
database: Vercel Postgres
deployUrl: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fstorage%2Fpostgres-nuxt&project-name=postgres-nuxt&repository-name=postgres-nuxt&demo-title=Vercel%20Postgres%20%2B%20Nuxt%20Starter&demo-description=Simple%20Nuxt%20template%20that%20uses%20Vercel%20Postgres%20as%20the%20database&demo-url=https%3A%2F%2Fpostgres-nuxt.vercel.app%2F&demo-image=https%3A%2F%2Fpostgres-nuxt.vercel.app%2Fopengraph-image.png&stores=%5B%7B"type"%3A"postgres"%7D%5D
demoUrl: https://postgres-nuxt.vercel.app/
relatedTemplates:
  - postgres-starter
  - postgres-prisma
  - postgres-sveltekit
---

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 参考资料

- 模板项目 https://vscode.dev/github/vercel/examples/blob/main/storage/postgres-nuxt

- 参考文档
  - drizzle+Vercel Postgres https://orm.drizzle.team/docs/get-started-postgresql#usage-with-cloudflare-workers
  - 从 vercel 初始化模板项目 https://vercel.com/new/ruanzhongnans-projects/templates/nuxt/postgres-nuxt
  - https://vercel.com/templates/nuxt/postgres-nuxt
  - vercel postgres 入门 https://vercel.com/docs/storage/vercel-postgres/quickstart
