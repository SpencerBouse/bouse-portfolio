<script setup lang="ts">
  import { onMounted } from 'vue'
  import gsap from 'gsap';

  import smile from '@assets/svg/smile.svg'
  import intro from '@assets/svg/intro.svg'

  onMounted(() => {
    gsap.fromTo(".grid",
      { x: "-11rem", },
      { x: "11rem", repeat: -1, yoyo: true, duration: 1.25, ease: "power1.inOut" }
    );

    gsap.set("#power", {fill: "#00ff00", delay: 1.25})
    gsap.set("#glare", {display: "none", delay: 2});
    gsap.to("#screen", {fill: "#AAAAFF", delay: 2, duration: .1});

    gsap.set("#intro", {scale: 0})
    gsap.to("#intro", {scale: 1.4, duration: .1, delay: 2});
    gsap.to("#intro", {scale: 1.6, opacity: 0, duration: .1, delay: 2.1});

    gsap.set("#smile", {scale:0})
    gsap.to("#smile", {scale: 1, duration: .1, delay: 2, ease: "power1.in"});
  })
</script>

<template>
  <div id="loading" class="has-text-white has-text-weight-bold is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
    <div class="text-group">
      <p class="circa mr-2 is-hidden-mobile">c. 2024</p>

      <div class="image-group"> 
        <svg
          width="125"
          height="117"
          viewBox="0 0 41.023018 38.543037"

          xmlns="http://www.w3.org/2000/svg">
          <g
            id="computer"
            transform="translate(-67.386125,-76.586065)">
            <g
              id="base"
              transform="matrix(0.85705084,0,0,0.48985062,11.677825,66.870124)"
              style="display:inline">
              <path
                id="rect48-8-5"
                style="display:inline;fill:#d9b8b6;fill-opacity:1;stroke-width:0.04;paint-order:fill markers stroke"
                d="M 65,75 94.690036,87.052816 94.99924,98.51774 67.380022,93.904116 Z" />
              <path
                id="rect50-58"
                style="display:inline;fill:#ebc8c5;fill-opacity:1;stroke-width:0.0408083;paint-order:fill markers stroke"
                d="M 86.287897,69.504443 112.86532,72.741118 94.690036,87.052816 65,75 Z" />
              <path
                style="color:#000000;display:inline;fill:#ffffff;-inkscape-stroke:none;paint-order:fill markers stroke"
                d="m 65,75 0.09232,0.881397 29.248388,11.719636 0.349332,-0.548217 z"
                id="rect48-8-5-7" />
              <path
                id="rect51-8"
                style="fill:#968c8b;stroke-width:1.70878;stroke-dasharray:none;paint-order:fill markers stroke"
                d="M 94.69004,87.052816 112.86532,72.741118 111.25955,93.904116 94.99924,98.51774 Z" />
              <g
                id="detail"
                transform="matrix(1.1667919,0,0,2.0414387,-13.625592,-136.51126)">
                <path
                  style="color:#000000;fill:#b1b1b1;fill-opacity:1;-inkscape-stroke:none;paint-order:fill markers stroke"
                  d="m 87.673112,109.6056 0.0027,1.78893 3.304688,0.81836 -0.0377,-1.80742 z"
                  id="power" />
                <path
                  d="m 87.675783,111.39453 3.304688,0.81836 -0.0377,-1.80742"
                  style="color:#000000;fill:none;stroke:#968c8b;stroke-width:0.3;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
                  id="path1-6" />
                <path
                  style="color:#000000;display:inline;fill:#403c3c;fill-opacity:1;-inkscape-stroke:none;paint-order:fill markers stroke"
                  d="m 68.561144,105.55432 0.175191,0.95601 11.24804,2.6967 -0.1048,-0.91571 z m 6.877007,3.00818 0.231771,0.7793 3.060547,0.70898 -0.184115,-0.7793 z"
                  id="path54" />
              </g>
              <path
                style="color:#000000;display:inline;fill:#7c7271;fill-opacity:1;-inkscape-stroke:none;paint-order:fill markers stroke"
                d="M 84.206252,95.918111 68.10017,98.66159 93.251015,103.39028 108.69541,96.329107 Z"
                id="path6"
                transform="matrix(0.99774458,0.08717106,-0.05819191,2.0388982,7.8532237,-133.40317)" />
            </g>
            <g
              id="back"
              transform="rotate(6.172155,23.447277,137.09362)">
              <path
                id="rect53"
                style="display:inline;fill:#968c8b;fill-opacity:1;stroke-width:0.04;paint-order:fill markers stroke"
                d="M 95.965419,74.904366 100.626,73.517 l -0.62081,19.101726 -4.196399,2.380056 z" />
              <path
                id="rect52"
                style="fill:#ebc8c5;fill-opacity:1;stroke-width:0.04;paint-order:fill markers stroke"
                d="M 86.2915,71.802726 100.626,73.517 95.965419,74.904366 83.360101,72.201452 Z" />
            </g>
            <g
              id="face"
              transform="matrix(0.8512203,0.09205357,-0.1075162,0.99420333,23.51249,-2.8107243)"
              style="display:inline">
              <path
                id="face-front"
                style="display:inline;fill:#d9b8b6;fill-opacity:1;stroke-width:0.04;paint-order:fill markers stroke"
                d="M 65,75 95.206148,76.67 94.999417,102.258 65,97.000001 Z" />
              <g
                style="display:inline">
                <path
                  id="screen"
                  style="display:inline;fill:#2b2929;fill-opacity:1;stroke-width:0.0294597;paint-order:fill markers stroke"
                  d="m 68.442805,78.699958 23.11439,2.11201 L 91.764128,98.162 68.442805,94.188032 Z" />
                <path
                  style="color:#000000;fill:#ffffff;-inkscape-stroke:none;paint-order:fill markers stroke"
                  d="m 91.773437,80.808594 -0.39278,0.203268 0.164265,16.894429 -22.812709,-3.801996 -0.492374,0.256421 23.742579,4.057294 z"
                  id="rect48-8-3-0" />
                <path
                  style="color:#000000;fill:#968c8b;-inkscape-stroke:none;paint-order:fill markers stroke"
                  d="m 68.226562,78.462891 0.01328,15.897825 0.492374,-0.256421 -0.07401,-15.166795 22.722451,2.074362 0.39278,-0.203268 z"
                  id="rect48-8-3-2" />
              </g>
              <path
                id="face-top"
                style="display:inline;fill:#ebc8c5;fill-opacity:1;stroke-width:0.0408083;paint-order:fill markers stroke"
                d="M 72.732119,73.125422 102.20699,75.291 95.206148,76.67 65,75 Z" />
              <path
                style="color:#000000;fill:#ffffff;-inkscape-stroke:none;paint-order:fill markers stroke"
                d="m 72.732119,73.125422 -0.724484,0.175644 29.019665,2.222305 1.17969,-0.232376 z"
                id="rect50-5" />
              <path
                id="rect51"
                style="fill:#968c8b;stroke-width:1.08073;stroke-dasharray:none;paint-order:fill markers stroke"
                d="M 95.206148,76.67 102.20699,75.291 102.00025,98 94.999417,102.258 Z" />
              <path
                style="color:#000000;fill:#403c3c;fill-opacity:1;stroke-width:0.999674;stroke-dasharray:none;paint-order:fill markers stroke"
                d="M 101.65659,75.399416 101.55106,98.273203 102.00025,98 102.20699,75.291 Z"
                id="rect51-9" />
              <path
                id="glare"
                style="fill:#fff8f8;fill-opacity:1;stroke:#e2d9d9;stroke-width:0.554734;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
                d="m 76.461607,87.338954 3.43446,-2.654509 m -5.829375,3.10467 4.599447,-3.623187"
                transform="matrix(1.1612038,-0.10751619,0.12557615,0.99420335,-26.949833,5.3224049)" />
            </g>
          </g>
        </svg>
        <img id="intro" width="30" height="30" :src="intro">
        <img id="smile" width="30" height="26" :src="smile">
      </div>
      
      <p class="name">SPENCER BOUSE</p>
      <p class="role"><span class="is-hidden-small-mobile">Front-End</span> Developer</p>
    </div>

    <div class="loading-bar mt-4 fixed-grid has-5-cols">
      <div class="grid is-gap-0.5">
        <div class="pip"></div>
        <div class="pip"></div>
        <div class="pip"></div>
        <div class="pip"></div>
        <div class="pip"></div>
      </div>
    </div>
  </div>
</template>

<style scoped >
  #loading {
    height: 100vh;
    width: 100vw;
    background-color: var(--bulma-really-quite-grey);
    box-shadow: inset 0 0 7rem 5rem rgba(0, 0, 0, .5);
    overflow: hidden;
    transform-origin: bottom;
  }
  
  .text-group {
    text-align: center;
  }

  .circa {
    font-size: 1.5rem;
    display: inline;
    vertical-align: bottom;
  }

  .image-group {
    display: inline-block;
    position: relative;

    #intro {
      position: absolute;
      left: 30px;
      top: 33px;
    }

    #smile {
      position: absolute;
      transform: rotate(12deg);
      left: 30px;
      top: 34px;
    }
  }

  .name {
    font-size: 5rem;
    line-height: 4.15rem;
  }

  .role {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  .loading-bar {
    border: 5px solid white;
    border-radius: 3px;
    width: 18rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .25rem;
    overflow: hidden !important;

    .pip {
      background-color: var(--bulma-blue-light);
      height: 1.5rem;
      width: 1rem;
      border-radius: 3px;
    }
  }

  @media screen and (max-width: 768px) {
    .name {
      font-size: 3rem;
      line-height: 2.5rem;
    }

    .role {
      font-size: 2rem;
      line-height: 1.75rem;
    }
  }

  @media screen and (max-width: 400px) {
    .is-hidden-small-mobile {
      display: none;
    }

    .name {
      font-size: 2.5rem;
      line-height: 2.25rem;
    }
  }
</style>