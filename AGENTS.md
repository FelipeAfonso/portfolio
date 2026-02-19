# AGENTS.md

## Project Overview

Personal portfolio site built with **Astro v4**, **Tailwind CSS v3**, **Alpine.js**, and **TypeScript** (strictest mode). Static site (SSG) deployed to `https://www.felipeafonso.com`.

## Build / Dev / Format Commands

```bash
# Development server (port 4321)
npm run dev

# Production build (runs astro check + astro build)
npm run build

# Preview production build locally
npm run preview

# Format all files with Prettier
npm run format
```

There are no lint, test, or CI commands. The only code quality check is `astro check` (TypeScript validation), which runs as part of `npm run build`.

## Project Structure

```
content/           # Data files (TS) exporting typed Record<string, T> objects
  images/          # Project screenshot images (PNG/WebP)
  professional.ts  # Work experience data
  academic.ts      # Education data
  projects.ts      # Project data with image imports
  libraries.ts     # Technology/library data
src/
  components/      # Astro components (PascalCase filenames)
  images/          # Astro-optimized images
  layouts/         # Page layouts (Layout.astro, BlogLayout.astro)
  pages/           # File-based routing
    blog/          # Markdown blog posts (kebab-case filenames)
    index.astro    # Homepage
public/            # Static assets (favicons, fonts, images, PDF)
```

## Code Style Guidelines

### Formatting

Prettier is the sole formatter. Config in `.prettierrc.mjs`:

- Plugins: `prettier-plugin-astro`, `prettier-plugin-tailwindcss`
- `htmlWhitespaceSensitivity: "ignore"`
- Astro files use the `astro` parser

Run `npm run format` before committing.

### TypeScript

- Strictest mode via `"extends": "astro/tsconfigs/strictest"` (strict, strictNullChecks, noUncheckedIndexedAccess, exactOptionalPropertyTypes).
- Use `type` keyword for data shape definitions (`export type Project = { ... }`).
- Use `interface Props` (not exported) inside Astro component frontmatter for component prop typing.
- Use `Record<string, T>` for data collections in content files.
- Use union literal types for special values: `endDate: string | "isCurrent"`.
- Mark optional properties with `?` and access them with optional chaining (`?.`).
- Use `import type { ... }` for type-only imports (e.g., `import type { ImageMetadata } from "astro"`).
- Avoid `any` unless strictly necessary.

### Naming Conventions

| Element             | Convention | Examples                                      |
| ------------------- | ---------- | --------------------------------------------- |
| Astro components    | PascalCase | `ExperienceCard.astro`, `BlogLayout.astro`    |
| Content data files  | lowercase  | `professional.ts`, `projects.ts`              |
| Blog markdown files | kebab-case | `just-create-stupid-stuff.md`                 |
| Types               | PascalCase | `Experience`, `Project`, `Library`, `Props`   |
| Variables/functions | snake_case | `date_sort`, `professional_parsed`, `img_idx` |
| Component props     | camelCase  | `isLast`, `startDate`, `workedWith`           |
| Data object keys    | snake_case | `go_htmx`, `venture_lab_niterra`              |

### Imports

Order imports in Astro frontmatter as follows:

1. Font side-effect imports (`import "@fontsource/..."`)
2. Astro components (layouts, then components)
3. Content/data imports (named exports from `content/`)
4. Asset imports (images)
5. Third-party libraries (dayjs, etc.)
6. Astro-specific imports (`astro:assets`, `astro` types)

All imports use **double quotes** and **relative paths** (`../`, `../../`). Place dayjs `.extend()` calls immediately after their plugin imports.

### Astro Component Patterns

- Define `interface Props` in the frontmatter, then destructure from `Astro.props`.
- No default prop values -- use `?.` optional chaining and `?? []` in templates.
- Use spread operator to pass data objects as props: `<ExperienceCard {...item} />`.
- Conditional rendering: ternary for if/else, short-circuit (`&&`) for optional content.
- List rendering: `.map()` with index for positional logic (last item, carousel index).
- Layouts use `<slot />` for content injection.

### Tailwind CSS

- Utility-first: long class strings directly in markup, no `@apply` directives.
- Dark theme throughout: `bg-zinc-900` base, zinc/neutral color palette, `text-white`.
- Mobile-first responsive with `sm:`, `md:`, `lg:`, `max-sm:` prefixes.
- Tailwind class ordering is enforced by `prettier-plugin-tailwindcss`.
- Use Tailwind Typography plugin (`prose prose-zinc prose-invert`) for blog content.
- Custom `.app-container` class defined in global CSS in `Layout.astro` for page width.
- Custom fonts: `font-sans` = Josefin Sans, `font-serif` = Roboto Slab, `font-mono` = ProFont.

### Alpine.js

- Used for client-side interactivity (dialogs, image carousels).
- Declare state with `x-data` inline on the container element.
- Reference DOM elements with `x-ref` and access via `$refs`.
- Use `@click` for event handling with inline expressions.
- Use `x-show` for conditional display.
- Global helpers (like `is_in_dialog`) are defined as `<script is:inline is:raw>` in `Layout.astro`.

### Content Data Model

- Content lives in `/content/*.ts` as exported `Record<string, T>` objects, not Astro Content Collections.
- Each file defines and exports its own type (`Experience`, `Project`, `Library`).
- Images are ESM-imported in content files and typed as `ImageMetadata[]`.
- Pages import content, convert to arrays with `Object.values()`, sort, and map to components.
- Dates use `MM/YYYY` string format, parsed with dayjs and `customParseFormat` plugin.

### Blog Posts

- Markdown files in `src/pages/blog/` with frontmatter:
  ```yaml
  layout: ../../layouts/BlogLayout.astro
  title: Post Title
  date: Month Day, Year # Human-readable, not ISO
  description: SEO description # Used for OG/Twitter meta tags
  image: /path-to-image.webp # Public asset path for OG image
  ```
- `BlogLayout.astro` generates OG, Twitter, and article meta tags from frontmatter.
- Blog listing on the homepage is currently hardcoded HTML (not auto-generated).
- Use `##` (H2) headings as section dividers within posts.

### Error Handling

- No try/catch or error boundaries -- the site is fully static/SSG.
- Defensive coding via optional chaining (`?.`) and nullish coalescing (`?? []`).
- Data from content files is trusted at the type level with no runtime validation.

### Analytics

PostHog analytics is embedded via the `Posthog.astro` component, included in both layouts. Do not modify the PostHog initialization script or API key without explicit instruction.
