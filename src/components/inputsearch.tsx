import { IconType } from 'react-icons'
import Button from './button'

interface Props {
  buttonText?: string
  placeholder: string
  className?: string
  onClick?: () => void
  icon?: IconType
  btnClassName?: string
}

const InputSearch = ({
  buttonText = 'Search',
  placeholder,
  className,
  onClick,
  icon: Icon,
  btnClassName
}: Props) => {
  return (
    <div className={`w-[338px] h-[34px] relative ${className}`}>
      <input
        type='text'
        className='py-2 ps-3 w-full h-[34px] text-[10px] shadow-md rounded-lg'
        placeholder={placeholder}
      />
      <Button
        className={`absolute right-[2px] bottom-[2px] top-[2px] w-[74px] h-[30px] rounded-lg bg-[#2f80ed] text-[10px] text-white ${btnClassName}`}
        onClick={onClick}
      >
        {Icon ? <Icon className='w-[16px] h-[16px]' /> : buttonText}
      </Button>
    </div>
  )
}

export default InputSearch
