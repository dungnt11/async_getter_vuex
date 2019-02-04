const axios = require('axios')
export const getApi = cb => {
  cb({
    kq: axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-04&sortBy=publishedAt&apiKey=7ee5e494a5af464cad6e76183dfe57c7')
  })
}