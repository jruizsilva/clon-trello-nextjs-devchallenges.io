import { Popover } from '@headlessui/react'
import { FaUserGroup } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { MdMenu, MdAccountCircle, MdLogout } from 'react-icons/md'
import InputSearch from './inputsearch'
import Button from '../button'
import CustomIcon from './customicon'

interface Props {}

export default function MenuMobile(props: Props): JSX.Element {
  return (
    <Popover className={'relative'}>
      <Popover.Button>
        <MdMenu fontSize={32} className='lg:hidden' />
      </Popover.Button>
      <Popover.Panel className='absolute right-[-24px] top-[58px] bg-white rounded-xl border shadow-md p-4 w-screen max-w-96'>
        <div className='flex flex-col'>
          <div className='border-b flex flex-col mb-4'>
            <h1 className='text-lg font-medium text-nowrap mb-2'>
              Devchallenges Board
            </h1>
            <InputSearch className='w-full' />
          </div>
          <div className='border-b flex flex-col'>
            <Button
              className='h-[39px] mb-2 rounded-lg bg-[#f2f2f2] hover:bg-[#e2e2e2] p-3 flex items-center gap-2'
              icon={
                <CustomIcon
                  icon={MdAccountCircle}
                  fontSize={20}
                  fill='#333'
                />
              }
            >
              <span className='text-xs font-medium'>Dashboard</span>
            </Button>
            <Button
              className='h-[39px] mb-2 rounded-lg hover:bg-[#e2e2e2] p-3 flex items-center gap-2'
              icon={
                <CustomIcon
                  icon={FaUserGroup}
                  fontSize={20}
                  fill='#333'
                />
              }
            >
              <span className='text-xs font-medium'>All boards</span>
            </Button>
            <Button
              className='h-[39px] mb-2 rounded-lg hover:bg-[#e2e2e2] p-3 flex items-center gap-2'
              icon={
                <CustomIcon
                  icon={IoMdSettings}
                  fontSize={20}
                  fill='#333'
                />
              }
            >
              <span className='text-xs font-medium'>Setting</span>
            </Button>
          </div>
          <div className='pt-2'>
            <Button
              className='h-[39px] mb-2 rounded-lg hover:bg-[#ffdbdb] p-3 flex items-center gap-2 w-full'
              icon={
                <CustomIcon
                  icon={MdLogout}
                  fontSize={20}
                  fill='#EB5757'
                />
              }
            >
              <span className='text-xs font-medium text-[#EB5757]'>
                Logout
              </span>
            </Button>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  )
}