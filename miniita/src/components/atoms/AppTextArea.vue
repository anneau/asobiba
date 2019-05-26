<template>
  <textarea
    :rows="rows"
    class="textarea"
    @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  props: {
    rows: {
      type: String,
      default: '20'
    }
  }
};
</script>
