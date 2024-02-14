import { ReactNode } from 'react'

interface ButtonProps {
  icon?: ReactNode
  children?: ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({
  icon: Icon,
  children,
  className,
  onClick
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {Icon ?? null}

      {children}
    </button>
  )
}

export default Button
