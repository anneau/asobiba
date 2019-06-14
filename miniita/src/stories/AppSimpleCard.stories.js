import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import AppSimpleCard from '@/components/atoms/AppSimpleCard.vue'

storiesOf('SimpleCard', module)
  .add(
    'AppSimpleCard',
    () => {
      return {
        components: { AppSimpleCard },
        props: {
          isButton: {
            default: boolean('isButton', false)
          },
          content: {
            default: text('content', 'sampleCard')
          },
        },
        template: `<app-simple-card :isButton="isButton" :content="content" />`
      };
    }
  )