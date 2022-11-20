import React from 'react'

function Login() {
  return (
    <>
    <div className='flex items-center justify-center mt-[100px]'>
      <div className='border-[1px] border-yellow-600 rounded w-[400px] h-[450px] flex flex-col items-center gap-[30px] p-4'>
        <h1 className="font-bold text-1xl text-[#FF6551] mt-[50px]">Login To Your Portal</h1>

        <div className='flex flex-col gap-[30px] items-center'>
          <div>
          <button className="bg-[#FF6551] text-white  w-[170px] shadow  rounded-sm">Google</button>
          </div>

          <div>----- or login with email ------</div>
          <form className='flex flex-col items-center gap-[20px]'>

            <div>
              <input type="email" placeholder='email' className='bg-[#F7F7F7] w-[350px] p-2 focus:outline-yellow-500'/>
            </div>

            <div>
              <input type="email" placeholder='email' className='bg-[#F7F7F7] w-[350px] p-2 focus:outline-yellow-500'/>
            </div>

            <div className='hidden md:block'>
        <button className="bg-[#FF6551] text-white p-1 shadow w-[350px] rounded-sm">Login</button>
        </div>

          </form>

        </div>
      </div>
      </div>
      
    </>
  )
}

export default Login