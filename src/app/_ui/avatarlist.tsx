import Avatar from '@/components/avatar'
import { notoSans } from '@/fonts/fonts'

interface Props {
  className?: string
}

export default function AvatarList({
  className
}: Props): JSX.Element {
  return (
    <div className='hidden sm:block'>
      <div className={`gap-2 flex items-center ${className} `}>
        <Avatar
          src='https://i.pravatar.cc/28?img=10'
          width={32}
          height={32}
        />
        <Avatar
          src='https://i.pravatar.cc/32?img=11'
          width={32}
          height={32}
        />
        <Avatar
          src='https://i.pravatar.cc/32?img=12'
          width={32}
          height={32}
        />{' '}
        <Avatar
          src='https://i.pravatar.cc/32?img=13'
          width={32}
          height={32}
        />
        <span
          className={`text-xs font-medium text-[#bdbdbd] ${notoSans.className}`}
        >
          + 4 others
        </span>
      </div>
    </div>
  )
}
