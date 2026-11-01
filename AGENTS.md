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

## Project rules
- Contact/donation details live only in `src/lib/contact.ts`; import from there so the number changes in one place.
- Shared header/footer are rendered in `src/routes/__root.tsx` around `<Outlet />`; each page is its own route file.
- Donations are routed to the foundation by WhatsApp/call/text links (no payment provider yet), so no data is stored.
