
<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
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
        <div class="navbar-start">
          <nuxt-link
            class="navbar-item"
            to="/">
            ホーム
          </nuxt-link>
          <nuxt-link
            class="navbar-item"
            to="/">
            コミュニティ
          </nuxt-link>
          <app-input-text
            class="navbar-item"></app-input-text>
          </div>
        <div class="navbar-end">
          <nuxt-link
            class="navbar-item"
            to="/">
            ストック
          </nuxt-link>
          <nuxt-link
            class="navbar-item"
            to="/">
            投稿する
          </nuxt-link>
          <nuxt-link
            class="navbar-item"
            to="/">
            0
          </nuxt-link>
          <nuxt-link
            class="navbar-item"
            to="/">
            マイページ
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

.navbar {
  margin-bottom: 1rem;
  &-brand {
    font-size: 32px;
  }
  &-item {
    color: #FFFFFF;
  }
}

.input {
  color: #000000;
  margin-top: 13px
}

</style>
