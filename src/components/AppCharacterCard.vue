<template>
  <div class="p-4 animate w-1/6 character">
    <router-link class="block" :to="{name: 'characterDetails', params: {id: character.id}}">
    <div class="character-inner">
      <div class="rounded shadow-xl bg-gray-800">
        <img class="rounded-tr rounded-tl w-full"
             :src="`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`"
             alt="">
        <h3 class="text-md text-white leading-tight p-4">
          {{character.name}}
        </h3>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        props: {
          character: {
            required: true,
            type: Object
          }
        },
        name: "AppCharacterCard"
    }
</script>

<style scoped>

</style>
