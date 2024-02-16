'use client'
import CustomIcon from '@/components/navbar/customicon'
import { notoSans } from '@/fonts/fonts'
import { Popover } from '@headlessui/react'
import { MdAdd } from 'react-icons/md'
import Button, { ButtonWithForwardRef } from '../../components/button'

interface Props {}

export default function BoardAddAnotherCardButton({}: Props): JSX.Element {
  return (
    <Popover className='relative  '>
      <Popover.Button
        as={ButtonWithForwardRef}
        className='h-8 flex justify-between bg-[#DAE4FD]  items-center pl-3 pr-2 rounded-lg w-full'
      >
        <span
          className={`font-medium text-xs text-[#2F80ED] ${notoSans.className}`}
        >
          Add another card
        </span>
        <CustomIcon icon={MdAdd} fill='#2F80ED' fontSize={20} />
      </Popover.Button>

      <Popover.Panel
        className={`absolute right-0 top-12 w-full rounded-xl`}
      >
        <div className='relative h-[87px] rounded-xl shadow-sm'>
          <textarea
            name='comment'
            className={`relative w-full h-[87px] border border-[#e0e0e0] rounded-xl  bg-white p-3 text-sm text-[#bdbdbd] resize-none mb-5 ${notoSans.className}`}
            placeholder='Enter a title for this card......'
          ></textarea>
          <Button
            className={`absolute left-3 bottom-3 w-[49px] h-[23px] rounded-lg bg-[#219653] text-[10px] text-white ${notoSans.className}`}
          >
            Save
          </Button>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

const ColorBox = ({ color }: { color: string }) => {
  return (
    <div className={`w-[48px] h-[27px] rounded-[4px] ${color}`}></div>
  )
}

const colors = [
  'bg-[#219653]', //green
  'bg-[#F2C94C]', //yellow
  'bg-[#F2994A]', //orange
  'bg-[#EB5757]', //red
  'bg-[#2F80ED]', //blue
  'bg-[#56CCF2]', //light blue
  'bg-[#607d8b]', //light green
  'bg-[#333333]', //black
  'bg-[#4F4F4F]', // light black
  'bg-[#828282]', // gray
  'bg-[#BDBDBD]', //light gray
  'bg-[#E0E0E0]' // almost white
]
