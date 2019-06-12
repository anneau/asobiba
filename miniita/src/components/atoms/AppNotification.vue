<template>
  <div
    :class="color"
    class="notification">
    <button v-show="showDelete" class="delete"></button>
    <slot />
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    showDelete: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'is-default'
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
