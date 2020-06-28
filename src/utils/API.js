import axios from "axios";
import md5 from "md5";

const baseDomain = "https://gateway.marvel.com";
const baseURL = `${baseDomain}/v1/public`;

export default {
  $http: axios.create({
    baseURL,
    timeout: 5000
  }),
  setConfig: (params = {}) => ({
    params: {
      apikey: "d84cc49319ae6c1709fecc8f773cf3b1",
      ...params
    }
  }),
  getItems(url, config) {
    return new Promise((resolve, reject) => {
      const hash = md5(JSON.stringify({url, config}));
      if(this.cache.exist(hash) && !this.cache.isOutdated(hash)) {
        resolve(this.cache.get(hash));
      } else {
        this.$http(url, config)
          .then(response => {
            localStorage.setItem(hash, JSON.stringify({time: Date.now(), content: response}));
            resolve(response);
          })
          .catch(err => {
            console.error("API Request " + err);
            reject();
          });
      }
    });
  },
  cache: {
    CACHE_TIME: 600000, // 10 minutes
    get: url => JSON.parse(localStorage.getItem(url)).content,
    exist: url => localStorage.getItem(url) !== null,
    isOutdated(time) { return (((new Date).getTime() - time) > this.CACHE_TIME)}
  }
};




