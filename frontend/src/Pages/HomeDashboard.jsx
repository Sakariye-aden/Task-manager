import { useState } from 'react'
import api from '../lib/Api/ApiClient'
import { useQuery } from '@tanstack/react-query'
import useAuthstore from '../lib/Store/AuthStore'



const HomeDashboard = () => {
      const { user } = useAuthstore()
     const [result , setResult ] = useState([])
  
      const {data , error, isLoading } = useQuery({
        queryKey: ['trans'],
        queryFn : async () => {
           const response = await api.get('/transactions');
            console.log('response trans :', response);
 
            return response.data
         }
      })
    


  return (
    <div className='bg-card h-min-screen p-4'>
       <h1>Hello, {user.name} 👏</h1> 
    </div>
  )
}

export default HomeDashboard