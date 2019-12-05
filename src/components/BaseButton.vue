<template>
  <button class="my-3 mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "BaseButton"
  }
</script>

<style scoped>

</style>
