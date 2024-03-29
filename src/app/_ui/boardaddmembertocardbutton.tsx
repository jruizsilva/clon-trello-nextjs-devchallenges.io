'use client'
import { Popover } from '@headlessui/react'
import Button, { ButtonWithForwardRef } from '../../components/button'
import CustomIcon from '@/components/navbar/customicon'
import { MdAdd, MdSearch } from 'react-icons/md'
import { poppins } from '@/fonts/fonts'
import InputSearch from '@/components/inputsearch'
import SearchUserResult from './searchuserresult'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface Props {
  className?: string
  icon?: ReactNode
  children?: ReactNode
  top?: string
}

export default function BoardAddMemberToCardButton({
  className,
  icon,
  children,
  top = 'top-8'
}: Props): JSX.Element {
  return (
    <Popover className='relative '>
      <Popover.Button
        as={ButtonWithForwardRef}
        icon={icon}
        className={className}
      >
        {children}
      </Popover.Button>

      <Popover.Panel
        className={`absolute right-0 z-30 border border-[#E0E0E0] rounded-xl px-3 py-2 shadow-sm bg-white w-[245px] h-[315px] flex flex-col ${top}`}
      >
        <h5
          className={`text-[#4f4f4f] text-xs font-semibold ${poppins.className}`}
        >
          Members
        </h5>
        <p
          className={`text-[#828282] text-xs font-normal mb-2 ${poppins.className}`}
        >
          Assign members to this card
        </p>
        <InputSearch placeholder='User...' className='w-full mb-2' />
        <SearchUserResult />
        <Button
          className={`w-[74px] h-[30px] rounded-lg bg-[#2f80ed] text-[10px] text-white mx-auto mt-auto`}
        >
          Invite
        </Button>
      </Popover.Panel>
    </Popover>
  )
}
