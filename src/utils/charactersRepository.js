import API from "@/utils/API";

const resource = "characters";

export default {
  get(page = 1, text = '', number = 12) {
    if(text) return API.getItems(`${resource}`, API.setConfig({limit: number, offset: (page-1)*number, nameStartsWith: text}));
    return API.getItems(`${resource}`, API.setConfig({limit: number, offset: (page-1)*number}));
  },
  getCharacter(characterId) {
    return API.getItems(`${resource}/${characterId}`, API.setConfig());
  },
  getCharacterLatestComics(characterId) {
    return API.getItems(`${resource}/${characterId}/comics`, API.setConfig({limit: 6, orderBy: '-onsaleDate'}));
  }
}
