<template>
  <div
    class="modal is-active">
    <div
      class="modal-background"
      @click.prevent="$emit('close-modal')"/>
    <div class="modal-card">
      <header class="modal-card-head has-text-centered">
        <slot name="header"/>
      </header>
      <section class="modal-card-body">
        <slot name="body"/>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer"/>
      </footer>
    </div>
  </div>
</template>
