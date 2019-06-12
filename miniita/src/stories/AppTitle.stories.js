import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import AppTitle from '@/components/atoms/AppTitle.vue'

storiesOf('Title', module)
  .add(
    'AppTitle',
    () => {
      return {
        components: { AppTitle },
        props: {
          title: {
            default: text('title', 'sampleTitle')
          },
          required: {
            default: boolean('required', false)
          },
        },
        template: `<app-title :title="title" :required="required" />`
      };
    }
  )