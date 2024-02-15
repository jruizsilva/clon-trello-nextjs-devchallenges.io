import { notoSans } from '@/fonts/fonts'

interface Props {
  tag: Tag
}

export default function BoardTag({ tag }: Props): JSX.Element {
  return (
    <div
      className={`w-[60px] h-[18px] rounded-lg flex items-center justify-center ${tag.bg}`}
    >
      <span
        className={`text-[10px] font-medium ${notoSans.className} ${tag.color}`}
      >
        {tag.name}
      </span>
    </div>
  )
}
