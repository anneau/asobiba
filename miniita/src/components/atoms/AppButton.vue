<template>
  <a
    :class="[color, size]"
    class="button">
    {{ text }}
  </a>
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
    color: {
      type: String,
      default: 'is-primary'
    },
    size: {
      type: String,
      default: 'is-default'
    },
  }
};
</script>
