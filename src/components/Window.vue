<script setup lang="ts">
  import { ref  } from 'vue'
  
  import Icon from '@components/Icon.vue';

  interface Props {
    title?: string
    icon?: string
    color?: string
    isDrag? : boolean
    header? : boolean
  }

  withDefaults(defineProps<Props>(),{
    color: 'primary',
    isDrag: false,
    header: true
  })

  const dragToggle = ref(false)
  const emit = defineEmits(['updateDragArea'])

  function startDrag() {
    dragToggle.value = true
    emit('updateDragArea', 'drag')
  }
</script>

<template>
  <div :class="[`is-${color}`, {'draggable' : dragToggle && isDrag }]" class="window card p-1 is-flex is-flex-direction-column">

    <header v-if="header"
      @mouseover="startDrag" 
      @touchstart="startDrag"
      @mouseleave="dragToggle = false"
      @touchend="dragToggle = false"
      class="card-header is-unselectable has-radius-normal pl-4" 
      :class="[`has-background-${color}`, {'is-draggable': isDrag}]" 
      :style="`min-height: ${title || icon ? '30px' : '1.25rem'}`">

      <span v-if="icon" class="icon is-flex is-align-self-center mr-4">
        <span v-if="icon.length===1" class="is-size-3 has-text-weight-bold has-text-white">{{ icon }}</span>
        <Icon v-else :icon="icon"/>
      </span>
      <p class="card-header-title is-size-5 p-0 has-text-white">{{ title }}</p>

    </header>
    
    <div class="card-content is-flex-grow-1 is-flex is-flex-direction-column is-overflow-hidden" :class="{ 'p-0' : !header}">
      <slot></slot>
    </div>
  </div>

</template>

<style scoped>
  .window {
    max-width: 110%;
  }
  .card-header {
    min-height: 1.25rem;
  }
</style>

