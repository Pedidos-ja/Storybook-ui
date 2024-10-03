import { ComponentProps, ElementType } from 'react'

export interface WrapperProps extends ComponentProps<'div'> {
  as?: ElementType
}

export const Wrapper = ({
  as: Component = 'div',
  className = '',
  ...props
}: WrapperProps) => {
  return (
    <Component
      className={`${className} flex flex-col   justify-center  w-full h-screen items-center text-center self-center`}
      {...props}
    />
  )
}

Wrapper.displayName = 'Wrapper'
