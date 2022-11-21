import React,{useState} from 'react'
import Image from "next/image"
import {signInWithEmailAndPassword} from 'firebase/auth';
import {getAuth} from  "firebase/auth";
import {firebaseapp} from "./components/firebase"
import Link from "next/link"
import {useRouter} from "next/router"

function Login() {
  const [error,setError] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [success,setSuccess] = useState('')
  const router = useRouter();
  const auth = getAuth(firebaseapp);


  const  login = async (e:any)=>{
    e.preventDefault();
    //setLoading(true)

    if(email === "" || password === "" ){
      setError("Fields are empty")
      //setLoading(false)
    }

   else{
    try{
      await signInWithEmailAndPassword(auth,email,password)
    // setLoading(false)
     router.push("melodax");
     setSuccess("Welcome to Melodax")
     
   }
   catch(err:any){
     console.log(err)
     setError(err.message)
   }

   }
   
   
  

  }
  return (
    <>
    <div className='flex items-center justify-center mt-[100px]'>
      <div className='border-[1px] border-yellow-600 rounded w-[400px] h-[450px] flex flex-col items-center gap-[30px] p-4'>
        <h1 className="font-bold text-1xl text-[#FF6551] mt-[50px]">Login To Your Portal</h1>

        <div className='flex flex-col gap-[30px] items-center'>
          <div className='cursor-pointer'>
          <Image src="/Google Login.png" width={150} height={50} alt="icon"/>
          </div>

          <div>----- or login with email ------</div>
          <form className='flex flex-col items-center gap-[20px]' onSubmit={login}>

            <div>
              <input type="email" placeholder='email' className='bg-[#F7F7F7] w-[350px] p-2 focus:outline-yellow-500'/>
            </div>

            <div>
              <input type="email" placeholder='email' className='bg-[#F7F7F7] w-[350px] p-2 focus:outline-yellow-500'/>
            </div>

            <div className='hidden md:block'>
        <button className="bg-[#FF6551] text-white p-1 shadow w-[350px] rounded-sm">Login</button>
        </div>
        <div>
  <p className='text-sm'>Sure you have an account<span className='text-red-600 cursor-pointer font-bold'><Link href="signup">Sign Up</Link></span></p>
</div>
          </form>

        </div>
      </div>
      </div>
      
    </>
  )
}

export default Login
