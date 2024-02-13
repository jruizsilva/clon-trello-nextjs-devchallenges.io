import { Popover } from '@headlessui/react'
import Image from 'next/image'
import { FaUserGroup } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import {
  MdAccountCircle,
  MdArrowDropDown,
  MdLogout
} from 'react-icons/md'

interface MenuUserProps {
  className?: string
}

const MenuUser = ({ className }: MenuUserProps) => {
  return (
    <Popover className={`relative ${className}`}>
      <Popover.Button
        className={`h-8 flex items-center gap-3 rounded-md`}
      >
        <Image
          src='https://i.pravatar.cc/32?img=3'
          alt='user avatar'
          className='rounded-md'
          width={32}
          height={32}
        />
        <span className='font-bold text-xs text-nowrap max-w-[10ch] overflow-hidden text-ellipsis'>
          Xanthe Ndadasdsasaeadsadsasdadassl
        </span>
        <MdArrowDropDown />
      </Popover.Button>

      <Popover.Panel className='absolute right-0 top-[58px]'>
        <div className='flex flex-col w-[192px] rounded-xl border shadow-md p-4'>
          <div className='border-b flex flex-col'>
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
  )
}

export default MenuUser
