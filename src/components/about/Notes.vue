<script setup lang="ts">
  interface Props {
    color?: string
    text?: string
    height?: number
    width?: number
    resizeable?: boolean
    hideOptions?: boolean
  }

  withDefaults(defineProps<Props>(),{
    color: 'primary',
    resizeable: true,
    hideOptions: false,
  })
  
</script>

<template>
  <div class="notes is-flex is-flex-direction-column">
    <p v-if="!hideOptions" class="small-text has-text-grey-dark is-unselectable has-text-weight-light pl-2 mb-1">
      <span class="is-underlined">F</span>ile  <span class="is-underlined">E</span>dit
    </p>
    <textarea name="notesTextArea" class="notesTextArea textarea is-flex-grow-1" :class="[{'no-resize' : !resizeable}, {'mt-1' : hideOptions}]" :style="{height: height + 'rem', width: width + 'rem'}">{{ text }}</textarea>
  </div>
</template>