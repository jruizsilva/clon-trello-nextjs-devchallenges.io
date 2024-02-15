import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  children?: ReactNode
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

export const ButtonWithForwardRef = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function ButtonWithForwardRef(
  { icon: Icon, children, className, onClick, ...rest },
  ref
) {
  return (
    <button
      className={className}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      {Icon ?? null}
      {children}
    </button>
  )
})

export default Button
