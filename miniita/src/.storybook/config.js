import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import 'bulma/css/bulma.css'

addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
