import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const validNav = (nav) =>{
        if (nav){
            return 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#000300] ease-in-out duration-500'
        } 
        return 'fixed left-[-100%]'
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BANKING</h1>
        <ul className= 'hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose className='cursor-pointer'  size={20}/> : <AiOutlineMenu className='cursor-pointer' size={20}/> }          
        </div>
        <div className={validNav(nav)}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>BANKING</h1>
            <ul className='uppercase p-4'>
                <li className='texto'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar