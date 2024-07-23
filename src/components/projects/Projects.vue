<script setup lang="ts">
  import { onMounted, reactive, ref } from "vue";

  import { onEnterSlide, onLeaveSlide } from "@services/animations";
  import imgNonogram from "@assets/img/nonogram.webp"
  import imgDragondle from "@assets/img/Dragondle_app.webp"
  import imgSpeedrun from "@assets/img/SpeedRunShuffle.webp"

  interface Props {
    height?: number
    width?: number
    resizeable?: boolean,
  }

  withDefaults(defineProps<Props>(),{
    resizeable: true,
  })

  const projects = reactive([
    {index: 0, title: 'Speedrun Shuffler', img: imgSpeedrun, ratio: '4by3', altText: "Speedrun Shuffler App", link: 'https://github.com/SpencerBouse/SpeedRunShuffler', text: "Made for Spencer by Spencer. I made this so I could watch random speedruns without having to hem and haw over it. This web app pulls random speedruns from specific games or from created collections. Built with the Speedrun.com API."},
    {index: 1, title: 'Dragondle', img: imgDragondle, ratio: '4by3', altText: "Dragondle App", link: 'https://github.com/SpencerBouse/Dragondle-FrontEnd', text: "A Dragon Ball-themed character guessing game, inspired by the popular Wordle format. Attempt to guess a hidden Dragon Ball character name within 4 tries. Based on Gamedle. Really just an excuse to play around with GraphQL/MongoDB."},
    {index: 2, title: 'Nonogram', img: imgNonogram, ratio: '1by1', altText: "Solved Puzzle", link: 'https://github.com/SpencerBouse/Nonogram-puzzle', text: "Nonogram puzzle generator, with UI inspired by the popular Picross games. Not much more to add, does what it says on the tin."},
  ])
  const project = ref(projects[0])
  const direction = ref(1)

  function setProject(index:number){
    direction.value = (project.value.index < index) ? 1 : -1
    project.value = projects[index]
  }

  onMounted(()=>{
    project.value = projects[0]
  })
</script>

<template>
  <div class="textarea fixed-grid has-5-cols mb-2 mt-1 px-4 is-green" 
  :class="{'no-resize' : !resizeable }"
  :style="`height: ${height}rem; width: ${width}rem;`">
    <TransitionGroup  
      @enter="(el:any, done:any)=> onEnterSlide(el, done, direction)"
      @leave="(el:any, done:any)=> onLeaveSlide(el, done, direction)"> 
      <div :key="project.index" class="slide">
        <p class="is-float-left is-size-5 has-text-weigth-bold">{{ project.title }}</p>
        <p class="is-float-right link"><a :href="project.link" class="is-underlined">Git Repo<span class="is-float-right ml-2">🔗</span></a></p>
        <hr class="my-1 is-clear-both">
        <figure class="is-green figure">
          <img :src="project.img" :alt="project.altText" class="project-snapshot image is-float-left" :class="`is-aspect-ratio-${project.ratio}`">
          <figcaption >
            {{ project.text }}
          </figcaption>
        </figure>
      </div>
    </TransitionGroup>
  </div>

  <div class="is-flex is-justify-content-space-between">
    <button class="btn is-float-left px-4 py-1 m-0 has-radius-normal" 
      :class="{'muted' : project.index === 0}" :disabled="project.index === 0"
      @click="setProject(project.index-1)">
      Prev
    </button>
    <div>
      <input v-for="(_,index) in projects" type="radio" class="radio" name="project" :checked="project.index === index" @click="setProject(index)" autocomplete="off">
    </div>
    <button class="btn is-float-right px-4 p-1 m-0 has-radius-normal" 
      :class="{'muted' : project.index === projects.length-1}" :disabled="project.index === projects.length-1"
      @click="setProject(project.index+1)">
      Next
    </button>
  </div>

</template>

<style scoped>
 .textarea {
    resize: both;
    overflow-x: hidden;
    user-select: text;
  }

  .slide {
    position: absolute;
    width: calc(100% - 2rem);
  }

  .project-snapshot { 
    width: 35%;
    min-width: 10rem;
    margin-right: .75rem;
    margin-bottom: .5rem;
  }

  @media screen and (max-width: 400px) {
    .project-snapshot {
      float: none !important;
      height: 10rem;
      width: auto;
      margin-left: auto;
      margin-right: auto;
    }
    .textarea {
      height: 30rem !important;
    }
  }
</style>