import { ComponentProps, ElementType } from 'react'

export interface TextProps extends ComponentProps<'span'> {
  as?: ElementType
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  color?: 'red' | 'green' | 'blue' | 'gray' | 'yellow'
  children: React.ReactNode
}

export const Text = ({
  as: Tag = 'span',
  size = 'md',
  color = 'red',
  children,
  ...props
}: TextProps) => {
  const sizeClass = {
    xxs: 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  }[size]

  const colorClass = {
    red: 'text-red-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    gray: 'text-gray-500',
    yellow: 'text-yellow-500',
  }[color]

  return (
    <Tag className={`${sizeClass} ${colorClass}`} {...props}>
      {children}
    </Tag>
  )
}

Text.displayName = 'Text'
