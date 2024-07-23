<script setup lang="ts">
  import  { ref } from 'vue'

  import Window from "@components/Window.vue";
  import MenuItem from "@components/menu/MenuItem.vue";
  import MenuContent from "@components/menu/MenuContent.vue";

  import { onEnterDropDown, onLeaveDropDown } from '@services/animations';
  import headshot from '@assets/img/ME.webp'
 
  const menuToggle = ref()
  const name = defineModel('name')
  const role = defineModel('role')
</script>


<template>
  <Window title="Admin" class="menu-admin m-0 mt-2">
    <div class="fixed-grid has-5-cols">
      <div class="is-flex">
        <img :src="headshot" alt="Dashing headshot of the developer" class="headshot mr-3 cell is-col-span-1 image is-square my-auto has-radius-normal">
        <div class="is-flex-grow-1 fixed-grid is-flex is-flex-direction-column is-justify-content-flex-end is-green">
          <div class="grid">
            <div class="field cell mb-0">
              <label class="has-text-grey-dark is-unselectable has-text-weight-light" for="name">Name:</label>
              <input disabled v-model="name" id="tablet-name" type="text" class="input is-size-4 has-text-weight-bold pl-2 pr-0" autocomplete="off">
            </div>
            <div class="field cell mb-0">
              <label class="has-text-grey-dark is-unselectable has-text-weight-light" for="role">Role:</label>
              <input disabled v-model="role" id="tablet-role" type="text" class="input pr-0" autocomplete="off">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Window>

  <div class="menu-btn card p-1 mt-1 mb-1" @mousedown="menuToggle = !menuToggle">
    <MenuItem title="Menu" :active="menuToggle" :single="true" :animated="true" class="is-size-6" />
  </div>

  <Transition @enter="onEnterDropDown" @leave="onLeaveDropDown">
    <div v-if="menuToggle" class="menu-router card is-green">
      <MenuContent @toggle-menu="menuToggle = !menuToggle"/>
    </div>
  </Transition>
</template>

<style scoped>
  .headshot {
    max-height: 5rem;
  }
  .menu-admin {
    display: inline-block !important;
    top: 0;
    width: 36rem;
  }
  .menu-btn {
    width: 8rem;
  }
  .menu-router {
    position: absolute;
    z-index: 10;
    padding: .5rem;
    margin-left: 2rem;
    overflow: hidden;
    min-width: 20rem;
  }
</style>