# What is in this?

- Svelte 5 (Beta)
- Typescript
- ESLint for code linting
- Prettier for code formatting
- Playwright for browser testing
- Vitest for unit testing
- Use `pnpm` (idk it's cool and fast?)

## Extra stuff added using `svelte-add`

https://github.com/svelte-add/svelte-add

- PostCSS + Autoprefixer

```bash
pnpm dlx svelte-add@latest postcss --postcss-autoprefixer
```

- TailwindCSS (with `forms` and `typography`)

```bash
pnpm dlx svelte-add@latest tailwindcss --tailwindcss-forms --tailwindcss-typography
```

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev
```

## Conventional Commits

Conventional Commits:
https://davipon.hashnode.dev/add-commitlint-commitizen-standard-version-and-husky-to-sveltekit-project?source=more_series_bottom_blogs

Lint-staged:
https://davipon.hashnode.dev/add-lint-staged-to-sveltekit-project

```json
    {
      "type": "feat",
      "section": "✨ Features"
    },
    {
      "type": "fix",
      "section": "🐛 Bug Fixes"
    },
    {
      "type": "chore",
      "section": "🚚 Chores"
    },
    {
      "type": "docs",
      "section": "📝 Documentation"
    },
    {
      "type": "style",
      "section": "💄 Styling"
    },
    {
      "type": "refactor",
      "section": "♻️ Code Refactoring"
    },
    {
      "type": "perf",
      "section": "⚡️ Performance Improvements"
    },
    {
      "type": "test",
      "section": "✅ Testing"
    }
```

## How to update?

https://pnpm.io/cli/update

```bash
pnpm up
```

## Merge conflicts

If you have conflicts, just run `pnpm install` and commit the changes.

## Tailwind problems on VSCode

https://www.codeconcisely.com/posts/tailwind-css-unknown-at-rules/

## test
