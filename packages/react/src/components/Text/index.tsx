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
  color?:
    | 'red'
    | 'green'
    | 'blue'
    | 'gray'
    | 'yellow'
    | 'green700'
    | 'gray900'
    | 'gray700'
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
  className?: string
}

export const Text = ({
  as: Tag = 'span',
  size = 'md',
  color = 'gray900',
  align = 'left',
  className = '',
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
    green700: 'text-green-700',
    gray900: 'text-gray-900',
    gray700: 'text-gray-700',
  }[color]

  const alignClass = {
    left: 'text-left  w-full',
    center: 'text-center  w-full',
    right: 'text-right  w-full',
  }[align]

  return (
    <Tag
      className={`${className} ${sizeClass} ${colorClass} ${alignClass}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

Text.displayName = 'Text'
