<script setup lang="ts">
  import blankPage from '@assets/svg/blankPage.svg'

  import jsLogo from '@assets/svg/javascript.svg'
  import htmlLogo from '@assets/svg/html.svg'
  import cssLogo from '@assets/svg/css.svg'
  import tsLogo from '@assets/svg/typescript.svg'
  import angularLogo from '@assets/svg/angular.svg'
  import vueLogo from '@assets/svg/vue.svg'
  import reactLogo from '@assets/svg/react.svg'
  import phpLogo from '@assets/svg/php.svg'
  import pythonLogo from '@assets/svg/python.svg'
  import rubyLogo from '@assets/svg/ruby.svg'
  import graphqlLogo from '@assets/svg/graphql.svg'
  import figmaLogo from '@assets/svg/figma.svg'

  const skills = [
    {name: 'Javascript' , logo: jsLogo }, 
    {name: 'HTML' , logo: htmlLogo },
    {name: 'CSS' , logo: cssLogo },
    {name: 'Typescript' , logo: tsLogo }, 
    {name: 'Angular' , logo: angularLogo }, 
    {name: 'Vue' , logo: vueLogo },
    {name: 'React' , logo: reactLogo },
    {name: 'PHP' , logo: phpLogo }, 
    {name: 'Python' , logo: pythonLogo },
    {name: 'Ruby' , logo: rubyLogo },
    {name: 'GraphQL' , logo: graphqlLogo },
    {name: 'Figma' , logo: figmaLogo },
  ]
</script>

<template>
  <div class="is-flex-grow-1 is-flex is-flex-direction-column height-full">
    <div class="skill-inner box inner is-flex-grow-1 mt-1">
      <div class="grid is-col-min-4 is-mobile-small-col-min-3 row-gap-1">
        <div class="cell has-text-centered is-unselectable" v-for="skill in skills">
          <figure class="figure">
            <img :src="blankPage" width="65" height="85" class="paper"/>
            <img :src=skill.logo width="50" height="50" class="skill-logo"/>
            <figcaption>{{ skill.name }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .skill-inner {
    height: calc(100% - 2rem);
    overflow-y: auto;
  }

  .figure {
    position: relative;
  }

  .skill-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-52%, -67%);
  }


  @media screen and (max-width: 420px) {
    .grid.is-mobile-small-col-min-3 {
      --bulma-grid-column-min: 4.5rem;
    }
  }
</style>