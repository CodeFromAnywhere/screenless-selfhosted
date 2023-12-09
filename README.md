Screenless Selfhosted serves as an example of how to integrate [Screenless](https://screenless.org) with your own system through the webhook.

Besides, this example can be used directly as well to create a searchable database for your transcripts.

## Getting Started

1. Fork this repo
2. Deploy it at [Vercel](https://vercel.com) or anywhere else.
3. Set your environment variables to include your `SCREENLESS_SECRET` and `SUPABASE_SECRET`
4. Visit the website and use the shown webhook URL in screenless

## Demo

See https://screenless-selfhosted.vercel.app/

## Changing behavior

At `pages/api/screenless.ts` you can see what happens with your incoming webhook. By default it submits your transcript data into a supabase database, but you can change it to do anything you want.

## Learn More

This boilerplate uses [Next.js](https://nextjs.org/) and [React](https://react.dev/)

To learn more about Screenless, take a look [the website](https://screenless.org)
