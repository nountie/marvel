<template>
  <div class="p-4 animate w-1/6 character">
    <router-link class="" :to="{name: 'characterDetails', params: {id: character.id}}">
    <div class="character-inner">
      <div class="rounded shadow-xl bg-gray-800">
        <div :style="{backgroundImage: `url(${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension})`}"
             class="avatar rounded-tr rounded-tl w-full bg-cover bg-center h-40"
             :class="{'h-68': active}"
        >
        </div>
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
        name: "AppCharacterCard",
        props: {
          character: {
            required: true,
            type: Object
          },
          active: {
            type: Boolean
          }
        },
    }
</script>

<style scoped>
  .avatar {
    transition: all 0.3s ease-in-out;
  }
</style>
