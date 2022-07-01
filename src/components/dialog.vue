<template>
  <teleport to="body">
    <div class="dialog">
      <div class="dialog_wrapper">
        <div class="dialog_header" v-if="title">
          <slot name="header">
            <span>{{ title }}</span>
          </slot>
        </div>
      </div>
      <div class="dialog_content">
        <slot></slot>
      </div>
      <div class="dialog_footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  title: String,
});

const { title } = toRefs(props);
</script>
