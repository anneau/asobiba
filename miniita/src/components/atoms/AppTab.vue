<template>
  <div class="tabs is-centered">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'is-active' : activeTabId === index }"
        @click="clickTab(index)">
        <a>{{ item.displayName }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeTabId: 0,
    };
  },
  methods: {
    clickTab(index) {
      this.activeTabId = index;
      this.$emit('clicked', index);
    },
  },
};
</script>
