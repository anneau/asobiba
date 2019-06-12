import { storiesOf } from '@storybook/vue'
import AppSelectForm from '@/components/atoms/AppSelectForm.vue'

const optionArray = {value: 0, text: 'default'};

storiesOf('SelectForm', module)
  .add(
    'AppSelectForm',
    () => {
      return {
        components: { AppSelectForm },
        template: `<app-select-form />`
      };
    }
  )