<script setup lang="ts">
  import Window from '@components/Window.vue';
  import MenuContent from '@components/menu/MenuContent.vue';
  
  import headshot from '@assets/img/ME.webp'

  const name = defineModel('name')
  const role = defineModel('role')
</script>

<template>
  <div class="container is-flex is-flex-direction-column is-justify-content-end height-full">
    <Window title="Portfolio" class="menu-admin">
      <div class="fixed-grid has-8-cols">
        <div class="grid">
          <img :src="headshot" alt="Dashing headshot of the developer" class="headshot cell is-col-span-3 image is-square my-auto has-radius-normal">
          <div class="cell is-col-span-5 is-flex is-flex-direction-column form is-green">
            <div class="field mb-0">
              <label class="has-text-grey-dark is-unselectable has-text-weight-light" for="name">Name:</label>
              <input v-model="name" id="name" type="text" class="input is-size-4 has-text-weight-bold pl-2 pr-0" autocomplete="off">
            </div>
            <div class="field">
              <label class="has-text-grey-dark is-unselectable has-text-weight-light" for="role">Role:</label>
              <input v-model="role" id="role" type="text" class="input pr-0" autocomplete="off">
            </div>
          </div>
        </div>
      </div>
    </Window>
    <Window class="menu-main ml-auto" :header="false">
      <div class="spacer"></div>
      <MenuContent :bar="true"  class="pt-2" />
    </Window>
  </div>
</template>

<style scoped>
  .menu-admin {
    z-index: 2 !important;
    top: 5rem;
    min-width: 23rem;
    justify-items: baseline
  }
  .menu-main{
    width: 95%;
    height: 100%;

    .spacer {
      height: 4rem;
    }
  }

</style>