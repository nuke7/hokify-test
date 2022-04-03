
<template>
  <div class="relative flex items-top justify-center h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6 dark">
        <h2 class="text-2xl leading-7 font-semibold dark:text-white">
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
            >
            <label>First Name</label>
          </div>

          <div class="input-container">
            <input
              v-model="user.lastName"
              required
              type="text"
              class="leading-6 p-2 mt-4"
            >
            <label>Last Name</label>
          </div>

          <div class="input-container">
            <input
              v-model="user.email"
              required
              type="email"
              class="leading-6 p-2 mt-4"
            >
            <label>Email</label>
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
            ><button class="bg-blue-500 text-white font-bold py-2 px-4 my-5 rounded-full focus:outline-none focus:shadow-outline transition ease-in-out  hover:bg-blue-700 duration-700 block">reset store</button></nuxt-link>
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
import { UserType } from '@/types/UserType.interface'
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
    }
  },

  computed: {
    userData(): object {
      return this.$store.getters.stateCheck
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
  },
})
</script>

<style scoped>
</style>


