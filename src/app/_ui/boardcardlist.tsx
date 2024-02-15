import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { poppins } from '@/fonts/fonts'
import { MdMoreHoriz } from 'react-icons/md'
import BoardCard from './boardcard'

interface Props {
  title: string
}

export default function BoardCardList({ title }: Props): JSX.Element {
  return (
    <div className='gap-8 w-[243px]'>
      <header className='flex justify-between mb-4'>
        <h3
          className={`font-medium text-sm text-[#333] ${poppins.className}`}
        >
          {title}
        </h3>
        <Button
          icon={
            <CustomIcon
              icon={MdMoreHoriz}
              fontSize={20}
              fill='#828282'
            />
          }
        />
      </header>
      <div>
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
    </div>
  )
}
