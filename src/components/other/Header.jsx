// import React, { useState } from 'react'
// import { setLocalStorage } from '../../utils/localStorage'

// const Header = (props) => {

//   // const [username, setUsername] = useState('')

//   // if(!data){
//   //   setUsername('Admin')
//   // }else{
//   //   setUsername(data.firstName)
//   // }

//   const logOutUser = ()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
//     // window.location.reload()
//   }

//   return (
//     <div className='flex items-end justify-between'>
//         <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
//         <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
//     </div>
//   )
// }

// export default Header

import React from "react";

const Header = ({ changeUser, data }) => {
  // Log out the user by clearing the logged-in user data from localStorage
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", ""); // Clear the stored user data
    changeUser(null); // Reset the logged-in user state
  };

  return (
    <div>
      <div className="flex items-end justify-between ">
        {/* Display the firstName if data is available */}
        <h1 className="text-2xl font-medium">
          Hello <br />
          <span className="text-3xl font-semibold">
            {data ? data.firstName : "Siddharth"} 👋
          </span>
        </h1>

        {/* Log Out button */}
        <button
          onClick={logOutUser}
          className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
