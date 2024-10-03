import { ComponentProps, ElementType } from 'react'

export interface VStackProps extends ComponentProps<'div'> {
  as?: ElementType
}

export const VStack = ({
  as: Component = 'div',
  className = '',
  ...props
}: VStackProps) => {
  return (
    <Component className={`${className} w-full flex flex-col`} {...props} />
  )
}

VStack.displayName = 'VStack'
