<template>
  <div
    class="flex flex-col items-center justify-center h-screen bg-gray-100"
    :class="{ dark: isDarkStore }"
  >
    <div class="w-full max-w-md">
      <div
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        :class="{ darkCard: isDarkStore }"
      >
        <div
          class="mb-4"
          :class="{ darkCard: isDarkStore }"
        >
          <h1 class="text-center text-2xl font-bold">
            Hokify Test
          </h1>
          <h2 class="text-center text-l font-bold">
            actual store data
          </h2>
        </div>
        <form @submit.prevent="submit">
          <div class="input-container">
            <input
              id="firstName"
              v-model="user.firstName"
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
            <nuxt-link
              to="/"
              class="no-underline"
            ><button class="bg-blue-500 text-white font-bold py-2 px-4 my-5 rounded-full focus:outline-none focus:shadow-outline transition ease-in-out hover:bg-blue-700 duration-700 block">back</button></nuxt-link>
            <button class="bg-blue-500 text-white font-bold py-2 px-4 my-5 rounded-full focus:outline-none focus:shadow-outline transition ease-in-out hover:bg-blue-700 duration-700 block">clear store</button>
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

export default Vue.extend({
  name: 'ResetStore',
  transition: 'reset-store',

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
      return this.$store.getters.user
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

  async mounted(): Promise<void> {
    await this.storeState()
    /* this.$store.commit('updateUser', this.user) */
  },

  methods: {
    submit(): void {
      this.$store.commit('clearUser')
      this.user.firstName = this.$store.getters.firstName
      this.user.lastName = this.$store.getters.lastName
      this.user.email = this.$store.getters.email
    },

    storeState(): void {
      this.user.firstName = this.$store.getters.firstName
      this.user.lastName = this.$store.getters.lastName
      this.user.email = this.$store.getters.email
    },
  },
})
</script>
<style>
.reset-store-enter-active,
.reset-store-leave-active {
  transition: all 0.5s;
}
.reset-store-enter,
.reset-store-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
</style>



