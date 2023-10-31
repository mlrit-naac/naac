import React from 'react'
import Lay from '@/components/Lay'
import Nav from '@/components/Nav'
const page = () => {
  return (
    <div className='h-[200vh] bg-[#dcf3da]'>
      <header className='w-full h-[100px] flex flex-row  bg-white'>
        <img src="/mlrit.jpeg" alt="mlrit" className='h-[100px]'/>
        <div className='flex flex-row justify-center w-full'>
          <img src="https://mlritnaac.web.app/images/header_cut.png" alt="" />
        </div>
      </header>
      <Nav />
      <Lay />

    </div>
  )
}

export default page
