import React, { useEffect, useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
function AdminLogin() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [admin, setAdmin] = useState('')
  const [isSignInForm, setIsSignInForm] = useState(true);

  // console.log(email);
  // console.log(password);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    let data = await fetch('http://localhost:8000/Admin');
    let json = await data.json();
    setAdmin(json);
  }
  // console.log(admin);
  
  const isLogin = () => {
    let login = admin.filter((x) => {
      return (x.email == email, x.password == password)
    })
    if(login.length > 0){
      alert('Login Successfully...');
    }
    else{
      alert('Something went wrong...');
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[url("https://wallpapercave.com/wp/wp2939910.jpg")] bg-no-repeat bg-cover bg-center'>
      <form onSubmit={(e) => e.preventDefault()} className="p-12 sm:w-1/2 md:w-3/12 h-[500px] text-white bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl py-4 mr-auto">Admin { isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Enter You Name..." className="px-3 py-2 m-2 w-full bg-gray-600 placeholder:font-semibold" required />}
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Enter Your Email..." className="px-3 py-2 my-3 w-full bg-gray-600 placeholder:font-semibold" required />
        {!showPassword ? <VscEye className={isSignInForm ? "relative top-10 left-[120px] text-xl cursor-pointer" : "absolute top-[355px] ml-[230px] text-xl cursor-pointer" } onClick={handleShowPassword} /> : <VscEyeClosed className={isSignInForm ? "relative top-10 left-[120px] text-xl cursor-pointer" : "absolute top-[355px] ml-[230px] text-xl cursor-pointer" } onClick={handleShowPassword} /> }
        <input type={!showPassword ? "password" : "text"} onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Enter Password..." className="px-3 py-2 my-3 w-full bg-gray-600 placeholder:font-semibold" required />
        <button className="p-3 my-6 bg-red-600 rounded-lg w-full font-semibold text-xl" onClick={isLogin}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-4 mr-auto text-lg text-gray-400 font-semibold" >{isSignInForm ? "New to Netflix?" : "Already Registred" } <span onClick={toggleSignUpForm} className="text-white cursor-pointer hover:underline font-bold"> { isSignInForm ? "Sign Up Now" : "Sign In Now" }</span></p>
      </form>
    </div>
  )
}

export default AdminLogin
