import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import AppSectionTitle from '@/components/atoms/AppSectionTitle.vue'

storiesOf('SectionTitle', module)
  .add(
    'AppSectionTitle',
    () => {
      return {
        components: { AppSectionTitle },
        props: {
          title: {
            default: text('title', 'sampletitle')
          },
          size: {
            default: text('size', 'is-4')
          },
        },
        template: `<app-section-title :title="title" :size="size" />`
      };
    }
  )