import { notoSans } from '@/fonts/fonts'
import Image from 'next/image'
import BoardTag from './boardtag'
import Avatar from '@/components/avatar'
import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { MdAdd } from 'react-icons/md'

interface Props {
  title: string
  image?: string
  tags: Tag[]
}

export default function BoardCard({
  title,
  image,
  tags
}: Props): JSX.Element {
  return (
    <div className='bg-white rounded-lg shadow-md p-3 w-full min-h-[148px]'>
      <div className=''>
        {image && (
          <div className='w-[219px] h-[130px] rounded-lg bg-red-50 mb-3 flex items-center'>
            <Image
              src={image}
              alt='card image'
              height={130}
              width={219}
              className='rounded-lg'
            />
          </div>
        )}
      </div>
      <h4
        className={`text-black font-normal text-base mb-3 ${notoSans.className}`}
      >
        {title}
      </h4>
      <div className='flex gap-3 mb-[22px]'>
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => <BoardTag key={tag.id} tag={tag} />)}
      </div>
      <footer className='flex justify-between'>
        <div className='flex gap-2'>
          <Avatar
            src='https://i.pravatar.cc/28?img=10'
            width={28}
            height={28}
          />
          <Button
            icon={
              <CustomIcon icon={MdAdd} fill='white' fontSize={24} />
            }
            className='w-[28px] h-[28px] rounded-lg bg-[#2f80ed] justify-center items-center flex'
          />
        </div>
        <div></div>
      </footer>
    </div>
  )
}
