'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import MenuUser from './menuuser'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <div className={`shadow`}>
      <div className='flex items-center h-[68px] mx-auto px-6 py-2'>
        {/* Logo */}
        <div className='flex justify-between items-center border-e-0 lg:border-e-[1px] border-[#e0e0e0] basis-[374px] pe-6 gap-4'>
          <Link href='/'>
            <Image
              src={'/logo.svg'}
              alt='logo trello clon'
              width={97}
              height={30}
            />
          </Link>

          <h1 className='text-lg font-medium hidden lg:block text-nowrap'>
            Devchallenges Board
          </h1>
        </div>
        <div className='ps-6 hidden lg:flex items-center flex-1 gap-11'>
          <Button />
          <ButtonSearch className='ms-auto' />
          <MenuUser />
        </div>
      </div>
    </div>
  )
}

const ButtonSearch = ({ className }: { className?: string }) => {
  return (
    <div className={`w-[338px] h-[34px] relative ${className}`}>
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
