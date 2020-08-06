<template>
  <div
    class="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <logo></logo>
      <h2
        class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex w-full justify-center mb-2">
        <span
          v-show="error"
          class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-red-100 text-red-800 px-3 py-1"
        >
          {{ error }}
        </span>
      </div>

      <form
        class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10"
        @submit.prevent="login"
      >
        <label
          for="email"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Email address
        </label>
        <div class="mt-1 rounded-md shadow-sm">
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>

        <div class="mt-6">
          <label
            for="password"
            class="block text-sm font-medium leading-5 text-gray-700"
          >
            Password
          </label>
          <div class="mt-1 rounded-md shadow-sm">
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div class="flex items-center justify-between mt-6">
          <div class="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
            />
            <label
              for="remember_me"
              class="block ml-2 text-sm leading-5 text-gray-900"
            >
              Remember me
            </label>
          </div>
        </div>

        <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm">
            <button
              class="relative w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              <span class="w-full text-center">
                Sign in
              </span>
              <div class="absolute" style="right: 6px; top: 6px;">
                <spinner v-if="loading" />
              </div>
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nothing',

  data() {
    return {
      loading: false,
      error: '',
      form: {
        email: '',
        password: '',
      },
    }
  },

  mounted() {
    this.$axios.$get('/sanctum/csrf-cookie')
  },

  methods: {
    async login() {
      this.loading = true
      this.error = ''
      try {
        await this.$auth.loginWith('local', {
          data: this.form,
        })
      } catch (err) {
        this.error = err.response.data.message
        // do something with error
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
