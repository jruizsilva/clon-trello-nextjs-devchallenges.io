import clsx from 'clsx'
import Button from './button'
import { ReactNode } from 'react'
import { poppins } from '@/fonts/fonts'

interface Props {
  text?: string
  className?: string
  onClick?: () => void
  icon?: ReactNode
}

export default function ButtonSearch({
  text,
  className,
  onClick,
  icon: Icon
}: Props): JSX.Element {
  return (
    <Button
      className={clsx(
        { 'w-[74px]': text !== undefined },
        `absolute right-[2px] bottom-[2px] top-[2px] w-[30px] h-[30px] rounded-lg bg-[#2f80ed] text-white flex justify-center items-center gap-1 ${className}`
      )}
      onClick={onClick}
    >
      {text && !Icon ? <Text text={text} /> : null}
      {!text && Icon ? Icon : null}
      {text && Icon ? (
        <>
          {Icon} <Text text={text} />
        </>
      ) : null}
    </Button>
  )
}

const Text = ({ text }: { text: string }) => {
  return (
    <span className={`text-[10px] font-medium ${poppins.className}`}>
      {text}
    </span>
  )
}
