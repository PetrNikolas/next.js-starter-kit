# Next.js Starter Kit
* Next.js starter kit for modern apps based on React.

## Main libs
 - Next.js
 - React
 - Redux
 - TypeScript
 - Ant Design
 - Styled-jsx
 - PostCSS
 - Normalize.css
 - Storybook
 - Jest & Enzyme
 - SEO & analytics

## Get started
```sh
npm install
```

## Development build
```bash
# Development build with hot reloading
npm run start:dev
```

## Production build
#### Serve with server
```bash
# Build app for production
npm install
npm run build
npm start
```

#### Export static HTML
```bash
# Export static html to the out folder
npm install
npm run build
npm run export
```

## Tests
```bash
# Run tests
npm run test
npm run test:watch
npm run test:coverage
```

## StoryBook
```bash
# Open browser localhost:6006
npm run storybook
```

```bash
# Build storybook static assets
npm run build-storybook
```

## Configuration SEO, Sentry etc
* Set SEO & analytics variables: `src/globals/env.ts`

## Ant Design documentation
* [Doc](https://ant.design/docs/react/introduce)