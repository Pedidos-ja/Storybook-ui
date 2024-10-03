import { ComponentProps, ElementType } from 'react'

export interface FormProps extends ComponentProps<'form'> {
  as?: ElementType
}

export const Form = ({
  as: Component = 'form',
  className = '',
  ...props
}: FormProps) => {
  return (
    <Component className={`w-full flex flex-col ${className}`} {...props} />
  )
}

Form.displayName = 'Form'
