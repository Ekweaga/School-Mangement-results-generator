import React from 'react'
import Link from "next/link"

function Navbar() {
  return (
    <>
    <nav className=' h-[50px] flex md:justify-around items-center p-2 '>
        <div>
            <h1 className='font-bold text-1xl'>Scholax</h1>
        </div>
        <div>
            <ul className='md:flex gap-[20px] text-sm hidden'>
                <li>
                        Home
                </li>
                <li>
                        About Us
                </li>
                <li>
                    Testimony
                </li>

            </ul>
        </div>
        <div className='hidden md:block'>
        <button className="bg-[#FF6551] text-white p-2 shadow w-[100px] rounded-sm"><Link href="login">Login</Link></button>
        </div>

    </nav>
    </>
  )
}

export default Navbar