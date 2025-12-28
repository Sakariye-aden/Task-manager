import React from 'react'
import {Button} from'@/components/ui/button'









 const TransactionPage = () => {







  return (


    <div className='bg-card h-screen p-6 '>
       <h1 className='text-2xl font-medium py-2'>Transactions</h1>
        <div className='flex justify-between items-center my-2'>
          <p className='font-medium'>View and Manage all your income and expense you've added to your account</p>
           <Button className='cursor-pointer'>
             Add Transaction
           </Button>
         </div> 

       {/* summary card  */}
        <div className='flex space-x-3 md:space-x-6 p-3  md:p-6'>
          <div className='bg-blue-500 w-full p-2 flex flex-col  rounded-md shadow-xl'>  
             <span className='font-medium text-lg'>Transactions</span> 
             <span>{30}</span>
          </div>   
          <div className='bg-green-500 w-full p-2 flex flex-col rounded-md shadow-xl'>  
             <span className='font-medium text-lg'>Income</span> 
             <span>{30}</span>
          </div>   
          <div className='bg-red-500 w-full p-2 flex flex-col  rounded-md shadow-xl'>  
             <span className='font-medium text-lg'>Expense</span> 
             <span>{30}</span>
          </div>   
        </div>

        {/* Transaction Table  */}
         <div>
            <h2 className='text-xl font-medium py-2'>Recent Transaction History </h2>
            
         </div>
    </div>
  )
}

export default TransactionPage