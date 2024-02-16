import { IconType } from 'react-icons'
import { MdSearch } from 'react-icons/md'
import ButtonSearch from './buttonsearch'
import CustomIcon from './navbar/customicon'

interface Props {
  placeholder: string
  className?: string
}

const InputSearch = ({ placeholder, className }: Props) => {
  return (
    <div className={`w-[338px] h-[34px] relative ${className}`}>
      <input
        type='text'
        className='py-2 ps-3 w-full h-[34px] text-[10px] shadow-md rounded-lg'
        placeholder={placeholder}
      />
      <ButtonSearch
        icon={<CustomIcon icon={MdSearch} fontSize={16} />}
      />
    </div>
  )
}

export default InputSearch
