import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { poppins } from '@/fonts/fonts'
import { MdMoreHoriz } from 'react-icons/md'
import BoardCard from './boardcard'
import AddButton from './addbutton'
import BoardInviteButton from './boardinvitebutton'
import { Menu } from '@headlessui/react'
import BoardCardListMenu from './boardcardlistmenu'

interface Props {
  title: string
}

export default function BoardCardList({ title }: Props): JSX.Element {
  return (
    <div className='basis-[243px] flex-shrink-0'>
      <header className='flex justify-between mb-4'>
        <h3
          className={`font-medium text-sm text-[#333] ${poppins.className}`}
        >
          {title}
        </h3>
        <BoardCardListMenu />
      </header>
      <div className='mb-6 flex flex-col gap-6'>
        <BoardCard
          title="✋🏿 Add what you'd like to work on below"
          tags={[
            {
              id: 1,
              name: 'Concept',
              bg: 'bg-[#EBDCF9]',
              color: 'text-[#9B51E0]'
            }
          ]}
          image='/logo.svg'
        />
        <BoardCard
          title="✋🏿 Add what you'd like to work on below"
          tags={[
            {
              id: 1,
              name: 'Concept',
              bg: 'bg-[#EBDCF9]',
              color: 'text-[#9B51E0]'
            }
          ]}
          image='/logo.svg'
        />
      </div>
      <footer className='pb-6'>
        <AddButton>Add another card</AddButton>
      </footer>
    </div>
  )
}
