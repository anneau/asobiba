import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import AppCheckboxForm from '@/components/atoms/AppCheckboxForm.vue'

storiesOf('CheckboxForm', module)
  .add(
    'AppCheckboxForm',
    () => {
      return {
        components: { AppCheckboxForm },
        props: {
          name: {
            default: text('name', 'inputForm'),
          },
          displayName: {
            default: text('displayName', 'display'),
          },
          size: {
            default: text('size', ''),
          },
          checked: {
            default: boolean('checked', false),
          },
        },
        template: `<app-checkbox-form :name="name" :displayName="displayName" :size="size" :checked="checked" />`
      };
    }
  )