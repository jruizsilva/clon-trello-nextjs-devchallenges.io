import CustomIcon from '@/components/navbar/customicon'
import { notoSans } from '@/fonts/fonts'
import { MdAdd } from 'react-icons/md'

interface Props {
  children: string
}

export default function AddButton({ children }: Props): JSX.Element {
  return (
    <button className='h-8 flex justify-between bg-[#DAE4FD]  items-center pl-3 pr-2 rounded-lg w-full'>
      <span
        className={`font-medium text-xs text-[#2F80ED] ${notoSans.className}`}
      >
        {children}
      </span>
      <CustomIcon icon={MdAdd} fill='#2F80ED' fontSize={20} />
    </button>
  )
}
