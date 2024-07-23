<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute, useRouter } from "vue-router";

  import MenuItem from "@components/menu/MenuItem.vue";

  interface Props {
    bar?: boolean
  }

  withDefaults(defineProps<Props>(),{
    bar: false,
  })

  const route = useRoute()
  const router = useRouter()
  const emit = defineEmits(['toggleMenu'])
  const copyToolTip = ref('Click to Copy')

  function goToRoute(route:string) {
    router.push(route)
    emit('toggleMenu')
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('bouse.spencer@gmail.com')
      copyToolTip.value = 'Copied'
    } catch(e) {
      copyToolTip.value = 'Error Copying :('
    }
  }
</script>

<template>
  <div class="menu height-full" :class="{'fixed-grid has-7-cols' : bar}">
    <div class="grid is-gap-1 height-full">
      <div v-if="bar" class="menu-bar has-radius-normal has-background-primary is-col-span-1 cell"></div>
      <div class="is-flex is-flex-direction-column is-justify-content-space-between height-full" :class="{'is-col-span-6 cell' : bar}">
        <div class="is-flex is-flex-direction-column is-justify-content-space-between">
          <nav class="items">
            <RouterLink to="about" @click="goToRoute('/about')" >
              <MenuItem title="About" :active="route.name === 'about'" class="mb-1"/>
            </RouterLink>
            <RouterLink to="skills" @click="goToRoute('/skills')" >
              <MenuItem title="Skills" :active="route.name === 'skills'" class="mb-1"/>
            </RouterLink>
            <RouterLink to="projects" @click="goToRoute('/projects')" >
              <MenuItem title="Projects" :active="route.name === 'projects'" />
            </RouterLink>
          </nav>
        </div>
        
        <footer class="mt-4 p-2">
          <div class="field mb-0">
            <p class="is-size-5 has-text-weight-medium">Contact</p>
            <hr class="m-0">
            <div class="email-box" @click="copyEmail" @mouseleave="copyToolTip = 'Click to Copy'">
              <span class="tooltip p-1 is-abs has-radius-normal is-size-7">
                {{ copyToolTip }}
              </span>
              <p class="is-float-right mr-2">bouse.spencer<wbr>@gmail.com</p>
              
            </div>
          </div>
          
          <div class="field">
            <p class="is-size-5 has-text-weight-medium">Links</p>
            <hr class="m-0">
            <div class="is-float-right mr-2">
              <p class="link"><a href="https://www.linkedin.com/in/spencer-bouse-134254139/" class="is-underlined">LinkedIn<span class="is-float-right ml-2">🔗</span></a></p>
              <p class="link"><a href="https://github.com/SpencerBouse" class="is-underlined">Github<span class="is-float-right ml-2">🔗</span></a></p>
            </div>
          </div>
          <span class="version">v1.0.2</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .menu {
    min-height: 17rem;
  }

  .menu-bar {
    transform-origin: bottom;
    transform: scaleY(1.2);
  }

  .items {
    a {
      --bulma-link-text: var(--bulma-black);
    }
  }

  .email-box {
    position: relative;
    text-align: right;

    p {
      user-select: text;
    }

    .tooltip {
      visibility: hidden;
      width: 125px;
      right: 10%;
      top: -35px;
      margin-left: -60px;
      background-color: rgba(0, 0, 0, .85);
      color: var(--bulma-white);
      text-align: center;
      position: absolute !important;
      z-index: 1;
    }

    .tooltip::after {
      content: "";
      position: absolute;
      border: solid;
      border-width: 5px;
      border-color: rgba(0, 0, 0, .85) rgba(0, 0, 0, .85) transparent transparent;
      top: 100%;
      left:50%;
    }
    
  }

  .email-box:hover {
    .tooltip {
      visibility: visible;
    }
  }

</style>