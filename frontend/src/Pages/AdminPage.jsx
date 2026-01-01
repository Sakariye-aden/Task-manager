import React from 'react'

import { ArrowRightLeft, User } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import api from '../lib/Api/ApiClient'








 const AdminPage = () => {



        const { data , error , isLoading } = useQuery({
           queryKey : ['adminKey'],
           queryFn : async () => {
              const response = await api.get('/admin/overview');
             
              return response.data
           }
        })



   









  return (




    <div className="bg-card h-min-screen p-6 ">
        <h1 className="text-2xl font-medium py-2">Welcome to Admin Dashboard</h1>   
        <p>Manage users, monitor system activity, and control financial data across the platform</p>
      
      {/* Admin Summary cards */}
         <h3 className='text-xl font-medium py-4 my-3 '>Admin Summary Cards</h3>
        <div className='my-3 grid grid-cols-2 md:grid-cols-4 gap-6 '>
            
            <div className='w-full flex justify-between bg-background rounded-md shadow-md p-6'>
              <div className='flex flex-col'>
                 <span>Total User</span>
                 <span className='font-bold text-xl'>{data?.totalUsers}</span>
              </div>
               <User />
            </div>
            <div className='w-full flex justify-between bg-background rounded-md shadow-md p-6'>
              <div className='flex flex-col'>
                 <span>Total Transaction</span>
                 <span className='font-bold text-xl'>{data?.totalTransactions}</span>
              </div>
                <ArrowRightLeft />
            </div>
            <div className='w-full flex justify-between bg-background rounded-md shadow-md p-6'>
              <div className='flex flex-col'>
                 <span>Total Income</span>
                 <span className='font-bold text-xl'>{data?.totalIncome}</span>
              </div>
                <span className='text-2xl'>📈</span>
            </div>
            <div className='w-full flex justify-between bg-background rounded-md shadow-md p-6'>
              <div className='flex flex-col'>
                 <span>Total Expense</span>
                 <span className='font-bold text-xl'>{data?.totalExpense}</span>
              </div>
                <span className='text-2xl' >📉</span>
            </div>
        </div>
      {/* User Management  */}

      {/* cateGory management */}

      {/* Transaction monitoring */}
    </div>
  )
}

export default AdminPage