<template>
  <h3 id="colors" :class="size" class="title is-spaced bd-anchor-title">
    <a class="bd-anchor-link" href="#colors">
      #
    </a>
    <span class="bd-anchor-name">
      {{ title }}
    </span>
  </h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'タイトル'
    },
    size: {
      type: String,
      default: 'is-4'
    },
  }
}
</script>
