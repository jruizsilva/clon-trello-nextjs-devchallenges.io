import Avatar from '@/components/avatar'

interface Props {
  src?: string
}

export default function Member({
  src = 'https://i.pravatar.cc/32?img=10'
}: Props): JSX.Element {
  return (
    <div className='flex items-center gap-2'>
      <Avatar src={src} width={32} height={32} />
      <h5 className='font-semibold text-[#333] text-xs text-nowrap max-w-[10ch] overflow-hidden text-ellipsis'>
        Daniel JensenDaniel JensenDaniel JensenDaniel Jensen
      </h5>
    </div>
  )
}
