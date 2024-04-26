<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div style="position: relative;">
    <Icon icon="mdi-light:home'" />
</div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  },
  data() {
    return {
      name: 'mdi-light:home'
    }
  }
}
</script>

<style lang="scss" scoped></style>
