# Catallax Landing Page

Website for the coordinating and communicating the Catallax project.

## Setup Instructions

1. Make sure you have Node.js (v16+) and npm (v7+) or yarn (v1.22+) installed
2. Clone this repository
3. Install dependencies:

```bash
yarn install
```

## Developing

Start the development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev --open
```

## Build and deploy

To create a production version of the site:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

Deploy to the VPS (must add `sandbox` to ssh config):

`yarn deploy`

## Troubleshooting

If you encounter issues after deleting `node_modules` or during installation:

```bash
# Clean install dependencies 
yarn install --force
```
