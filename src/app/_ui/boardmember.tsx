import Avatar from '@/components/avatar'
import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { poppins } from '@/fonts/fonts'
import { MdEdit } from 'react-icons/md'

interface Props {
  isOwner?: boolean
}

export default function BoardMember({ isOwner }: Props): JSX.Element {
  return (
    <div className='flex items-center gap-3'>
      <Avatar
        src='https://i.pravatar.cc/28?img=10'
        width={32}
        height={32}
      />
      <h5 className='font-semibold text-[#333] text-xs'>
        Daniel Jensen
      </h5>
      {isOwner && (
        <span className='ml-auto w-[62px] font-medium text-[10px] text-[#bdbdbd] text-center'>
          Owner
        </span>
      )}

      {!isOwner && (
        <Button className='ml-auto w-[62px] h-6 border rounded-lg border-[#EB5757] flex items-center justify-center gap-2 hover:bg-[#ffdbdb]'>
          <span
            className={`font-medium text-[10px] text-[#EB5757] ${poppins.className}`}
          >
            Remove
          </span>
        </Button>
      )}
    </div>
  )
}
