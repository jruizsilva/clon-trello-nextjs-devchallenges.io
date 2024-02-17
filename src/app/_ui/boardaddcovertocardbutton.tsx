'use client'
import CustomIcon from '@/components/navbar/customicon'
import { poppins } from '@/fonts/fonts'
import { Popover } from '@headlessui/react'
import { ReactNode } from 'react'
import { MdInsertPhoto, MdLabel } from 'react-icons/md'
import Button, { ButtonWithForwardRef } from '../../components/button'
import BoardTag from './boardtag'
import LabelWithIcon from './labelwithicon'
import InputSearch from '@/components/inputsearch'
import Image from 'next/image'

interface Props {
  className?: string
  icon?: ReactNode
  top?: string
}

export default function BoardAddCoverToCardButton({
  top = 'top-10'
}: Props): JSX.Element {
  return (
    <Popover className='relative z-20'>
      <Popover.Button
        as={ButtonWithForwardRef}
        icon={
          <CustomIcon
            icon={MdInsertPhoto}
            fill='#828282'
            fontSize={12}
          />
        }
        className='rounded-lg bg-[#F2F2F2] w-[148px] h-[32px] flex items-center gap-3 pl-4'
      >
        <span className='text-[#828282] text-xs font-medium'>
          Cover
        </span>
      </Popover.Button>

      <Popover.Panel
        className={`absolute right-0 border border-[#E0E0E0] rounded-xl px-3 py-2 shadow-sm bg-white w-[245px] flex flex-col ${top}`}
      >
        <h5
          className={`text-[#4f4f4f] text-xs font-semibold ${poppins.className}`}
        >
          Photo Search
        </h5>
        <p
          className={`text-[#828282] text-xs font-normal mb-2 ${poppins.className}`}
        >
          Search Unsplash for photos
        </p>
        <InputSearch
          placeholder='Keywords...'
          className='w-full mb-3'
        />
        <div className='flex gap-2 justify-center flex-wrap mb-3'>
          {images.map((imageSrc, index) => (
            <ImageBox key={index} src={imageSrc} />
          ))}
        </div>
        <Button
          className={`w-[90px] h-[30px] rounded-lg bg-[#2f80ed] text-[10px] text-white mx-auto mt-auto`}
        >
          Change image
        </Button>
      </Popover.Panel>
    </Popover>
  )
}

const ImageBox = ({ src }: { src: string }) => {
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[4px] flex items-center border`}
    >
      <Image src={src} width={48} height={48} alt='search image' />
    </div>
  )
}

const images = [
  '/logo.svg', //green
  '/logo.svg', //yellow
  '/logo.svg', //orange
  '/logo.svg', //red
  '/logo.svg', //blue
  '/logo.svg', //light blue
  '/logo.svg', //light green
  '/logo.svg', //black
  '/logo.svg', // light black
  '/logo.svg', // gray
  '/logo.svg', //light gray
  '/logo.svg' // almost white
]
