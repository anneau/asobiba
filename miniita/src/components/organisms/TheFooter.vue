<template>
  <div class="columns is-mobile has-text-centered">
    <div class="column" v-for="(item, index) in items" :key="index">
      <nuxt-link :to="item.link" :class="[item.isActive ? 'has-text-primary' : 'has-text-grey-dark' ]">
        <p><i :class="item.iconName" class="fa" aria-hidden="true"></i></p>
        {{ item.text }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [
        {
          iconName: 'fa-bath',
          text: 'Home',
          link: '/',
          isActive: true,
        },
        {
          iconName: 'fa-bath',
          text: 'Components',
          link: '/styleguide',
          isActive: false
        },
        {
          iconName: 'fa-bath',
          text: 'Home',
          link: '/',
          isActive: false
        },
        {
          iconName: 'fa-bath',
          text: 'Home',
          link: '/',
          isActive: false
        }
      ]
    }
  },
}
</script>
