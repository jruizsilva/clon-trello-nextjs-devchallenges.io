'use client'
import CustomIcon from '@/components/navbar/customicon'
import { poppins } from '@/fonts/fonts'
import { Popover } from '@headlessui/react'
import { ReactNode } from 'react'
import { MdLabel } from 'react-icons/md'
import Button, { ButtonWithForwardRef } from '../../components/button'
import BoardTag from './boardtag'
import LabelWithIcon from './labelwithicon'

interface Props {
  className?: string
  icon?: ReactNode
  top?: string
}

export default function BoardAddLabelToCardButton({
  top = 'top-10'
}: Props): JSX.Element {
  return (
    <Popover className='relative z-50'>
      <Popover.Button
        as={ButtonWithForwardRef}
        icon={
          <CustomIcon icon={MdLabel} fill='#828282' fontSize={12} />
        }
        className='rounded-lg bg-[#F2F2F2] w-[148px] h-[32px] flex items-center gap-3 pl-4'
      >
        <span className='text-[#828282] text-xs font-medium'>
          Labels
        </span>
      </Popover.Button>

      <Popover.Panel
        className={`absolute right-0 border border-[#E0E0E0] rounded-xl px-3 py-2 shadow-sm bg-white w-[245px] h-[355px] flex flex-col ${top}`}
      >
        <h5
          className={`text-[#4f4f4f] text-xs font-semibold ${poppins.className}`}
        >
          Label
        </h5>
        <p
          className={`text-[#828282] text-xs font-normal mb-2 ${poppins.className}`}
        >
          Select a name and a color
        </p>
        <input
          type='text'
          className='py-2 ps-3 mb-4 w-full h-[34px] text-[10px] shadow-md rounded-lg'
          placeholder='Label...'
        />
        <div className='flex gap-2 justify-center flex-wrap mb-4'>
          {colors.map((color) => (
            <ColorBox key={color} color={color} />
          ))}
        </div>
        <LabelWithIcon
          icon={
            <CustomIcon icon={MdLabel} fill='#bdbdbd' fontSize={12} />
          }
          className='mb-1'
        >
          Available
        </LabelWithIcon>
        <div className='flex gap-2 mb-3'>
          <BoardTag
            tag={{
              bg: 'bg-[#D5E6FB]',
              color: 'text-[#2F80ED]',
              id: 1,
              name: 'Technical'
            }}
          />
          <BoardTag
            tag={{
              bg: 'bg-[#D3EADD]',
              color: 'text-[#219653]',
              id: 2,
              name: 'Design'
            }}
          />
        </div>

        <LabelWithIcon
          icon={
            <CustomIcon icon={MdLabel} fill='#bdbdbd' fontSize={12} />
          }
          className='mb-1'
        >
          Applied
        </LabelWithIcon>
        <div className='flex gap-2'>
          <BoardTag
            tag={{
              bg: 'bg-[#D5E6FB]',
              color: 'text-[#2F80ED]',
              id: 1,
              name: 'Technical'
            }}
          />
          <BoardTag
            tag={{
              bg: 'bg-[#D3EADD]',
              color: 'text-[#219653]',
              id: 2,
              name: 'Design'
            }}
          />
        </div>
        <Button
          className={`w-[74px] h-[30px] rounded-lg bg-[#2f80ed] text-[10px] text-white mx-auto mt-auto`}
        >
          Add
        </Button>
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
