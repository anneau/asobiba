<template>
  <div class="subtitle">
    <a
      class="bd-anchor-link">
      #
    </a>
    <span class="bd-anchor-name">
      {{ title }}
      <span
        v-if="required"
        class="has-text-danger">
        *
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
