import React from 'react'

function Footer() {
  return (
   <>
   <footer className="bg-[#33333D] md:h-[400px]  text-white flex md:justify-center py-3">
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-[150px] mt-[100px] gap-[50px] px-2">
        <div>
            <h2 className='font-bold mb-[30px]'>Scholax</h2>
            <ul className='text-sm flex flex-col gap-[20px]'>
                <li>About</li>
                <li>Policy</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
            </ul>
        </div>
        <div>
        <h2 className='font-bold mb-[30px]'>Community</h2>
            <ul className='text-sm flex flex-col gap-[20px]'>
                <li>About</li>
                <li>Policy</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Classes</li>
                <li>Scholarship</li>
            </ul>
        </div>
        <div>
        <h2 className='font-bold mb-[30px]'>Teaching</h2>
            <ul className='text-sm flex flex-col gap-[20px]'>
                <li>Become a</li>
                <li>Teaching</li>
                <li>Academy</li>
                <li>Teacher</li>
                <li>Handbook</li>
                <li>Teaching</li>
            </ul>
        </div>
        <div>
        <h2 className='font-bold mb-[30px]'>Support</h2>
            <ul className='text-sm flex flex-col gap-[20px]'>
                <li>Support</li>
                <li>Contact Us</li>
                <li>Requirements</li>
                <li>Registration</li>
                <li>Site Feedback</li>
                <li>Key</li>
            </ul>
        </div>
    </div>

   </footer>
   </>
  )
}

export default Footer
