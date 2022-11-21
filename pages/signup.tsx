import React from 'react'
import Head from "next/head"
import {useState} from "react"
import {createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {firebaseapp} from "./components/firebase"
import {getFirestore} from "firebase/firestore"
import {getAuth} from  "firebase/auth";
import {setDoc,doc} from "firebase/firestore"
import {useRouter} from "next/router"
import Image from "next/image"
import Link from "next/link"

function Signup() {
    const [error,setError] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState('')
    const [name,setName] = useState('')
    const router = useRouter();
    const provider = new GoogleAuthProvider();
    const projectfirestore = getFirestore(firebaseapp)
    const auth = getAuth(firebaseapp)


     const signUpGoogle = async ()=>{
      await signInWithPopup(auth,provider).then((result)=>{
        router.push("/")
      }).catch((err)=>{
        setError(err.message)
      })
    }
    const  signupUser = async (e:any)=>{
      e.preventDefault();
     // setLoading(true)
  
      if(email === "" || password === "" || name === ""){
        setError("Fields are empty")
      
    
        //setLoading(false)
      }
      else if(password.length < 6){
        setError("Password characters must be greater than 6")
       // setLoading(false)
      }
     else{
      try{
         // setLoading(true)
        await createUserWithEmailAndPassword(auth,email,password).then((response)=>{
          console.log(response.user.refreshToken)
        //  localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
        console.log(response)
     setDoc(
          doc(projectfirestore, "Students",response.user.uid),{
          Password:password,
            Email:email,
            id:response.user.uid
          });
          
        });
      setDoc(doc(projectfirestore,'OneStudent', `${email}`),{
        saveShows:[]
       })
      
     //  setLoading(false)
       setSuccess("Your Account is created successfully")
          setEmail('')
          setPassword('')
       setTimeout(()=>{
       router.push('login')
       },1000)
     }
     catch(err:any){
     setError(err.message)
     console.log(err)
    // setLoading(false)
     }
     }
  
  }
  return (
    <>
    <Head>
        <title>
            Create Account
        </title>
     


    </Head>
    <div className='flex items-center justify-center mt-[100px]'>
    <div className='border-[1px] border-yellow-600 rounded md:w-[400px] h-[450px] flex flex-col items-center gap-[30px] p-4'>
      <h1 className="font-bold text-1xl text-[#FF6551] mt-[50px]">Create an Account</h1>

      <div className='flex flex-col gap-[30px] items-center'>
        
      <div onClick={signUpGoogle} className="cursor-pointer">
        <Image src="/Google Login.png" width={150} height={50} alt="icon"/>
                  </div>

          <div>----- or Sign up with email ------</div>
      
        <form className='flex flex-col items-center gap-[20px]' onSubmit={signupUser}>




          <div>
            <input type="email" placeholder='email' className='bg-[#F7F7F7] md:w-[350px] w-[300px] p-2 focus:outline-yellow-500' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div>
            <input type="email" placeholder='password' className='bg-[#F7F7F7] md:w-[350px] w-[300px] p-2 focus:outline-yellow-500' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <div className=' md:block'>
      <button className="bg-[#FF6551] text-white p-1 shadow md:w-[350px] w-[300px] rounded">Submit</button>
      </div>
<div>
  <p className='text-sm'>Already have an account?<span className='text-red-600 cursor-pointer font-bold'><Link href="login">Login to your portal</Link></span></p>
</div>

        </form>

      </div>
    </div>
    </div>
    </>
  )
}

export default Signup