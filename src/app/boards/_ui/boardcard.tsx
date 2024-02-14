import Avatar from '@/components/avatar'
import { notoSans } from '@/fonts/fonts'
import Image from 'next/image'

interface Props {}

export default function BoardCard(props: Props): JSX.Element {
  return (
    <div className='w-[258px] h-[258px] bg-white rounded-xl shadow-lg px-3 pt-3 pb-4'>
      <div className='h-[145px] w-[234px] flex justify-center items-center rounded-xl overflow-hidden'>
        <Image
          src='https://i.pravatar.cc/234?img=1'
          alt='board image'
          height={145}
          width={234}
        />
      </div>
      <h3
        className={`text-black font-medium text-base mt-3 mb-4 ${notoSans.className}`}
      >
        Devchallenges Board
      </h3>
      <div className='flex gap-3 items-center'>
        <div className='flex gap-3'>
          <Avatar
            src='https://i.pravatar.cc/28?img=7'
            width={28}
            height={28}
          />
          <Avatar
            src='https://i.pravatar.cc/28?img=8'
            width={28}
            height={28}
          />
          <Avatar
            src='https://i.pravatar.cc/28?img=9'
            width={28}
            height={28}
          />
        </div>
        <span
          className={`text-xs font-medium text-[#bdbdbd] ${notoSans.className}`}
        >
          + 5 others
        </span>
      </div>
    </div>
  )
}
