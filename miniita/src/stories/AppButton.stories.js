import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import AppButton from '@/components/atoms/AppButton.vue'

storiesOf('Buttons', module)
  .add(
    'AppButton',
    () => {
      return {
        components: { AppButton },
        props: {
          text: {
            default: text('Text', 'Button')
          }
        },
        template: `<app-button :text="text" />`
      };
    }
  )