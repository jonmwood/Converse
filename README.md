# Conversation Cards

A conversation flash card app to spark meaningful conversations — with kids, family, friends, and partners. Flip through curated question cards, each paired with a small activity, and reveal the activity by tapping the card.

**Live site:** https://jonmwood.github.io/conversation-cards/

## Features

- Multiple categories (Kids, Family, and more), each with light and deep questions
- Tap a card to flip it and reveal a paired activity
- Filter by depth, shuffle the deck, and navigate by swiping or arrow keys
- Pure React, no backend

## Development

```bash
npm install
npm run dev      # start the local dev server
npm run build    # build to ./dist
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the app and
publishes it to GitHub Pages (see [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

---

Built with [Vite](https://vite.dev) + React. Originally generated with Claude.
