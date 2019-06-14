<template>
  <div>
    <input
      :id="name"
      :checked="checked"
      class="is-checkradio"
      type="checkbox"
      @change="$emit('checked', { key: name, status: $event.target.checked })">
    <label
      :for="name"
      :class="size">{{ displayName }}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    displayName: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
