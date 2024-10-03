import { ComponentProps, ElementType } from 'react'

export interface BoxProps extends ComponentProps<'div'> {
  as?: ElementType
}

export const Box = ({
  as: Component = 'div',
  className = '',
  ...props
}: BoxProps) => {
  return (
    <Component
      className={`min-w-[380px] w-[380px] min-h-[439px] border border-[#CBD5E1] items-center justify-center flex flex-col p-[28px] ${className} rounded-[8px]`}
      {...props}
    />
  )
}

Box.displayName = 'Box'
