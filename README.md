# Next.js Starter Kit
* Next.js starter kit for modern apps based on React.

## Main libs
 - Next.js
 - React
 - Redux
 - TypeScript
 - Styled-jsx
 - PostCSS
 - SEO & analytics
 - Storybook
 - Jest & Enzyme

## Get started
```sh
npm install
```

## Development build
```bash
npm run start:dev
```

## Production build
#### Serve with server
```bash
npm install
npm run build
npm start
```

#### Export static HTML
```bash
npm install
npm run build
npm run export
```

## Tests
```bash
npm run test
npm run test:watch
npm run test:coverage
```

## StoryBook
```bash
npm run storybook # open browser localhost:6006
```

```bash
npm run build-storybook # Build storybook static assets
```

## Configuration SEO, etc
* Set SEO & analytics variables: `src/globals/env.ts`