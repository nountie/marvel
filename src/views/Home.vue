<template>
  <div class="container mx-auto justify-center flex h-56 items-end">
    <router-link :to="{name: 'list', params: {page: 1}}" tag="button" class="my-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Show the list!
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
