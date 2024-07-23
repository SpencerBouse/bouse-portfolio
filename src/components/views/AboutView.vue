<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import DragSelect from 'dragselect';

  import Window from '@components/Window.vue'
  import Notes from '@components/about/Notes.vue'
  import Explorer from '@components/about/Explorer.vue'

  import { WindowClass } from '@services/models/windowClass';
  import { randomColor, updateWindowOrders } from '@services/helpers';
  import { onBeforeEnter, onEnter, onLeave } from '@services/animations';


  const explorerColor = randomColor();
  const windows = reactive<WindowClass[]>([])

  const name = defineModel('name')
  const role = defineModel('role')

  const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor, eveniet doloremque dicta placeat minima hic asperiores ad debitis impedit voluptas iste omnis delectus? Unde error deleniti nulla velit tempora.'
  const aboutText = ref(`Hey there! Welcome to my Portfolio. I’m ${name.value}, a ${role.value} based in Cincinnati. I love crafting digital experiences that are both user-friendly and visually appealing. I’m always up for a challenge and exploring new tech. I’m passionate about the future of the web, and making it accessible to everyone.\n\nFeel free to reach out.\nLet’s make something great.`)

  windows.push(new WindowClass(1,randomColor(), {x:33, y:15}, {x:22, y:6, z:3},{
    title: 'Draft.txt', text: lorem
  }))
  windows.push(new WindowClass(2,randomColor(), {x:20, y:5}, {x: 13, y:71, z:4},{
    title: 'test.js', text: "//print('Hello') \n console.log('Hello')"
  }))
  windows.push(new WindowClass(3, randomColor(), {x:44, y:20}, {x:7, y:24, z:5},{
    title: 'About.txt', text: aboutText.value
  }))

  // todo replace dragselect with custom dnd, this package has too much going on for what we need
  // its being a real pain in the ass 
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
    <div class="height-full about-view">
      <Window icon="folder" :color="explorerColor" class="explorer-window overlay backdrop height-full ml-auto" >
        <Explorer :color="explorerColor"/>
      </Window>
      <TransitionGroup 
        :appear="true"
        @before-enter="onBeforeEnter" 
        @enter="(el:any, done:any)=> onEnter(el,done, {duration: 1.25, delay: (0.3 + (el.dataset.index * 0.2)), ease: 'elastic.out(1,0.6)'})"
        @leave="onLeave">
        <Window v-for="(win,i) in windows"
          @mousedown="updateWindowOrders(i,windows)"
          @update-drag-area="updateDragArea"
          :key="win.id"
          :data-index="i"
          :title="win.options.title" 
          :icon=win.options.icon :color=win.color 
          :isDrag=true
          :style="`top: ${win.position.y}%; left: ${win.position.x}%;`"
          :class="`z-${win.position.z}`"
          class="is-abs about-window">
            <Notes :height="win.innerSize.y" :width=win.innerSize.x :text="win.options.text" :isReactive="win.options.reactive" v-model:name="name" v-model:role="role"/>
        </Window>
      </TransitionGroup>
    </div>
  </div>  
</template>

<style scoped>
  .about-view {
    position: relative;
    max-height: 60rem;
    max-width: 60rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .explorer-window {
    z-index: -1 !important;
  }

  .about-window {
    max-width: 100% !important;
  }

  .z-3, .z-4 {
    filter: brightness(90%);
  }
</style>