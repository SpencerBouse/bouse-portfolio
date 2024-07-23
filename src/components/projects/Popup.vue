<script setup>
  import { ref } from 'vue';
  import { randomPopup } from '@services/helpers';

  const popupName = ref(randomPopup())
</script>

<template>
  <div class="popup-container is-unselectable">
    <div v-if="popupName === 'virus'"
      class="popup virus-popup box has-background-red has-text-centered is-family-sans-serif is-weight-900 p-2 mt-2">
      <p class="is-size-1 virus-msg1">Warning!!</p>
      <p class="is-size-5 virus-msg2">Virus Detected</p>
      <div class="px-2 virus-msg3 has-background-white has-text-red is-size-3 is-inline">DOWNLOAD</div>
    </div>

    <div v-if="popupName === 'money'" 
      class="popup money-popup box has-background-yellow has-text-centered is-family-sans-serif is-weight-900 p-2 mt-2">
      <div class="money-msg">
        <p class="is-size-1 money-msg1">FREE</p>
        <p class="is-size-3 money-msg2">MONEY</p>
      </div>
      <svg class="money-svg" viewBox="0 0 353 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M176.5 0L202.325 16.6579L244.044 4.79559L250.044 23.7131L301.304 18.4523L286.566 36.7493L339.565 38.8909L306.331 53.782L353 63L306.331 72.218L339.565 87.1091L286.566 89.2507L301.304 107.548L250.044 102.287L244.044 121.204L202.325 109.342L176.5 126L150.675 109.342L108.956 121.204L102.956 102.287L51.6957 107.548L66.4342 89.2507L13.4353 87.1091L46.6685 72.218L0 63L46.6685 53.782L13.4353 38.8909L66.4342 36.7493L51.6957 18.4523L102.956 23.7131L108.956 4.79559L150.675 16.6579L176.5 0Z" fill="#913A52"/>
      </svg>
      <div class="is-size-3 money-msg3">Click <span class="has-background-red px-1 is-inline-block">NOW!</span></div>
    </div>

    <div v-if="popupName === 'adblock'" 
      class="popup adblock-popup box has-background-cyan has-text-centered is-family-sans-serif is-weight-900 p-2 is-flex is-flex-direction-column is-justify-content-space-between mt-2">
      <div class="is-size-4 px-4 is-flex is-justify-content-space-between">
        <p class="is-inline">CLICK</p>
        <p class="is-inline">CLICK</p>
      </div>
      <p class="is-4-em is-align-items-center">AD</p>
      <svg class="circle-svg" width="150" height="150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="65" stroke="#913A52" stroke-width="20"/>
      </svg>
      <svg class="line-svg" width="100" height="100" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="7.92887" y1="107.929" x2="107.929" y2="7.92893" stroke="#913A52" stroke-width="20"/>
      </svg>
      <div class="is-size-4 px-4 is-flex is-justify-content-space-between">
        <p class="is-inline">CLICK</p>
        <p class="is-inline">CLICK</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .box {
    --bulma-box-color: var(--bulma-white);
  }
  
  .popup {
    min-width: 20rem;
    min-height: 12rem;
  }

  .virus-popup{
    .virus-msg1{
      position: relative;
    }
    .virus-msg2{
      position: relative;
      top: -.75rem
    }
    .virus-msg3{
      position: relative;
      bottom: 5px;
    }
  }

  .money-popup{
    .money-msg {
      p { 
        height: 0;
        position: relative;
      }

      .money-msg1 {
        top: .5rem;
      }

      .money-msg2{
        top: 3.25rem;
      }
    }

    .money-msg3 {
      position: relative;
      z-index: 1;

      span {
        position: relative;
        border: 4px solid var(--bulma-yellow);
      }

      span::before {
        position: absolute;
        top: 8px;
        left: 8px; 
        z-index: -1;
        content: '';
        width: 100%;
        height: 100%;
        background-color: var(--bulma-red);

      }
    }
  }

  .adblock-popup {
    position: relative;

    .circle-svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .line-svg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>