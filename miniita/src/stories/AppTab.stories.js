import { storiesOf } from '@storybook/vue'
import AppTab from '@/components/atoms/AppTab.vue'

storiesOf('Tab', module)
  .add(
    'AppTab',
    () => {
      return {
        components: { AppTab },
        props: {
        },
        template: `<app-tab />`
      };
    }
  )