import { ComponentProps, ElementType } from 'react'

export interface HeaderProps extends ComponentProps<'header'> {
  as?: ElementType
}

export const Header = ({
  as: Component = 'header',
  className = '',
  children,
  ...props
}: HeaderProps) => {
  return (
    <Component
      className={`w-full min-h-[44px] border border-[#CBD5E1] flex flex-row p-[28px] pl-[54px] ${className} items-center justify-between`}
      {...props}
    >
      {children}
    </Component>
  )
}

Header.displayName = 'Header'
