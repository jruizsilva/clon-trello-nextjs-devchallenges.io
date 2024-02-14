'use client'
import { Popover } from '@headlessui/react'
import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import {
  MdAccountCircle,
  MdClose,
  MdDescription,
  MdMoreHoriz
} from 'react-icons/md'
import LabelWithIcon from './labelwithicon'
import BoardOwnerDetails from './boardownerdetails'

interface Props {}

export default function MenuBoard(props: Props): JSX.Element {
  return (
    <Popover className={''}>
      <Popover.Button
        as={Button}
        className='flex items-center gap-2 min-w-[117px] h-[32px] bg-[#f2f2f2] rounded-lg px-2 py-2 hover:bg-[#e2e2e2]'
        icon={
          <CustomIcon
            icon={MdMoreHoriz}
            fontSize={13}
            fill='#828282'
          />
        }
      >
        <span className='text-xs font-medium text-[#828282]'>
          Show Menu
        </span>
      </Popover.Button>
      <Popover.Panel className='absolute bg-white shadow-lg min-w-full sm:min-w-[377px] right-0 top-0 sm:top-[68px] p-5 z-50 h-screen'>
        {({ close }) => (
          <>
            <header className='flex justify-between pb-[5px] border-b border-[#E0E0E0]'>
              <h4 className='font-xs font-semibold text-[#333]'>
                Devchallenges Board
              </h4>
              <Button
                onClick={() => close()}
                icon={
                  <CustomIcon
                    icon={MdClose}
                    fontSize={24}
                    fill='#4f4f4f'
                  />
                }
              ></Button>
            </header>
            <div className='pt-2'>
              <LabelWithIcon
                icon={
                  <CustomIcon
                    icon={MdAccountCircle}
                    fill='#bdbdbd'
                    fontSize={12}
                  />
                }
                className='mb-3'
              >
                Made by
              </LabelWithIcon>
              <BoardOwnerDetails className='mb-6' />
              <div className='flex items-center gap-4'>
                <LabelWithIcon
                  icon={
                    <CustomIcon
                      icon={MdDescription}
                      fill='#bdbdbd'
                      fontSize={12}
                    />
                  }
                  className='mb-3'
                >
                  Description
                </LabelWithIcon>
              </div>
            </div>
          </>
        )}
      </Popover.Panel>
    </Popover>
  )
}
