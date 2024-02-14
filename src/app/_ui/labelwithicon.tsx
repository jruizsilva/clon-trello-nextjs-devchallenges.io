import { poppins } from '@/fonts/fonts'
import { ReactNode } from 'react'

interface Props {
  className?: string
  children: string
  icon: ReactNode
}

export default function LabelWithIcon({
  className,
  children,
  icon: Icon
}: Props): JSX.Element {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Icon}
      <span
        className={`font-semibold text-[10px] text-[#bdbdbd] ${poppins.className}`}
      >
        {children}
      </span>
    </div>
  )
}
