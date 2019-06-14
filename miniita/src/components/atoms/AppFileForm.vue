<template>
  <div class="field">
    <div class="file is-large is-primary has-name is-boxed">
      <label class="file-label">
        <input
          class="file-input"
          type="file"
          name="resume"
          @change="$emit('update-file', $event.target.files[0])">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fa fa-cloud-upload"/>
          </span>
          <span class="file-label">
            ファイルを選択
          </span>
        </span>
        <span class="file-name">
          {{ value }}
        </span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>
