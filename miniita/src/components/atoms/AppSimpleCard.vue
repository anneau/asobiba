<template>
  <div
    :class="{ 'card-button' : isButton }"
    class="card">
    <div class="card-content">
      <div class="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isButton: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped>
.card-button {
  cursor: pointer;
}
</style>
