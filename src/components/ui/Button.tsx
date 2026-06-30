import type { ButtonHTMLAttributes } from 'react'

import { buttonClasses } from './buttonStyles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Parameters<typeof buttonClasses>[0]
}

export function Button({
  className = '',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[buttonClasses(variant), className].filter(Boolean).join(' ')}
      type={type}
      {...props}
    />
  )
}
