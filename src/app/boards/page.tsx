import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import React from 'react'
import { MdAdd } from 'react-icons/md'
import BoardCard from './_ui/boardcard'
import AddBoardModal from './_ui/addboardmodal'

interface BoardsProps {}

const Boards = (props: BoardsProps) => {
  return (
    <div className='bg-[#f8f9fd] h-[calc(100vh-68px)]'>
      <div className='max-w-6xl mx-auto pt-12 px-6 lg:px-0'>
        <header className='flex justify-between mb-10'>
          <h2 className='font-medium text-lg '>All Boards</h2>
          <AddBoardModal />
        </header>
        <main className='flex  gap-10 flex-wrap'>
          <BoardCard />
        </main>
      </div>
    </div>
  )
}

export default Boards
