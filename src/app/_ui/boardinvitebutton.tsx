'use client'
import { Popover } from '@headlessui/react'
import Button, { ButtonWithForwardRef } from '../../components/button'
import CustomIcon from '@/components/navbar/customicon'
import { MdAdd, MdSearch } from 'react-icons/md'
import { poppins } from '@/fonts/fonts'
import InputSearch from '@/components/inputsearch'
import SearchUserResult from './searchuserresult'

interface Props {}

export default function BoardInviteButton(props: Props): JSX.Element {
  return (
    <Popover className='relative'>
      <Popover.Button
        as={ButtonWithForwardRef}
        icon={<CustomIcon icon={MdAdd} fill='white' fontSize={24} />}
        className='w-[32px] h-[32px] rounded-lg bg-[#2f80ed] justify-center items-center gap-1 hidden sm:flex'
      ></Popover.Button>

      <Popover.Panel className='absolute left-0 top-[48px] border border-[#E0E0E0] rounded-xl px-3 py-2 shadow-sm bg-white w-[245px] h-[315px] flex flex-col'>
        <h5
          className={`text-[#4f4f4f] text-xs font-semibold ${poppins.className}`}
        >
          Invite to Board
        </h5>
        <p
          className={`text-[#828282] text-xs font-normal mb-2 ${poppins.className}`}
        >
          Search users you want to invite to
        </p>
        <InputSearch
          placeholder='User...'
          className='w-full mb-2'
          icon={MdSearch}
          btnClassName='w-[30px] h-[30px] flex items-center justify-center'
        />
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
