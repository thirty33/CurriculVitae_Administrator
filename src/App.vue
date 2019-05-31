<template>
  <div id="app">
    <div id="app_hero">
      <presentation-wrapper>
      </presentation-wrapper>
    </div>
    <div id="app_nav">
      <navigator-driver>
      </navigator-driver>
    </div>
    <div id="app_router_nav">
      <navigation-wrapper>
      </navigation-wrapper>
    </div>
    <!-- modal implementation -->
    <loading-modal v-if="showLoadingModal" @close="showLoadingModal = false">
      <activity-indicator slot="loading"></activity-indicator>
      <div slot="body-response">{{ errorsInResponse }}</div>
    </loading-modal>
    <!-- /modal implementation -->
  </div>
</template>

<script>
import NavigatorDriver from './components/Navigator.vue'
import NavigationWrapper from './components/NavigationWrapper.vue'
import PresentationWrapper from './components/PresentationWrapper.vue'
import loadingModal from './components/ModalsComponents/CustomModalComponent.vue'
import activityIndicator from './components/ModalsComponents/ActivityIndicator.vue'

export default {
  name: 'app',
  beforeMount() {
    // this.$store.dispatch('changeLoadingModalStateAsync', false);
  },
  mounted() {
    // this.$store.dispatch('changeLoadingModalStateAsync', false);
    // this.$store.dispatch('loadDataFromServiceAsync');
  },
  data() {
    return {
      // showLoadingModal: false
    }
  },
  computed: {
    showLoadingModal() {
      return this.$store.getters.getLoadingModalState;
    },
    errorsInResponse() {
      return this.$store.getters.getResponseErrors;
    }
  },
  components: {
    NavigatorDriver,
    NavigationWrapper,
    PresentationWrapper,
    loadingModal,
    activityIndicator
  }
}
</script>

<style>

:root {
  --yellow: #ffc600;
  --black: #272727;
}

html {
  /* border-box box model allows us to add padding and border to our elements without increasing their size */
  box-sizing: border-box;
  /* A system font stack so things load nice and quick! */
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
  font-weight: 900;
  font-size: 10px;
  color: var(--black);
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  background-color: aqua;
}

body {
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: peru;
  display: grid;
  grid-template-columns: 1.5fr 3.5fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0;
  grid-template-areas:
    "presentation navigation"
    "navigator navigation";
}

#app_hero {
  grid-area: presentation;
  display: grid;
  background-color: red;
}

#app_nav {
  grid-area: navigator;
  display: grid;
  background-color: yellow;
}

#app_nav > *,
#app_hero > * {
  height: 100%;
  width: 100%;
}

#app_router_nav {
  grid-area: navigation;
  background-color: chartreuse;
}

#app_router_nav > * {
  height: 100%;
}

/* media queries */
@media (max-width: 1000px) {
  
  #app {
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 0.2fr 1fr;
    grid-template-areas:
      "presentation"
      "navigator"
      "navigation";
  }

  #app_router_nav {
    /* background-color: blue; */
  }
  
}

@media (max-width: 540px) {
    #app {
      grid-template-columns: 1fr;
      grid-template-rows: 0.3fr 0.1fr 1fr;
      grid-template-areas:
        "presentation"
        "navigator"
        "navigation";
    }
}
</style>
