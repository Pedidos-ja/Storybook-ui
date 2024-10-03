import { ComponentProps, ElementType } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
  as?: ElementType
  className?: string
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'rounded text-center min-w-[100%] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed h-[40px]'

  const sizeStyles = {
    sm: 'h-[38px] text-sm',
    md: 'h-[46px] text-base',
  }

  const variantStyles = {
    primary: `bg-primary hover:bg-[#12692C] disabled:bg-gray200
        border-2 border-[#12692C] hover:border-[#12692C] disabled:border-gray200
        rounded-[6px] text-[#101828] hover:text-white disabled:text-gray200 font-[500]
    `,
    secondary:
      'text-ignite300 border-2 border-ignite500 hover:bg-ignite500 hover:text-white disabled:text-gray200 disabled:border-gray200',
    tertiary: 'text-gray100 hover:text-white disabled:text-gray600',
  }

  return (
    <Component
      className={`${className} ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
      {...props}
    />
  )
}

Button.displayName = 'Button'
