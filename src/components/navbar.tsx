'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Button from './button'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false)
  const { push } = useRouter()

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav)
  }

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' }
  ]

  return (
    <div className='shadow'>
      <div className='flex items-center h-[68px] mx-auto px-6 py-2'>
        {/* Logo */}
        <div className='flex justify-between items-center border-e-[1px] border-[#e0e0e0] basis-[374px] pe-6'>
          <Link href='/'>
            <Image
              src={'/logo.svg'}
              alt='logo trello clon'
              width={97}
              height={30}
            />
          </Link>

          <h1 className='text-lg font-medium'>Devchallenges Board</h1>
        </div>
        <div className='ps-6 flex justify-between items-center flex-1'>
          <Button />
          <ButtonSearch />

          {/* Desktop Navigation */}
          {/* <ul className='hidden md:flex'>
            {navItems.map((item) => (
              <li
                key={item.id}
                className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
              >
                {item.text}
              </li>
            ))}
          </ul> */}
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className='block md:hidden'
            role='button'
          >
            {nav ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            {/* Mobile Logo */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
              REACT.
            </h1>

            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const ButtonSearch = () => {
  return (
    <div className='w-[338px] h-[34px] relative '>
      <input
        type='text'
        className='py-2 ps-3 w-full h-[34px] text-[10px] shadow-md rounded-lg'
        placeholder='Keyword...'
      />
      <button className='absolute right-[2px] bottom-[2px] top-[2px] w-[74px] h-[30px] rounded-lg bg-[#2f80ed] text-[10px] text-white'>
        Search
      </button>
    </div>
  )
}

export default Navbar
