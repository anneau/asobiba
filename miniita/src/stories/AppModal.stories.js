import { storiesOf } from '@storybook/vue'
import AppModal from '@/components/atoms/AppModal.vue'

storiesOf('Modal', module)
  .add(
    'AppModal',
    () => {
      return {
        components: { AppModal },
        props: {
        },
        template: `<app-modal />`
      };
    }
  )