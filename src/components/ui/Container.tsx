import type { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className = '', ...props }: ContainerProps) {
  return (
    <div
      className={['mx-auto w-full ', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
