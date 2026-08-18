import type { Preview } from '@storybook/react-vite'
import '@/app/styles/index.css'

const preview: Preview = {
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
