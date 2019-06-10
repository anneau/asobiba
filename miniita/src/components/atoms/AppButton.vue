<template>
  <button
    :class="[color, size]"
    class="button"
    @click="$emit('clicked')">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'is-primary',
    },
    size: {
      type: String,
      default: 'is-medium',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
