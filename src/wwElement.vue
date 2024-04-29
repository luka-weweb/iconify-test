<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div style="position: relative;">
    {{ this.content.name }}
</div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  }
}
</script>
