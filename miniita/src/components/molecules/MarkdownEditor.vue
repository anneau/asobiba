<template>
  <div id="editor">
    <app-text-area @input="input"/>
  </div>
</template>

<script>
import marked from 'marked';
export default {
  methods: {
    input(text) {
      this.$emit('input', { plain: text, compiled: this.compile(text) });
    },
    compile(text) {
      return marked(text, { sanitize: true });
    }
  }
};
</script>
