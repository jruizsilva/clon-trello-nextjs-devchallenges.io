import SelectVisibility from '@/components/selectvisibility'
import AvatarList from './_ui/avatarlist'
import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { MdAdd, MdMoreHoriz } from 'react-icons/md'
import MenuBoard from './_ui/menuboard'

export default function Home() {
  return (
    <main>
      <header className='flex justify-between mt-[35px] px-6'>
        <div className='flex items-center'>
          {/* <SelectVisibility className='mr-4 md:mr-[19px]' /> */}
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
    </main>
  )
}
