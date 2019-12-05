<template>
  <div class="desc bg-gray-700 text-white p-6 rounded-lg min-h-500">
    <router-link :to="{name: 'list', params: {page: pageNumber}}"><div @click="closeInfo" class="absolute right-0 top-0 pt-2 pr-4 font-bold text-3xl text-white">x</div></router-link>
    <h2 class="text-5xl font-bold pb-5 position-center absolute" v-if="isLoading">Loading...</h2>
    <template v-else>
      <h2 class="text-2xl pb-5">{{character.name}}</h2>
      <p>{{ (character.description)? character.description : "no description" }}</p>
      <h2  class="text-2xl my-3">Latest Comics</h2>
      <ol v-if="characterComicsNumber !== 0" class="my-3">
        <li class="p-3 bg-gray-800 mb-1 rounded" v-for="(comic, index) in latestComics" :key="`desc${comic.title}`">{{index+1}}.<span class="pl-3">{{comic.title}}</span></li>
      </ol>
      <p v-else class="text-md my-3">No comics</p>
    </template>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  export default {
    props: {
      characterId: {
        type: Number
      },
      pageNumber: {
        required: true,
        type: Number
      }
    },
    name: "AppCharacterInfo",
    methods: {
      ...mapActions(['getCharacterDetails', 'getCharacterLatestComics']),
      closeInfo() {
        this.$emit('x-clicked');
      },
      async fetch() {
        this.isLoading = true;
        await this.getCharacterDetails(this.characterId);
        await this.getCharacterLatestComics(this.characterId);
        this.isLoading = false;
      }
    },
    data() {
      return {
        isLoading: true,
      }
    },
    computed: {
      ...mapState(['charactersDetails', 'characterLatestComics']),
      characterComicsNumber() {
        if(!this.isLoading) {
          return this.character.comics.items.length;
        } else return 0;
      },
      character() {
          return this.charactersDetails[this.characterId];
      },
      latestComics() {
        return this.characterLatestComics[this.characterId];
      }
    },
    created() {
       this.fetch();
    }
  }
</script>

<style scoped>

</style>
