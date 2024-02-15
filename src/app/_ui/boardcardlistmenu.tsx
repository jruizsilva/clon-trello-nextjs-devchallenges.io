'use client'
import { ButtonWithForwardRef } from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { Menu, Popover } from '@headlessui/react'
import { MdMoreHoriz } from 'react-icons/md'

interface Props {}

export default function BoardCardListMenu(props: Props): JSX.Element {
  return (
    <Popover className='relative'>
      <Popover.Button
        as={ButtonWithForwardRef}
        icon={
          <CustomIcon
            icon={MdMoreHoriz}
            fontSize={20}
            fill='#828282'
          />
        }
      ></Popover.Button>

      <Popover.Panel className='absolute right-0 w-[151px] h-[80px] bg-white border shadow-md px-3 pt-[14px] pb-[18px] flex flex-col rounded-xl'>
        <span className='mb-3 text-[#828282] font-medium text-[10px]  hover:cursor-pointer hover:underline'>
          Rename
        </span>
        <span className='border-b'></span>
        <span className='mt-[10px] text-[#828282] font-medium text-[10px] hover:cursor-pointer hover:underline'>
          Delete this list
        </span>
      </Popover.Panel>
    </Popover>
  )
}
