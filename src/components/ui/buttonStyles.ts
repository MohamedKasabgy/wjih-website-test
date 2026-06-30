type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'secondary'

export const buttonClasses = (variant: ButtonVariant = 'primary') =>
  [
    'inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mask-wadi cursor-pointer',
    variant === 'primary'
      ? 'bg-[#7A1219] border border-[#7A1219] text-white hover:bg-[#5a0d12] focus-visible:outline-[#7A1219]'
      : variant === 'outline'
      ? 'bg-transparent border border-[#1E2650]/20 text-[#1E2650] hover:border-[#7A1219] hover:text-[#7A1219] focus-visible:outline-[#7A1219]'
      : variant === 'secondary'
      ? 'bg-[#1E2650] border border-[#1E2650] text-white hover:bg-[#151b3d] focus-visible:outline-[#1E2650]'
      : 'bg-transparent border-0 text-[#1E2650] hover:text-[#7A1219] focus-visible:outline-[#7A1219]',
  ].join(' ')
