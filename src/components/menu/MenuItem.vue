<script setup lang="ts">
  interface Props {
    title: string
    active?: boolean
    single?: boolean
    animated?: boolean
  }

  withDefaults(defineProps<Props>(),{
    active : false,
    single : false,
    animated : false
  })

</script>

<template>
  <div class="has-text-weight-medium">
    <button :class="[{'is-active': active}, {'px-2' : single}, single ? 'p-1' : 'p-2']" class="has-radius-normal has-text-weight-medium is-flex is-justify-content-space-between is-align-items-center">
      <p :class="single ? 'is-size-5' : 'is-size-4'">{{ title }}</p>
      <svg :class="{'rotate' : active && animated }" class="arrow" width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :fill="`${ active ? 'white' : 'black'}`" d="M12.6288 9.52291C13.4978 10.316 13.4978 11.6842 12.6288 12.4773L3.36299 20.9345C2.07917 22.1062 0.0147123 21.1954 0.0147123 19.4573L0.0147123 2.54299C0.0147123 0.804819 2.07917 -0.105986 3.36299 1.06578L12.6288 9.52291Z"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
  .is-active {
    background-color: color-mix(in srgb, var(--bulma-green) 75%, transparent);
    color: var(--bulma-white);
  }

  .arrow {
    transition: transform .2s;
    transform: rotate(0deg);
  }

  .rotate {
    transition: transform .2s;
    transform: rotate(90deg);
  }

  button {
    display: inline-block;
    width: 100%;
  }

  button:not(.is-active):hover {
    background-color: color-mix(in srgb, var(--bulma-green) 50%, transparent);
    color: var(--bulma-white);
    path {
      fill: var(--bulma-white);
    }
  } 
</style>