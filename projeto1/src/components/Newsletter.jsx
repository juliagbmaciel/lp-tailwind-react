import React from 'react'

export default function Newsletter() {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 md:p-30'>
                    <h1 className='md:text-4xl sm:text-2xl text-1xl font-bold py-2'>Acompanhe de perto as novidades do tralala banking</h1>
                    <p>Assine nosso newsletter e fique por dentro das informações</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black ' type="email" placeholder='Entre com o seu email' />
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[300px] ml-4 my-6 px-6 py-3'>Me notifique</button>
                    </div>
                </div>
                <p>Nós nos preocupamos com os seus dados, leia nossa <span className='text-[#00df9a]'>Politica de Privacidade.</span></p>
            </div>
        </div>
    )
}