import axios from 'axios'

const BASE_URL = 'https://api.spacexdata.com/v4'

const spacexApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

export default spacexApi
