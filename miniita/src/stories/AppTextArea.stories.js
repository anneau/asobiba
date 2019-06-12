import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import AppTextArea from '@/components/atoms/AppTextArea.vue'

storiesOf('TextArea', module)
  .add(
    'AppTextArea',
    () => {
      return {
        components: { AppTextArea },
        props: {
          rows: {
            default: text('required', '10')
          },
        },
        template: `<app-text-area :rows="rows" />`
      };
    }
  )