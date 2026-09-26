# BT New Adventure Tours

A responsive multi-page website for BT New Adventure Tours, built with TanStack Start, React, TypeScript and Tailwind CSS.

## Run locally

1. Install Bun from https://bun.sh
2. Clone this repository and open its folder.
3. Run `bun install`.
4. Run `bun run dev`.
5. Open the local address shown in the terminal.

For a production build, run `bun run build`. The deployable output is generated in `.output/`.

## Edit business information

Update `src/config/business.ts`. The company name, taglines, telephone number, email, website and WhatsApp number are centralised there.

## Edit tours, attractions and services

Update `src/data/site-data.ts`. Keep descriptions factual and do not add unsupported awards, reviews, statistics or qualifications.

## Replace photographs

Site image files are stored as Lovable CDN pointer files in `src/assets/`. Upload replacement media through Lovable Assets, then update the relevant import and `.url` reference in `src/data/site-data.ts`. The supplied photographs are owned/provided by the client; no external stock imagery is used.

## Forms

Forms currently validate in the browser and show a confirmation state. Before accepting live enquiries, connect submissions to a secure form receiver or email service and update the privacy policy.

## GitHub

Create an empty GitHub repository, then connect this Lovable project through Lovable's GitHub integration. If working outside Lovable, add the remote supplied by GitHub and push the main branch. Never commit `.env` files, private keys or passwords.

## Deployment

See `DEPLOYMENT.md` for Truehost South Africa instructions.
