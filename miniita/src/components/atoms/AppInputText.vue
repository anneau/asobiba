<template>
  <input
    :placeholder="placeholder"
    class="input"
    type="text"
    @input="$emit('input', $event.target.value)"
    @keypress.enter.prevent="$emit('enter', $event.target.value)">
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
};
</script>
