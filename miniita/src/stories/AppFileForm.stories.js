import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import AppFileForm from '@/components/atoms/AppFileForm.vue'

storiesOf('FileForm', module)
  .add(
    'AppFileForm',
    () => {
      return {
        components: { AppFileForm },
        props: {
          value: {
            default: text('value', '')
          }
        },
        template: `<app-file-form :value="value" />`
      };
    }
  )