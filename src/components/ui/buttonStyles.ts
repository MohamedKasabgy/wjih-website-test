type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'secondary'

export const buttonClasses = (variant: ButtonVariant = 'primary') =>
  [
    'inline-flex min-h-11 items-center justify-center px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    variant === 'primary'
      ? 'liquid-glass bg-[var(--page-color)]/10 !border-[var(--page-color)]/20 text-[var(--page-color)] hover:bg-[var(--page-color)]/20 focus-visible:outline-[var(--page-color)]'
      : variant === 'outline'
        ? 'liquid-glass bg-transparent !border-[var(--page-color)]/35 text-[var(--page-color)] hover:bg-[var(--page-color)]/10 focus-visible:outline-[var(--page-color)]'
        : variant === 'secondary'
          ? 'liquid-glass bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--page-color)] hover:text-[var(--page-color)] focus-visible:outline-[var(--page-color)]'
          : 'liquid-glass text-[var(--color-text)] hover:border-[var(--page-color)] hover:text-[var(--page-color)] focus-visible:outline-[var(--page-color)]',
  ].join(' ')
