import axios from "axios";

const Api_url = 'http://localhost:5000/api'

const api = axios.create({
  baseURL:Api_url,
  headers:{
    'Content-Type':'application/json'
  }
})


export default api