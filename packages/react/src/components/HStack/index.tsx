import { ComponentProps, ElementType } from 'react'

export interface HStackProps extends ComponentProps<'div'> {
  as?: ElementType
}

export const HStack = ({
  as: Component = 'div',
  className = '',
  ...props
}: HStackProps) => {
  return <Component className={`${className} w-full flex`} {...props} />
}

HStack.displayName = 'HStack'
