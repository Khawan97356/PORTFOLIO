import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-8 border z-10 border-t-[#33353f] border-l-transparent border-r-transparent text-white'>
      <div className='container p-4 md:p-12 flex md:flex-row justify-between flex flex-col items-center gap-4 md:gap-0'>
        <div className='text-white text-2xl md:text-3xl font-black cursor-pointer'>Portfolio <span className='text-primary'></span></div>
      </div>
      <p className='text-slate-600 text-sm md:text-base'>All right reserved.</p>
    </footer>
  )
}

export default Footer