<template>
  <div>
    <div
      class="w-6 h-6 ease-linear border-2 border-t-2 border-gray-200 rounded-full loader"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
}
</script>

<style scoped>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
