import { ComponentProps, ElementType } from 'react'

export interface LogoProps extends ComponentProps<'img'> {
  as?: ElementType
  marginTop?: number
  marginBottom?: number
}

export const Logo = ({
  as: Component = 'img',
  className = '',
  ...props
}: LogoProps) => {
  return <Component className={`${className}`} {...props} />
}

Logo.displayName = 'Logo'
