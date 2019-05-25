<template>
  <div class="container">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default {
  name: 'default',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>


<style lang="scss" scoped>

</style>
