<template>
  <div>
    <main-component />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainComponent from '~/components/MainComponent.vue'

export default Vue.extend({
  name: 'MainPage',
  components: { MainComponent },
  transition: 'home',
})
</script>
<style>
.home-enter-active,
.home-leave-active {
  transition: all 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
