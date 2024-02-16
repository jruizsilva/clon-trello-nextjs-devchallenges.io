'use client'
import { notoSans } from '@/fonts/fonts'
import { Popover } from '@headlessui/react'
import { IoMdLock } from 'react-icons/io'
import { MdLock, MdPublic } from 'react-icons/md'
import Button, { ButtonWithForwardRef } from './button'
import CustomIcon from './navbar/customicon'
import { useState } from 'react'
import { clsx } from 'clsx'

interface Props {
  className?: string
}

type Visibility = 'public' | 'private'

export default function SelectVisibility({
  className
}: Props): JSX.Element {
  const [boardVisibility, setBoardVisibility] =
    useState<Visibility>('private')

  const changeVisibility = (visibility: Visibility) => {
    setBoardVisibility(visibility)
  }

  return (
    <Popover className={`relative  ${className}`}>
      <Popover.Button
        as={ButtonWithForwardRef}
        icon={
          <CustomIcon icon={IoMdLock} fontSize={12} fill='#828282' />
        }
        className={`flex items-center gap-2 min-w-[108px] h-[32px] bg-[#f2f2f2] rounded-lg px-4 py-2 hover:bg-[#e2e2e2]`}
      >
        <span className='text-xs font-medium text-[#828282]'>
          {boardVisibility === 'public' ? 'Public' : 'Private'}
        </span>
      </Popover.Button>

      <Popover.Panel
        className={
          'absolute top-[45px] w-[234px] h-[199px] px-3 py-3 bg-white shadow-lg border border-[#e0e0e0] rounded-xl'
        }
      >
        <header className='flex flex-col items-start gap-1 mb-4'>
          <h4 className='font-semibold text-[#4f4f4f] text-xs'>
            Visibility
          </h4>
          <p className='text-[#828282] text-xs'>
            Choose who can see to this board.
          </p>
        </header>
        <div className={`flex flex-col gap-2 ${notoSans.className}`}>
          <button
            className={clsx(
              `flex flex-col gap-1 h-[58px] rounded-lg p-3`,
              {
                'bg-[#f2f2f2]': boardVisibility === 'public'
              }
            )}
            onClick={() => changeVisibility('public')}
          >
            <div className='flex gap-2'>
              <MdPublic fill='#4F4F4F' />
              <span className='text-xs font-medium text-[#4F4F4F]'>
                Public
              </span>
            </div>

            <span className='text-[10px] font-normal text-[#828282]'>
              Anyone on the internet can see this.
            </span>
          </button>
          <button
            className={clsx(
              `flex flex-col gap-1 h-[58px] rounded-lg p-3`,
              {
                'bg-[#f2f2f2]': boardVisibility === 'private'
              }
            )}
            onClick={() => changeVisibility('private')}
          >
            <div className='flex gap-2'>
              <MdLock fill='#4F4F4F' />
              <span className='text-xs font-medium text-[#4F4F4F]'>
                Private
              </span>
            </div>

            <span className='text-[10px] font-normal text-[#828282]'>
              Only board members can see this
            </span>
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
