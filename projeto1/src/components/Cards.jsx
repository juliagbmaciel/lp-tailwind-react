import React from 'react'
import Single from '../assets/img/single.png'
import Double from '../assets/img/double.png'
import Triple from '../assets/img/triple.png'

function Cards() {
    return (
        <div className='w-full  py[10rem] px-4  bg-white'>
            <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl x mt-[200px] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Pessoa física</h2>
                    <p className='text-center text 4xl font-bold'>R$30,00</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Tal benefício</p>
                        <p className='py-2 border-b mx-8'>Tal benefício</p>
                        <p className='py-2 border-b mx-8'>Tal benefício</p>
                    </div>
                    <button className='bg-[#00df9a] m-auto text-black w-fit rounded-md font-medium  my-6 px-6 py-3'>Começar teste</button>

                </div>
                <div className='w-full shadow-xl x mt-[200px] flex flex-col p-4 md:my-30 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Pessoa jurídica</h2>
                    <p className='text-center text 4xl font-bold'>R$30,00</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Tal benefício</p>
                        <p className='py-2 border-b mx-8'>Tal benefício</p>
                        <p className='py-2 border-b mx-8'>Tal benefício</p>
                    </div>
                    <button className='bg-black m-auto text-[#00df9a] w-fit rounded-md font-medium  my-6 px-6 py-3'>Começar teste</button>

                </div>
                <div className='w-full shadow-xl x mt-[200px] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Pessoa normal</h2>
                    <p className='text-center text 4xl font-bold'>R$30,00</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Tal benefício</p>
                        <p className='py-2 border-b mx-8'>Tal benefício</p>
                        <p className='py-2 border-b mx-8'>Tal benefício</p>
                    </div>
                    <button className='bg-[#00df9a] m-auto text-black w-fit rounded-md font-medium  my-6 px-6 py-3'>Começar teste</button>

                </div>
            </div>
        </div>
    )
}

export default Cards