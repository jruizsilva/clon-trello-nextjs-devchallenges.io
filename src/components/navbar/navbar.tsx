'use client'
import { Popover } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserGroup } from 'react-icons/fa6'
import { MdAccountCircle, MdLogout, MdMenu } from 'react-icons/md'
import Button from '../button'
import MenuUser from './menuuser'
import { IoMdSettings } from 'react-icons/io'
import { MdApps } from 'react-icons/md'
import CustomIcon from './customicon'
import MenuMobile from './menumobile'
import ButtonSearch from './buttonsearch'

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
          <Button
            icon={
              <CustomIcon
                icon={MdApps}
                fontSize={12}
                fill='#828282'
              />
            }
            className='flex items-center gap-2 min-w-[108px] h-[32px] bg-[#f2f2f2] rounded-lg px-4 py-2 hover:bg-[#e2e2e2]'
          >
            <span className='text-xs font-medium text-[#828282]'>
              All board
            </span>
          </Button>
          <ButtonSearch className='ms-auto' />
          <MenuUser />
        </div>
        <MenuMobile />
      </div>
    </div>
  )
}

export default Navbar
