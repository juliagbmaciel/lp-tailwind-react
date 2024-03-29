import React from 'react'
import Laptop from '../assets/img/laptop.jpg'

export default function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4'src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DASHBOARD DE ANALISE DE DADOS</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Administre os seus dados de maneira centralizada</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit animi consequatur sunt, asperiores eaque fugiat omnis ad ipsa impedit culpa maiores sit itaque voluptate dolores ut explicabo commodi aliquam?</p>
                    <button className=' bg-black text-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Começar</button>
                </div>
            </div>
        </div>
    )
}