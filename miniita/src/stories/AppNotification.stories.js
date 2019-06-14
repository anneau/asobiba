import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import AppNotification from '@/components/atoms/AppNotification.vue'

storiesOf('Notification', module)
  .add(
    'AppNotification',
    () => {
      return {
        components: { AppNotification },
        props: {
          showDelete: {
            default: boolean('showDelete', false)
          },
          color: {
            default: text('color', 'is-default')
          },
          text: {
            default: text('text', 'sample')
          },
        },
        template: `<app-notification :showDelete="showDelete" :color="color" :text="text" />`
      };
    }
  )