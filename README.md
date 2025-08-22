# Slipstream (slipstream-ds)

Slipstream is a React + TypeScript Design System, inspired by shadcn/ui and structured with Atomic Design. It provides accessible, typed components with Tailwind CSS styling.

## Philosophy
- Reusable and typed: Clear and safe API with TypeScript.
- Easy to style: Tailwind utilities + tokens.
- Accessibility first: Focus visible, states, correct semantics.
- Atomic Design: atoms → molecules → organisms → templates.

## Installation
```bash
npm install slipstream-ds
```

Peer deps:
- react >= 18
- react-dom >= 18

## Quick usage
Import the package styles and use the components.
```tsx
import 'slipstream-ds/styles.css'
import { Button } from 'slipstream-ds'

export default function App() {
  return <Button>Primary</Button>
}
```

## Tokens
Tokens available in `src/tokens` and exposed in the lib:
- colors: primary, secondary, success, destructive, background, foreground
- typography: Inter and scale (12, 14, 16, 20, 24, 32, 48)
- spacing: 4, 8, 12, 16, 24, 32, 48
- radii: `lg`
- shadows: `soft`

## Button
- Variants: `default`, `secondary`, `outline`, `ghost`, `destructive`
- Sizes: `sm`, `md`, `lg`
- States: hover, active, disabled, loading (spinner)

Example:
```tsx
<Button variant="secondary" size="lg">Click</Button>
<Button isLoading>Saving...</Button>
```

## Development
- Lib build: `npm run build`
- Lib dev: `npm run dev`
- Storybook: `npm run storybook`

## Structure
```
src/
  tokens/
  components/
    atoms/
    molecules/
    organisms/
  stories/
  styles/
```

## Publishing
- Main package.json fields:
  - name: `slipstream-ds`
  - main: `dist/index.cjs`
  - module: `dist/index.esm.js`
  - types: `dist/index.d.ts`
- Publish:
```bash
npm run build && npm publish --access public
```

## License
MIT
