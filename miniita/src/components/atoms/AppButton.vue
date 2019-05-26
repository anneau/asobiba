<template>
  <a class="button">{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
};
</script>
