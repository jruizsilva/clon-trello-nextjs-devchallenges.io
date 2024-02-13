'use client'
import { Popover } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserGroup } from 'react-icons/fa6'
import { MdAccountCircle, MdLogout, MdMenu } from 'react-icons/md'
import Button from './button'
import MenuUser from './menuuser'
import { IoMdSettings } from 'react-icons/io'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <div className={`shadow`}>
      <div className='flex items-center h-[68px] mx-auto px-6 py-2'>
        {/* Logo */}
        <div className='flex justify-between items-center border-e-0 lg:border-e-[1px] border-[#e0e0e0] basis-full lg:basis-[374px] pe-6 gap-4'>
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
        {/* Add a responsive menu button for small screens */}
        <Popover className={'relative'}>
          <Popover.Button>
            <MdMenu fontSize={32} className='lg:hidden' />
          </Popover.Button>
          <Popover.Panel className='absolute right-[-24px] top-[58px] '>
            <div className='flex flex-col w-screen max-w-96 rounded-xl border shadow-md p-4 '>
              <div className='border-b flex flex-col mb-4'>
                <h1 className='text-lg font-medium text-nowrap mb-2'>
                  Devchallenges Board
                </h1>
                <ButtonSearch className='w-full' />
              </div>
              <div className='border-b flex flex-col'>
                <button className='h-[39px] text-xs mb-2 rounded-lg bg-[#f2f2f2] font-medium hover:bg-[#e2e2e2] p-3 flex items-center gap-2'>
                  <MdAccountCircle fontSize={'20px'} />
                  <span>Dashboard</span>
                </button>
                <button className='h-[39px] text-xs mb-2 rounded-lg font-medium hover:bg-[#e2e2e2] p-3 flex items-center gap-2'>
                  <FaUserGroup fontSize={'20px'} />
                  <span>All boards</span>
                </button>
                <button className='h-[39px] text-xs mb-2 rounded-lg font-medium hover:bg-[#e2e2e2] p-3 flex items-center gap-2'>
                  <IoMdSettings fontSize={'20px'} />
                  <span>Setting</span>
                </button>
              </div>
              <div className='pt-2'>
                <button className='h-[39px] text-xs mb-2 rounded-lg font-medium hover:bg-[#ffdbdb] p-3 flex items-center gap-2 w-full'>
                  <MdLogout fontSize={'20px'} fill='#EB5757' />
                  <span className='text-[#EB5757]'>Logout</span>
                </button>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
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
