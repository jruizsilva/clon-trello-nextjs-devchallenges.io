import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { MdMoreHoriz } from 'react-icons/md'
import AddButton from './addbutton'
import BoardCard from './boardcard'
import { poppins } from '@/fonts/fonts'

interface Props {}

export default function AddCardListColumn(props: Props): JSX.Element {
  return (
    <div className='basis-[243px] flex-shrink-0'>
      <AddButton>Add another list</AddButton>
    </div>
  )
}
