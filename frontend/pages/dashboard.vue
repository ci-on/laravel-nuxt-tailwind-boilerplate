<template>
  <main
    class="relative z-0 flex-1 overflow-y-auto focus:outline-none"
    tabindex="0"
  >
    <div class="pt-2 pb-6 md:py-6">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Dashboard',

  data() {
    return {
      loaded: false,
      data: [],
    }
  },

  layout: 'dashboard',
  // middleware: 'auth'
}
</script>

<style scoped></style>
