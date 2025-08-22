# Slipstream (@slipstream)

Slipstream é um Design System em React + TypeScript, inspirado no shadcn/ui e estruturado com Atomic Design. Fornece componentes acessíveis, tipados e com estilos via Tailwind CSS.

## Filosofia
- Reutilizável e tipado: API clara e segura com TypeScript.
- Simples de estilizar: utilitários do Tailwind + tokens.
- Acessibilidade primeiro: foco visível, estados, semântica correta.
- Atomic Design: átomos → moléculas → organismos → templates.

## Instalação
```bash
npm install @slipstream
```

Peer deps:
- react >= 18
- react-dom >= 18

## Uso rápido
Importe os estilos do pacote e use os componentes.
```tsx
import '@slipstream/styles.css'
import { Button } from '@slipstream'

export default function App() {
  return <Button>Primary</Button>
}
```

## Tokens
Tokens disponíveis em `src/tokens` e expostos na lib:
- colors: primário, secundário, sucesso, destrutivo, background, foreground
- typography: Inter e escala (12, 14, 16, 20, 24, 32, 48)
- spacing: 4, 8, 12, 16, 24, 32, 48
- radii: `lg`
- shadows: `soft`

## Button
- Variantes: `default`, `secondary`, `outline`, `ghost`, `destructive`
- Tamanhos: `sm`, `md`, `lg`
- Estados: hover, active, disabled, loading (spinner)

Exemplo:
```tsx
<Button variant="secondary" size="lg">Clique</Button>
<Button isLoading>Salvando...</Button>
```

## Desenvolvimento
- Build da lib: `npm run build`
- Dev da lib: `npm run dev`
- Storybook: `npm run storybook`

## Estrutura
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

## Publicação
- Campos principais do package.json:
  - name: `@slipstream`
  - main: `dist/index.cjs`
  - module: `dist/index.esm.js`
  - types: `dist/index.d.ts`
- Publicar:
```bash
npm run build && npm publish --access public
```

## Licença
MIT
