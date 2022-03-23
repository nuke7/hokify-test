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
})
</script>
