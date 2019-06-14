
<template>
  <div>
    <the-nav-bar />
    <div class="container">
      <div class="columns">
        <div class="column is-3">
        </div>
        <div class="column is-9">
          <nuxt/>
        </div>
      </div>
    </div>
    <the-footer class="footer"/>
  </div>
</template>
<style scoped>
.container {
  margin-bottom: 10rem;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
  box-shadow: 0 0 1px #444;
}
</style>
