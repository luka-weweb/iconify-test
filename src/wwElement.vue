<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div style="position: relative;">
    {{ this.content.name }}
    <Icon icon="mdi-light:home" />
    <Icon :icon="this.content.name" />
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

<style lang="scss" scoped></style>
