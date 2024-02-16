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

      <Popover.Panel className='absolute right-0 w-[151px] h-[80px] bg-white border shadow-md p-3 rounded-xl'>
        <button className='mb-2 text-[#828282] font-medium text-[10px] hover:underline'>
          Rename
        </button>
        <span className='block border-b'></span>
        <button className='mt-2 text-[#828282] font-medium text-[10px] hover:underline'>
          Delete this list
        </button>
      </Popover.Panel>
    </Popover>
  )
}
