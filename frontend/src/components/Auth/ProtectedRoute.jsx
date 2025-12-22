import React, { useEffect } from 'react'
import useAuthstore from '../../lib/Store/AuthStore'
import { useQuery } from '@tanstack/react-query'
import api from '../../lib/Api/ApiClient'
import { Navigate, useLocation } from 'react-router'
import { Loader } from 'lucide-react'

const ProtectedRoute = ({ children }) => {

    const location = useLocation()
  
    const { user , token , setAuth, clearAuth } = useAuthstore()
     
      const { data, error, isError ,isLoading, isSuccess } = useQuery({
          queryKey: ['Auth'],
          queryFn: async () => {
             const response = await api.get('/auth/me')
              console.log('errror', response);
             if(!response.ok) {
                throw new Error('error happaned')
             }
              
             return response.data
          },
    
       })

    //    error case 
     useEffect(()=>{
          if(isError){
            clearAuth()
          }
     },[isError, error, clearAuth])

    //    success case 
     useEffect(()=>{
          if(isSuccess){
            setAuth(data , token)
          }
     },[isSuccess, data , setAuth, token])
    
      if(isLoading){
         return (
             <div className='h-screen flex justify-center items-center'>
               <Loader />
            </div>
         )  
      }

       if(error){
          return <Navigate to='/login' state={{from : location }} replace/>
       }

       if(!user){
          return <Navigate to='/login' state={{from : location }} replace/>
       }
      
     return children
}

export default ProtectedRoute