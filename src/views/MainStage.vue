<template>
    <div class="py-5">
        <div class="container mx-auto relative">
            <transition name="slideup">
                <div v-if="!previewMode" class="absolute top-5">
                    <label class="ml-4 inline-block text-white" for="search">Search: </label>
                    <input id="search" class="ml-4 px-3 py-2 rounded" type="text" v-model="query">
                </div>
            </transition>
            <transition-group name="compress" tag="div" class="flex justify-start flex-wrap min-h-500">
                <AppCharacterCard
                  :class="{'previewImg': previewMode, 'preview': previewMode }"
                  :character="character"
                  :key="character.id"
                  :active="previewMode"
                  v-for="character in chosenCharacters"
                />
            </transition-group>
            <transition name="slide" tag="div">
                <AppCharacterInfo
                  v-if="id !== 0"
                  class="characterInfo"
                  :character-id="id"
                  :class="{'preview': previewMode }"
                  :page-number="previousPage"
                />
            </transition>
            <BasePagination v-if="!previewMode" :characters-on-page="chosenCharacters.length" :page-number="page"/>

        </div>

    </div>

</template>

<script>
  import AppCharacterCard from "@/components/AppCharacterCard";
  import AppCharacterInfo from "@/components/AppCharacterInfo";
  import BasePagination from "@/components/BasePagination";
  import {mapState, mapActions} from "vuex";
  import {debounce} from "@/utils/utils";

  export default {
    props: {
      id: {
        default: 0,
        type: Number
      },
      page: {
        default: 0,
        type: Number
      }
     },
    components: {BasePagination, AppCharacterInfo, AppCharacterCard},
    data() {
      return {
        isLoading: true,
        idToRemove: null,
        previewMode: false,
        charactersTransition: "compress",
        previousPage: 1,
        query: ""
      }
    },
    watch: {
      id(newId) {
        if(newId === 0) this.previewToggle();
        else this.previewToggle(newId);
      },
      page(newPage, oldPage) {
        this.previousPage = oldPage;
        if(newPage !== 0) {
          this.getPage(newPage, this.query);
        }
      },
      query() {
          this.filterCharacters();
      }
    },
    computed: {
      ...mapState(['characters']),
      chosenCharacters() {
        if(this.id !== 0) {
          return this.characters.filter(el => el.id === this.id);
        } else return this.characters;
      }
    },
    methods: {
      ...mapActions(['getCharactersList']),
      filterCharacters: debounce(function () {
          this.$router.push({name: "list", params: {page: 1}});
          this.getCharactersList({pageNumber: 1, text: this.query});
      }, 500),
      previewToggle(newId = null) {
        if(newId === null) this.previewMode = false;
        else this.previewMode = true;
      },
      async getPage(pageNumber, text = '') {
          this.isLoading = true;
          await this.getCharactersList({pageNumber, text});
          this.isLoading = false;
      }
    },
    created() {
      if(this.id !== 0) {
        this.previewToggle(this.id);
      } else this.getPage(this.page);
    }
  }
</script>
