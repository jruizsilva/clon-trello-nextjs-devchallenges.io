import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import SelectVisibility from '@/components/selectvisibility'
import { MdAdd } from 'react-icons/md'
import AddCardListColumn from './_ui/addcardlistcolumn'
import AvatarList from './_ui/avatarlist'
import BoardCardList from './_ui/boardcardlist'
import MenuBoard from './_ui/menuboard'
import BoardInviteButton from './_ui/boardinvitebutton'

export default function Home() {
  return (
    <>
      <header className='flex justify-between pt-[35px] mb-6 px-6'>
        <div className='flex items-center gap-3'>
          <SelectVisibility />
          <AvatarList />
          <BoardInviteButton />
        </div>
        <MenuBoard />
      </header>
      <main className='bg-[#F8F9FD] rounded-3xl flex gap-8 py-7 px-6 max-w-[100%] overflow-auto h-[calc(100vh-159px)]'>
        <BoardCardList title='Backlog 🤔' />
        <BoardCardList title='Backlog 🤔' />
        <BoardCardList title='Backlog 🤔' />
        <BoardCardList title='Backlog 🤔' />
        <BoardCardList title='Backlog 🤔' />
        <BoardCardList title='Backlog 🤔' />
        <AddCardListColumn />
      </main>
    </>
  )
}
