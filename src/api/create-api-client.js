const axios = require('axios');
let api;

if (process.__API__) {
  api = process.__API__;
} else {
  api = {
    get(target, params = {}) {
      const suffix = Object.keys(params).map(name => {
        return `${name}=${JSON.stringify(params[name])}`;
      }).join('&');
      const urls = `${target}?${suffix}`;
      return new Promise((resolve, reject) => {
        axios.get(urls, params).then(res => {
          resolve(res.data);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    post(target, options = {}) {
      return new Promise((resolve, reject) => {
        axios.post(target, options).then(res => {
          resolve(res.data);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  };
}

module.exports = api;