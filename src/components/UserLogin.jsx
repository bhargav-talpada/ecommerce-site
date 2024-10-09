import React, { useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  console.log(username);
  console.log(password);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  
  const isLogin = () => {
    if (username==='user' && password==='1234') {
      alert('Login Successfully...');
    }
    else{
      alert('Something went wrong...');
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form onSubmit={(e) => e.preventDefault()} className="p-12 sm:w-1/2 md:w-3/12 h-[500px] text-white bg-black bg-opacity-80 rounded-lg flex flex-col justify-center items-center ">
        <h1 className="font-bold text-3xl py-4 mr-auto">User Login</h1>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="Enter Your Email..." className="px-3 py-2 my-3 w-full bg-gray-600 " required />
        <div> {!showPassword ? <VscEye className="relative top-11 left-[120px] text-xl cursor-pointer" onClick={handleShowPassword} /> : <VscEyeClosed className="relative top-11 left-[120px] text-xl cursor-pointer" onClick={handleShowPassword} /> } </div>
        <input type={!showPassword ? "password" : "text"} onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Enter Password..." className="px-3 py-2 my-3 w-full bg-gray-600 " required />
        <button className="p-3 my-6 bg-red-600 rounded-lg w-full" onClick={isLogin}>Sign In</button>
      </form>
    </div>
  )
}

export default UserLogin