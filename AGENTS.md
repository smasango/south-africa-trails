<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep business identity and contact values in `src/config/business.ts` so every page and WhatsApp action stays consistent.
- Keep repeatable tourism content in `src/data/site-data.ts` so tours, attractions, services, and gallery items remain easy to maintain.
- Use TanStack file routes for every shareable website page so each page has independent metadata and direct URLs.
