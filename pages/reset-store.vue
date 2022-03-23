<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="w-full max-w-md">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
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
            >
            <label>First Name</label>
          </div>

          <div class="input-container">
            <input
              v-model="user.lastName"
              type="text"
              class="leading-6 p-2 mt-4"
            >
            <label>Last Name</label>
          </div>

          <div class="input-container">
            <input
              v-model="user.email"
              type="email"
              class="leading-6 p-2 mt-4"
            >
            <label>Email</label>
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

<script>
export default {
  name: 'HokifyTest',

  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
      },
    }
  },

  computed: {
    userData() {
      return this.$store.getters.user
    },
  },

  async mounted() {
    await this.storeState()
    /* this.$store.commit('updateUser', this.user) */
  },

  methods: {
    submit() {
      this.$store.commit('clearUser')
      localStorage.removeItem('user')
      this.user.firstName = this.$store.getters.firstName
      this.user.lastName = this.$store.getters.lastName
      this.user.email = this.$store.getters.email

    },

    storeState () {
      this.user.firstName = this.$store.getters.firstName
      this.user.lastName = this.$store.getters.lastName
      this.user.email = this.$store.getters.email

    }

    /*     updateStores() {
      this.$store.commit('updateUser', this.user)
    }, */
  },

}
</script>


