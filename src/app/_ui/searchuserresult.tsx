import Avatar from '@/components/avatar'
import { poppins } from '@/fonts/fonts'

interface Props {}

export default function SearchUserResult(props: Props): JSX.Element {
  return (
    <div className='rounded-lg border border-[#e0e0e0] w-full p-3 shadow-md bg-white h-[153px] flex flex-col gap-4 overflow-y-auto'>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  )
}

const UserItem = () => {
  return (
    <div className='flex items-center gap-3'>
      <Avatar
        src='https://i.pravatar.cc/32?img=10'
        height={32}
        width={32}
      />
      <h6
        className={`font-semibold text-xs text-[#333] ${poppins.className}`}
      >
        Morris Craft
      </h6>
    </div>
  )
}
