import api from "create-api"
export function fetchData() {
  return new Promise((resolve, reject) => {
    api.get("https://api.moikrug.ru/v1/integrations/users/jonkofee?access_token=754225023d0b73fc0ee2e7cdacbf6af1ff1d8f9a31f5ee1991e24a703e5d9dc1")
      .then(resolve)
  })
}