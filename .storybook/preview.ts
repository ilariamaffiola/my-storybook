import type { Preview } from '@storybook/react-vite'

import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/styles/reset.css';
import '../src/styles/variables.css';
import '../src/styles/typography.css';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
  },
  decorators: [
    withThemeByClassName({ 
      themes: {
        light: "light-theme",
        dark: "dark-theme",
      },
      defaultTheme:"light",
      parentSelector:"body",
    }),
  ]
};


export default preview;