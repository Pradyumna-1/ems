// import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const AllTask = () => {

//    const [userData,setUserData] =  useContext(AuthContext)

   
//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
//         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
//             <h3 className='text-lg font-medium w-1/5'>New Task</h3>
//             <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
//             <h5 className='text-lg font-medium w-1/5'>Completed</h5>
//             <h5 className='text-lg font-medium w-1/5'>Failed</h5>
//         </div>
//         <div className=''>
//         {userData.map(function(elem,idx){
//             return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium  w-1/5'>{elem.firstName}</h2>
//             <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
//             <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
//         </div>
//         })}
//         </div>
        
        
//     </div>
//   )
// }

// export default AllTask
import React, { useContext } from 'react'
// import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    const [userData] = useContext(AuthContext)

    return (
        <div className='bg-[#1e1e1e] rounded-xl shadow-md shadow-black/10 p-6 mt-6'>
            <h2 className='text-xl font-bold text-gray-100 mb-6'>Task Overview</h2>
            <div className='bg-black mb-4 py-3 px-6 flex justify-between rounded-lg'>
                <h2 className='w-1/5 font-semibold text-gray-300'>Employee Name</h2>
                <h3 className='w-1/5 font-semibold text-center text-gray-300'>New Task</h3>
                <h5 className='w-1/5 font-semibold text-center text-gray-300'>Active Task</h5>
                <h5 className='w-1/5 font-semibold text-center text-gray-300'>Completed</h5>
                <h5 className='w-1/5 font-semibold text-center text-gray-300'>Failed</h5>
            </div>
            <div className='overflow-auto max-h-[300px]'>
                {userData.map((element) => (
                    <div
                        key={element.id}
                        className='bg-[#1e1e1e] border border-gray-800 hover:bg-[#222222] mb-2 py-3 px-6 flex justify-between rounded-lg transition-all duration-200'>
                        <h2 className='w-1/5  text-gray-100'>{element.firstName}</h2>
                        <h3 className='w-1/5 text-center text-gray-300'>{element.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-center text-gray-300'>{element.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-center text-gray-300'>{element.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-center text-gray-300'>{element.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask



