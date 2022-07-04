<template>
  <div class="l-table">
    <slot>备用</slot>
    <header>
      <slot name="header"></slot>
    </header>
    <main></main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
