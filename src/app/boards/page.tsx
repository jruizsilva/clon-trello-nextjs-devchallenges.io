import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import React from 'react'
import { MdAdd } from 'react-icons/md'

interface BoardsProps {}

const Boards = (props: BoardsProps) => {
  return (
    <main className='bg-[#f8f9fd] h-[calc(100vh-68px)]'>
      <header className='max-w-5xl mx-auto pt-12 flex justify-between px-6 lg:px-0'>
        <h2 className='font-medium text-lg '>All Boards</h2>
        <Button
          icon={<CustomIcon icon={MdAdd} fill='white' />}
          className='w-[74px] h-[30px] rounded-lg bg-[#2f80ed] flex justify-center items-center gap-1'
        >
          <span className='text-[10px] text-white font-medium'>
            Add
          </span>
        </Button>
      </header>
    </main>
  )
}

export default Boards
