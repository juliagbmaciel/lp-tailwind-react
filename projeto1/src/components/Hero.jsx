import React from 'react'
import Typed from 'react-typed'

export default function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 uppercase'>O Internet Banking do futuro!!</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold m:py-6 '>O tal do tralala<br></br> Banking.</h1>
        <div className='flex justify-center items-center'>
          <p className='mt-5 md:text-3xl sm:text-2xl text-xl'>Rápido, fácil e feito para</p>
          <Typed className='mt-5 md:text-3xl sm:text-2xl text-xl pl-2' strings={['você', 'eles', 'todos nós.']} typeSpeed={128} backSpeed={140} loop/>
        </div>
      </div>
    </div>
  )
}