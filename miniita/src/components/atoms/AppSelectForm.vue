<template>
  <div class="select">
    <select
      :value="selected"
      @change="$emit('change', parseInt($event.target.value))">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: {
    selected: {
      type: Number,
      default: 0,
    },
    options: {
      type: Array,
      default: () => [
        {
          value: 0,
          text: 'デフォルト',
        },
      ],
    },
  },
};
</script>
