import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import api from '../../lib/Api/ApiClient';
import { getCategoryIcon } from '../../Pages/TransactionPage';
import { Loader } from 'lucide-react';


// Format date as "Month Day" (e.g., Jan 1, Aug 10)
function formatMonthDay(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",  // "Jan", "Feb", "Mar"...
    day: "numeric"   // 1, 2, 3...
  });
}




const AdminTransaction = ({ User }) => {

     const [page, setPage] = useState(1);
   
      const queryClient = useQueryClient()


     const { data , error , isLoading } = useQuery({
           queryKey : ['ALLTrans',page ],
           queryFn : async () => {
              const response = await api.get(`/admin/more?page=${page}$limit=5`);
             
              return response.data
           },
           keepPreviousData: true,
        })

        // Pagination
         const PrevPage = ()=>{
            setPage(page - 1)
         }
         const NextPage = ()=>{
           setPage(page + 1)    
         }
   
         

        
     if(isLoading){
       return (
          <div className='h-screen flex justify-center items-center'>
             <Loader className='animate-spin text-3xl' />
          </div>
       )
     }
   
        // Extract Data 
     const { MoreTransaction , totalPages } = data 
       
      
      





  return (
    <div>
      <table className="min-w-full border border-gray-200 rounded-lg shadow-md ">
        <thead className="bg-gray-100 text-gray-700 sticky top-0 ">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold">User</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Type</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Category
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Amount
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Date</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {MoreTransaction?.map((item, index) => {
            // Find the user who created this transaction
            const createdUser = User?.find((u) => u._id === item.createdBy);

            return (
              <tr
                key={index}
                className="hover:bg-chart-1 transition-colors duration-200"
              >
                <td className="px-4 py-2">
                  {createdUser ? createdUser.name : "Unknown User"}
                </td>

                <td className="px-4 py-2">{item.type}</td>
                <td className="px-2 py-2">{getCategoryIcon(item.category)}</td>
                <td className="px-4 py-2">{item.amount}</td>
                <td className="px-2 py-2">{formatMonthDay(item.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='flex justify-between my-4 '>
        <span className='text-md font-medium'>
          {" "}
          Page {page} of {totalPages}{" "}
        </span>
        <div>
          <button disabled={page === 1}
            onClick={() => PrevPage()}
            className='bg-chart-3 text-white mx-4 px-4 py-2 rounded-md cursor-pointer'
          >
            Previous
          </button>

          <button disabled={page === totalPages} 
           onClick={() => NextPage()} 
           className='bg-chart-3 text-white px-4 py-2 rounded-md cursor-pointer'
           >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminTransaction