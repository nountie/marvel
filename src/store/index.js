import Vue from 'vue'
import Vuex from 'vuex'
import CharactersRepository from '@/utils/charactersRepository'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    charactersDetails: {},
    characterLatestComics: []
  },
  mutations: {
    SET_CHARACTERS_LIST(state, payload) {
      state.characters = payload.data.data.results;
    },
    SET_CHARACTER_DETAILS(state, {details, characterId}) {
      state.charactersDetails[characterId] = details.data.data.results[0];
    },
    SET_CHARACTER_LATEST_COMICS(state, {comics, characterId}) {
      state.characterLatestComics[characterId] = comics.data.data.results;
    }
  },
  actions: {
    async getCharactersList({commit}, {pageNumber, text}) {
      commit("SET_CHARACTERS_LIST", await CharactersRepository.get(pageNumber, text, 12));
    },
    async getCharacterDetails({commit}, characterId) {
      commit("SET_CHARACTER_DETAILS", {details: await CharactersRepository.getCharacter(characterId), characterId});
    },
    async getCharacterLatestComics({commit}, characterId) {
      commit("SET_CHARACTER_LATEST_COMICS", {comics: await CharactersRepository.getCharacterLatestComics(characterId), characterId});
    }
  }
});
