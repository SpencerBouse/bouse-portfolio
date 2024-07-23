<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  import Window from '@components/Window.vue';
  import Notes from '@components/about/Notes.vue';
  import Skills from '@components/skills/Skills.vue';
  import Projects from '@components/projects/Projects.vue';

  import headshot from '@assets/img/ME.webp'

  const name = ref('Spencer Bouse')
  const role = ref('Front-End Developer')
  const aboutText = ref(`Hey there! Welcome to my Portfolio. I’m ${name.value}, a ${role.value} based in Cincinnati. I love crafting digital experiences that are both user-friendly and visually appealing. I’m always up for a challenge and exploring new tech. I’m passionate about the future of the web, and making it accessible to everyone.\n\nFeel free to reach out.\nLet’s make something great.`)

  const notesText = ref<HTMLElement | null>(null)

  function windowResize(){
    if(notesText.value){
      notesText.value.style.height = '0'
      notesText.value.style.height = `${notesText.value.scrollHeight + 10}px`
    } 
  }

  onMounted(()=>{
    window.addEventListener("resize", windowResize);
    notesText.value = document.querySelector('.notesTextArea')
    if(notesText.value) (notesText.value as HTMLTextAreaElement).disabled = true
    windowResize()
  })
</script>

<template>
  <div class=" height-full is-flex is-flex-direction-column p-1 px-3">
    <Window class="m-0 mb-4 z-1" title="Portfolio">
      <div class="fixed-grid has-3-cols">
        <div class="is-flex">
          <img :src="headshot" alt="Dashing headshot of the developer" class="headshot image is-square my-auto mr-3 has-radius-normal">
          <div class="admin-form is-flex-grow-1 is-flex is-flex-direction-column form is-green">
            <div class="field mb-0">
              <label class="has-text-grey-dark is-unselectable has-text-weight-light" for="name">Name:</label>
              <input disabled v-model="name" id="mobile-name" type="text" class="input is-size-4 has-text-weight-bold pl-2 pr-0" autocomplete="off">
            </div>
            <div class="field">
              <label class="has-text-grey-dark is-unselectable has-text-weight-light" for="role">Role:</label>
              <input disabled v-model="role" id="mobile-role" type="text" class="input pr-0" autocomplete="off">
            </div>
          </div>
        </div>
      </div>
    </Window>

    <div class="is-flex is-flex-direction-column is-justify-content-space-between height-full ">
      <div class="is-flex is-flex-direction-column is-justify-content-space-between mb-4 is-unselectable">

        <Window icon="folder" color="red" title="About" id="about-window" class="mt-1 mb-4 is-overflow-hidden"> 
          <Notes :resizeable="false" :text="aboutText" :hideOptions="true"/>
        </Window>
        <Window icon="gear" color="blue" title="Skills" id="skills-window" class="mt-1 mb-4" :isToggleable="true">
          <Skills :mobile="true" color="blue"/>
        </Window>
        <Window icon="globe" color="green" title="Projects" id="projects-window" class="mt-1" :isToggleable="true">
          <Projects :resizeable="false" :height="20" />
        </Window>

      </div>

      <footer class="p-2">
        <Window :header="false">
          <div class="field mb-2 pt-1 px-2">
            <p class="is-size-5 has-text-weight-medium is-unselectable">Contact</p>
            <hr class="m-0">
            <div class="is-green">
              <p class="is-float-right mr-2">bouse.spencer<wbr>@gmail.com</p>
            </div>
          </div>
          
          <div class="field mb-1 px-2">
            <p class="is-size-5 has-text-weight-medium is-unselectable">Links</p>
            <hr class="m-0">
            <div class="is-float-right mr-2 is-green">
              <p class="link"><a href="https://www.linkedin.com/in/spencer-bouse-134254139/" class="is-underlined">LinkedIn<span class="is-float-right ml-2">🔗</span></a></p>
              <p class="link"><a href="https://github.com/SpencerBouse" class="is-underlined">Github<span class="is-float-right ml-2">🔗</span></a></p>
            </div>
          </div>

          <span class="version pl-2">v1.0.2</span>
        </Window>
      </footer>
    </div>

  </div>
</template>

<style scoped>
  .headshot {
    max-height: 8rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 412px) {
    .headshot {
      display: none;
    }
  }
</style>