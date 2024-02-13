import { ReactNode } from 'react'

interface ButtonProps {
  icon?: ReactNode
  children: ReactNode
  className?: string
}

const Button = ({ icon: Icon, children, className }: ButtonProps) => {
  return (
    <button className={className}>
      {Icon ?? null}

      {children}
    </button>
  )
}

export default Button
