<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item brand-text"
          to="/">
          Miniita
        </nuxt-link>
        <div
          class="navbar-burger burger"
          data-target="navMenu">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
      <div
        id="navMenu"
        class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link
            class="navbar-item"
            to="/">
            Home
          </nuxt-link>
          <nuxt-link
            class="navbar-item"
            to="/">
            Settings
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav.navbar {
  margin-bottom: 1rem;
}
</style>
