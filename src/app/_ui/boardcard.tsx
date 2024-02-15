import { notoSans } from '@/fonts/fonts'
import Image from 'next/image'
import BoardTag from './boardtag'

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
    </div>
  )
}
