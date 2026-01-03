import axios from "axios";
import useAuthStore from '../Store/AuthStore'

const Api_url = 'https://fullstack-project-tioo.onrender.com/api'

const api = axios.create({
  baseURL:Api_url,
  headers:{
    'Content-Type':'application/json'
  }
})

api.interceptors.request.use((config)=>{
   
     const token  = useAuthStore.getState().token;
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
})

export default api