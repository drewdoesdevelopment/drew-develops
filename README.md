<h1>Drew Develops - Portfolio - 2024 version</h1>

**Free to use and edit/make your own portfolio with, a star is appreciated in return ;)**

All styles and functionality coded myself with the exception of the typing animation on the landing page (<a href="https://github.com/mattboldt/typed.js">typed.js</a>). This is an awesome package I'd recommend if you enjoy the effect.

Notable improvements from my previous portfolio:
- Built with SvelteKit, allowing templating and in-line condtional rendering, and not hard-coding all template files like my previous portfolio.
- Custom-built theme selector (Dark/Light mode) which is then persisted in browser state. This functionality also defaults the theme to what your device OS theme is set to!
- Database and API integration using <a href="https://supabase.com/">Supabase</a>, which is a Postgres server that captures the form submissions for free (and ultimately should remain so unless I'm getting hundreds of submissions a day), in which case can simply be scaled with a push of a button.
- Highlights technical expertise and my specific areas of focus, which was missing from my last portfolio.
- Performance is significantly faster using SvelteKit's SSR while not compromising on SEO and accessibility.
- Much cleaner, modern, and improved styling and aesthetic.

<h3>Install and run the app in local development</h3>

```
npm i
```

```
npm run dev
```

<h3>Building the app</h3>

```
npm run build
```

<h3>Previewing your built app</h3>

```
npm run preview
```

<h3>Deploying the app</h3>
I personally used and really enjoy <a href="https://pages.cloudflare.com/">CloudFlare pages</a>. However, there are multiple different ways to deploy a SvelteKit with custom adapters, you can <a href="https://kit.svelte.dev/docs/adapters">see them all here.</a>
