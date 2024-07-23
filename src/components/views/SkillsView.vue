<script setup lang="ts">
  import Window from '@components/Window.vue'
  import Skills from '@components/skills/Skills.vue'

  import { randomColor } from '@services/helpers';

  const windowColor = randomColor()
</script>

<template>
    <div class="height-full is-flex is-flex-direction-column is-justify-content-space-around">
      <Window title="Skills" icon="gear" :color="windowColor" class="backdrop height-full skill-view" :class="`is-${windowColor}`">
        <Skills />
        <p class="svg-repo is-unselectable is-size-7 m-0 mr-2">Tech Logos by <a href="https://www.svgrepo.com" target="_blank">SVG Repo</a></p>
      </Window>
    </div>
</template>

<style scoped>
  .skill-view{
    position: relative;
    max-height: 60rem;
    max-width: 60rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .svg-repo {
    text-align: right;
    position: relative;
    top: 5px;
    color: var(--bulma-grey-dark);
    a {
      color: var(--bulma-grey-dark);
      text-decoration: underline;
    }
  }
</style>