const axios = require('axios');
let api;

if (process.__API__) {
  api = process.__API__;
} else {
  api = {
    get(target, options = {}) {
      return new Promise((resolve, reject) => {
        axios.request({
          url: target,
          method: 'get',
          params: options
        }).then(res => {
          resolve(res.data);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    post(target, options = {}) {
      return new Promise((resolve, reject) => {
        axios.request({
          url: target,
          method: 'post',
          params: options
        }).then(res => {
          resolve(res.data);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  };
}

module.exports = api;