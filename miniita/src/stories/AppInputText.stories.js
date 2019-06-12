import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import AppInputText from '@/components/atoms/AppInputText.vue'

storiesOf('InputText', module)
  .add(
    'AppInputText',
    () => {
      return {
        components: { AppInputText },
        props: {
          placeholder: {
            default: text('placeholder', 'sample')
          }
        },
        template: `<app-input-text :placeholder="placeholder" />`
      };
    }
  )