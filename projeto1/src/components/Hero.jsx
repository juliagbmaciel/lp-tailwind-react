import React from 'react'
import Typed from 'react-typed'

export default function Hero() {
  function botao(e){
    e.preventDefault();
    console.log('oi')
  }
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 uppercase'>O Internet Banking do futuro!!</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold m:py-6 '>O tal do tralala<br></br> Banking.</h1>
        <div className='flex justify-center items-center'>
          <p className='mt-5 md:text-4xl sm:text-2xl text-xl text-[#ccc] font-bold py-4'>Rápido, fácil e feito para</p>
          <Typed className='mt-5 md:text-4xl sm:text-2xl text-xl pl-2 text-[#ccc] font-bold' 
          strings={['você', 'eles', 'todos nós.']} 
          typeSpeed={100} 
          backSpeed={50} 
          loop/>
        </div>
        <p className='md:text-1xl sm:text-2xl text-xl font-bold text-gray-500 font-bold pl-10 pr-10'>Aqui nós crescemos o seu dinheiro em exponencialidade!</p>
        <button onClick={botao}className='bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Começar</button>
      </div>
    </div>
  )
}