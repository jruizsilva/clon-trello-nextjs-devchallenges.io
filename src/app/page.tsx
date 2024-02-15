import SelectVisibility from '@/components/selectvisibility'
import AvatarList from './_ui/avatarlist'
import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { MdAdd, MdMoreHoriz } from 'react-icons/md'
import MenuBoard from './_ui/menuboard'
import BoardCardList from './_ui/boardcardlist'

export default function Home() {
  return (
    <div className='px-6'>
      <header className='flex justify-between pt-[35px]  mb-6'>
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
      <main className='bg-[#F8F9FD] rounded-3xl w-full h-[calc(100vh-159px)] px-6 py-7'>
        <div className='flex'>
          <BoardCardList title='Backlog 🤔' />
        </div>
      </main>
    </div>
  )
}
