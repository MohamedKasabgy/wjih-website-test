type ButtonVariant = 'primary' | 'ghost'

export const buttonClasses = (variant: ButtonVariant = 'primary') =>
  [
    'inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    variant === 'primary'
      ? 'bg-[var(--page-color)] text-white focus-visible:outline-[var(--page-color)]'
      : 'border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--page-color)] hover:text-[var(--page-color)] focus-visible:outline-[var(--page-color)]',
  ].join(' ')
