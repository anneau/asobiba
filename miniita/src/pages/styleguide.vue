<template>
  <div class="section">
    <app-section-title 
      size="is-5"
      title="Notification"/>
    <app-notification>
      今日は暑いですね
    </app-notification>
    <app-section-title 
      size="is-5"
      title="Input Text"/>
    <app-input-text />
    <app-section-title 
      size="is-5"
      title="Input Text Area"
      style="margin-top: 1rem;"/>
    <app-text-area row="10"/>
    <app-section-title 
      size="is-5"
      title="Button"
      style="margin-top: 1rem;"/>
    <app-button
      text="ボタン"
      color="is-default"/>
    <app-button
      text="ボタン"
      color="is-primary"/>
    <app-button
      text="ボタン"
      color="is-success"/>
    <app-button
      text="ボタン"
      color="is-danger"
      style="margin-top: 0.5rem;"/>
    <app-button
      text="ボタン"
      color="is-warning"
      style="margin-top: 0.5rem;"/>
    <app-button
      text="ボタン"
      color="is-info"
      style="margin-top: 0.5rem;"/>
    <app-section-title 
      size="is-5"
      title="File Form"
      style="margin-top: 1rem;"/>
    <app-file-form />
  </div>
</template>
