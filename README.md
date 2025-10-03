# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Boolean Design System

## Useful Links
Eccoli in chiaro così puoi copiarli e incollarli direttamente:

Understanding linear scale:
  [https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/)
Fluid dimension calculator:
  [https://fluid.style/spacing](https://fluid.style/spacing)
Vertical Rhythm:
  [https://24ways.org/2006/compose-to-a-vertical-rhythm/](https://24ways.org/2006/compose-to-a-vertical-rhythm/)
 Modular scale:
  [https://www.modularscale.com/](https://www.modularscale.com/)

In un app e non in un design system è consigliato rendere univoche le classi modificando il nome del file css:
es.
Badge.module.css

importandolo poi all'interno del file come oggetto, quindi:
import styles "./Badge.module.css";

i nomi di classi invece che chiamarli (es. classname="badge") li chiami:
es.
<div classname={`${styles.badge} ${styles[variant]}`} {..attrs}>
  {children}
</div>

ALTRIMENTI(nei design system):
installare react-shadow-root
npm i react-shadow

-[Tab accessibility] (https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

-[Tab accessibiliyy guide] (https://accessibilitymadeeasy.org/accessible-tabs-a-step-guide/)

-Addon per i temi 
npm i @storybook/addon-themes


## Test

```
npm i -D vitest @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @vitejs/plugin-react-swc jsdom
```

```
npm install -D @playwright/test


npx playwright install
```


## React Feather 

npm i react-feather

import React from 'react';
import { Camera } from 'react-feather';

const App = () => {
  return <Camera />
};

export default App;

Icons can be configured with inline props:

<Camera color="red" size={48} />

You can also include the whole icon pack:

import React from 'react';
import * as Icon from 'react-feather';

const App = () => {
  return <Icon.Camera />
};

export default App;