import api from "create-api"
export function fetchData() {
  return new Promise((resolve, reject) => {
    api.get("https://api.moikrug.ru/v1/integrations/users/jonkofee?access_token=")
      .then(resolve)
  })
}
