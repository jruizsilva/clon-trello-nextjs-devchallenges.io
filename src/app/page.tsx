import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import SelectVisibility from '@/components/selectvisibility'
import { MdAdd } from 'react-icons/md'
import AddCardListColumn from './_ui/addcardlistcolumn'
import AvatarList from './_ui/avatarlist'
import BoardCardList from './_ui/boardcardlist'
import MenuBoard from './_ui/menuboard'

export default function Home() {
  return (
    <>
      <header className='flex justify-between pt-[35px] mb-6 px-6'>
        <div className='flex items-center'>
          <SelectVisibility className='mr-4 md:mr-[19px]' />
          <AvatarList />
          <Button
            icon={
              <CustomIcon icon={MdAdd} fill='white' fontSize={24} />
            }
            className='w-[32px] h-[32px] rounded-lg bg-[#2f80ed] justify-center items-center gap-1 ml-3 hidden sm:flex'
          />
        </div>
        <MenuBoard />
      </header>
      <div className='bg-[#F8F9FD] rounded-3xl flex gap-8 w-screen h-[calc(100vh-159px)] py-7 px-6 overflow-x-auto'>
        <BoardCardList title='Backlog 🤔' />
        <BoardCardList title='Backlog 🤔' />
        <BoardCardList title='Backlog 🤔' />
        <AddCardListColumn />
      </div>
    </>
  )
}
