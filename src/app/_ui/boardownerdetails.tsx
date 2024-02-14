import { notoSans, poppins } from '@/fonts/fonts'
import Image from 'next/image'

interface Props {
  className?: string
}

export default function BoardOwnerDetails({
  className
}: Props): JSX.Element {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <div className='h-8 w-8 rounded-lg'>
        <Image
          src={'https://i.pravatar.cc/32?img=42'}
          alt='owner board avatar'
          width={32}
          height={32}
          className='rounded-lg'
        />
      </div>
      <div className='flex flex-col'>
        <h5
          className={`text-[#333] font-semibold text-xs ${poppins.className}`}
        >
          Daniel Jenses
        </h5>
        <span
          className={`font-semibold text-[10px] text-[#bdbdbd] ${notoSans.className}`}
        >
          on 4 July, 2020
        </span>
      </div>
    </div>
  )
}
