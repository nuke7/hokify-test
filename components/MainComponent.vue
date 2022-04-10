
<template>
  <div
    class="relative flex items-top justify-center h-screen bg-gray-100 sm:items-center sm:pt-0"
    :class="{ dark: isDarkStore }"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div
      class="max-w-4xl mx-auto sm:px-6 lg:px-8"
      :class="{ dark: isDarkStore }"
    >

      <div
        class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"
        :class="{ darkCard: isDarkStore }"
      >
        <h2 class="text-2xl leading-7 font-semibold">
          Welcome to hokify test SPA
        </h2>
        <form @submit.prevent="submit">

          <div class="input-container">
            <input
              id="firstName"
              v-model="user.firstName"
              required
              type="text"
              class="leading-6 p-2 mt-4"
              :class="{ darkCard: isDarkStore }"
            >
            <label
              class="input-label"
              :class="{ darkCardLabel: isDarkStore }"
            >First Name</label>
          </div>

          <div class="input-container">
            <input
              v-model="user.lastName"
              required
              type="text"
              class="leading-6 p-2 mt-4"
              :class="{ darkCard: isDarkStore }"
            >
            <label
              class="input-label"
              :class="{ darkCardLabel: isDarkStore }"
            >Last Name</label>
          </div>

          <div class="input-container">
            <input
              v-model="user.email"
              required
              type="email"
              class="leading-6 p-2 mt-4"
              :class="{ darkCard: isDarkStore }"
            >
            <label
              class="input-label"
              :class="{ darkCardLabel: isDarkStore }"
            >Email</label>
          </div>

          <div class="button-wrapper">
            <button
              type="submit"
              class="bg-blue-500 text-white font-bold py-2 px-4 my-5 rounded-full focus:outline-none focus:shadow-outline transition ease-in-out  hover:bg-blue-700 duration-700 block"
            >send</button>
            <nuxt-link
              v-if="userData"
              to="/reset-store"
              class="no-underline"
            ><button class="bg-blue-500 text-white font-bold py-2 px-4 my-5 rounded-full focus:outline-none focus:shadow-outline transition ease-in-out  hover:bg-blue-700 duration-700 block">check store</button></nuxt-link>
          </div>
          <div class="flex justify-center items-center">
            <input
              id="darkToggler"
              v-model="isDark"
              class="darkToggle"
              type="checkbox"
              @change="darkToggle"
            >
            <label
              for="darkToggler"
              class="text-xl"
            >Dark Mode</label>
          </div>

        </form>

      </div>
      <div class="flex justify-center pt-4 space-x-2">

      </div>
    </div>

  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { UserType } from '~/types/UserType'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default Vue.extend({
  name: 'HokifyTest',

  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
      } as UserType,
      // dark: this.isDarkStore,
    }
  },

  computed: {
    userData(): object {
      return this.$store.getters.stateCheck
    },

    isDarkStore(): boolean {
      return this.$store.getters.isDarkCheck
    },

    isDark: {
      get(): boolean {
        return this.$store.getters.isDarkCheck
      },
      set(newValue: boolean) {
        return newValue
      },
    },
  },

  methods: {
    submit() {
      if (this.user.firstName && this.user.lastName && this.user.email) {
        alert(`Hello ${this.user.firstName} ${this.user.lastName} at hokify`)
        this.$store.dispatch('userStateUpdate', this.user)
      } else {
        alert('Please fill all the fields')
      }
    },

    darkToggle() {
      this.$store.dispatch('darkToggle')
    },
  },
})
</script>

<style scoped>
</style>


