<script setup lang="ts">
  import { onMounted, ref } from "vue";

  import LoadingView from '@components/views/LoadingView.vue'
  import MobileView from '@components/views/MobileView.vue'
  import Menu from '@components/menu/Menu.vue'
  import TabletMenu from '@components/menu/TabletMenu.vue'

  import { onBeforeEnter, onEnter, onLeave, onLeaveLoad } from "@services/animations";

  const loading = ref(true)
  const docLoading = ref(true)
  const name = ref('Spencer Bouse')
  const role = ref('Front-End Developer')

  addEventListener("load", (_) => { 
    docLoading.value = false
  })

  onMounted(()=>{
    // Splash screen is purely for aesthetics, and potential future development / Change from timeout if future development demands a load
    setTimeout(() => {
      loading.value = false      
    }, 4000);
  })
</script>

<template>
  <div id="dummy-area"></div>
  <transition @leave="onLeaveLoad">
    <LoadingView v-if="loading || docLoading"/>
    <div v-else id="drag-area">
      <div class="background has-background-grey"></div>
      <div class="page is-flex is-flex-direction-column">
        <div class="is-hidden-tablet is-hidden-desktop height-full">
          <MobileView v-model:name="name" v-model:role="role" />
        </div>  
        <div class="is-hidden-mobile is-hidden-desktop">
          <TabletMenu v-model:name="name" v-model:role="role"  />
        </div>
        <div class="layout fixed-grid has-7-cols py-2 is-flex-grow-1 is-hidden-mobile stack-fix">
          <div class="grid">
            <Menu v-model:name="name" v-model:role="role" class="cell is-hidden-touch is-col-span-2-desktop is-green stack-fix z-2"/>
            <main id="drag-area" class="cell is-col-span-7-mobile is-col-span-7-tablet is-col-span-5-desktop m-auto">
              <router-view v-slot="{ Component }">
                  <transition
                    mode="out-in"
                    :appear="true"
                    @before-enter="(el) => onBeforeEnter(el.getElementsByClassName('backdrop'), 0.6)"  
                    @enter="(el:any, done:any)=> onEnter(el.getElementsByClassName('backdrop'), done, {duration: 1.25, ease: 'elastic.out(1,1)'})" 
                    @leave="(el:any, done:any)=> onLeave(el, done, {duration: .75})">
                      <component :is="Component" v-model:name="name" v-model:role="role"/>
                  </transition>
              </router-view>
            </main>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
  .background {
    position: fixed;
    z-index: -1;
    height: 100%;
    width: 100%;

    background-image: url("./assets/img/pixalate.webp");
    background-size: cover;
    background-position: center;

    image-rendering: crisp-edges;
    filter: brightness(50%);
    box-shadow: inset 0 0 1rem 0rem rgba(0, 0, 0, .25);
  }
  .page {
    z-index: 2 !important;

    overflow-y: auto;
    height: 100vh;
    padding: 0 5% !important;
  }

  .layout {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    .grid {
      position: relative;
      height: 100%;
    }
  }

  main {
    position: relative;
    height: 100%;
    max-height: calc(100vh - 6rem);

    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 1190px) {
    .page {
      padding: 0 1% !important;
    }
    .layout {
      padding-top: 2rem !important;
      padding-bottom: 2rem !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    main {
      max-height: calc(100vh - 14rem);
    }
    .layout {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
  }

  @media screen and (max-width: 769px) {
    .page {
      padding: 0 !important;
      scrollbar-gutter: stable;
    }
  }
</style>