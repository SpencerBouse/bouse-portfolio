<script setup lang="ts">
  import { reactive } from 'vue'
  import DragSelect from 'dragselect'

  import Window from '@components/Window.vue'
  // @ts-ignore
  import Popup from '@components/projects/Popup.vue'
  import Projects from '@components/projects/Projects.vue'

  import { WindowClass } from '@services/models/windowClass'
  import { updateWindowOrders } from '@services/helpers'
  import { onBeforeEnter, onEnter, onLeave } from '@services/animations'

  const windows = reactive<WindowClass[]>([])

 
  // Ids should be better named, non unique and are used to control animation timing
  // Popups
  windows.push(new WindowClass(1, 'blue', undefined, {x: 4, y:5, z:3}, {from: 'left'}))
  windows.push(new WindowClass(2, 'blue', undefined, {x: 3, y:2, z:4}, {from: 'right'}))
  windows.push(new WindowClass(2, 'blue', undefined, {x: -2, y:34, z:4}, {from: 'left'}))
  windows.push(new WindowClass(3, 'blue', undefined, {x: -2, y:34, z:3}, {from: 'right'}))
  windows.push(new WindowClass(3, 'blue', undefined, {x: 3, y:66, z:3}, {from: 'left'}))
  windows.push(new WindowClass(1, 'blue', undefined, {x: 4, y:65, z:4}, {from: 'right'}))

  // Projects
  windows.push(new WindowClass(5, 'green', {x:40, y:20}, {x: 5, y:9, z:9}, {
    title: 'Projects'
  }))

  const ds = new DragSelect({
    selectableClass: 'draggable',
    //@ts-ignore
    area: document.getElementById('dummy-area')
  })

  ds.subscribe("DS:end", (_) => {
    ds.setSettings({
      //@ts-ignore
      area: document.getElementById('dummy-area')
    })
  });
  
  function updateDragArea(idName:string) {
    ds.setSettings({
      //@ts-ignore
      area: document.getElementById(`${idName}-area`)
    })
  }
</script>

<template>
  <div class="height-full is-flex is-flex-direction-column is-justify-content-space-around">
    <div class="height-full project-view">
      <Window icon="globe" color="blue" class="height-full backdrop overlay">
        <div class="textarea height-full mt-1"></div>
      </Window>

      <TransitionGroup 
        :appear="true"
        @before-enter="onBeforeEnter" 
        @enter="(el:any, done:any)=> onEnter(el,done, {duration: 1.25, delay: 0.05 + (el.dataset.index * 0.2), ease: 'elastic.out(1,0.6)'})"
        @leave="onLeave">
        <Window v-for="(win,i) in windows"
          @mousedown="updateWindowOrders(i,windows)"
          @update-drag-area="updateDragArea"
          :key="win.id"
          :data-index="win.id"
          :title="win.options.title" 
          :color=win.color 
          :isDrag=true
          :style="`top: ${win.position.y}%; ${win.options.from}: ${win.position.x}rem;`"
          :class="[`z-${win.position.z}`, win.options.title ? 'projects' : 'popup']"
          class="is-abs">

            <Popup v-if="!win.options.title"/>
            <Projects v-else :width=win.innerSize.x :height=win.innerSize.y />
            
          </Window>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
  .project-view {
    position: relative;
    max-height: 60rem;
    max-width: 60rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  /* confusing but projects is centered via css, not by properties of the window obj */
  .projects {
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    margin-top: -11rem !important;
    margin-left: -21rem !important;
  }

  .z-3, .z-4, .z-5, .z-6, .z-7, .z-8{
    filter: brightness(90%);
  }
</style>