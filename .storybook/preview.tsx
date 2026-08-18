import type { Preview } from '@storybook/react-vite'
import { I18nextProvider } from 'react-i18next'
import { i18n } from '@/shared/config'
import '@/app/styles/index.css'

document.documentElement.dataset.theme = 'dark'

const preview: Preview = {
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#0e0f12' },
        light: { name: 'light', value: '#f4f1ea' },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
}

export default preview
