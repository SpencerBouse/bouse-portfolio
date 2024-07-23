<script setup lang="ts">
  import Icon from '@components/Icon.vue';

  interface Props {
    color?: string
  }

  withDefaults(defineProps<Props>(),{
    color: 'green',
  })

  const fileNames = [ 'About.txt', 'Draft.txt', 'Test.js']
</script>

<template>
  <div class="is-flex-grow-1 is-flex is-flex-direction-column">
    <div class="box inner is-flex-grow-1 is-flex mt-1">
      <div class="has-text-centered" v-for="name in fileNames">
        <figure class="m-2">
          <Icon icon="file" :color="color"/>
          <figcaption>{{ name }}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>