import { ComponentProps, forwardRef, ElementRef } from 'react'

export interface TextInputProps extends ComponentProps<'input'> {
  prefix?: string
  suffix?: string | JSX.Element
}

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  ({ prefix, suffix, className, ...props }, ref) => {
    return (
      <div
        className={`flex items-center bg-white border-[1px] border-[#475569] focus-within:border-ignite300 w-full h-[40px] rounded-[6px] pl-3 ${className}`}
      >
        {!!prefix && (
          <span className="text-gray-400 text-sm font-regular px-3">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className="bg-transparent border-none text-white text-sm font-regular w-full focus:outline-none disabled:cursor-not-allowed placeholder-gray-400"
          {...props}
        />
        {suffix && (
          <div className="text-gray-400 text-sm font-regular px-3  h-full justify-center items-center border-l-[1px] border-[#475569] flex">
            <span>{suffix}</span>
          </div>
        )}
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
