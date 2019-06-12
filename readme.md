# Jellekuiper.nl


## Before installation:
 * make sure npm is version 6.5.0 or higher (because you'll need npx)
 * make sure you have ruby installed so you can install jekyll


## Installation
```bash
$ npm i -G pnpm
$ gem install jekyll
$ pnpm i
```

## Relevant scripts to run:
1. ``` $ pnpm start``` | run in development mode to build on the app
2. ```$ pnpm run build``` | Builds a stable app version in the dist folder
3. ```$ pnpm run deploy``` | Deploys the app on github pages linked to your account, when ran.

<!-- NOTE:: never run pnpx gulp deploy! -->