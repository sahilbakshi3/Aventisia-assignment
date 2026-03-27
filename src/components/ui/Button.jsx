// Reusable Button component with variant support.
// Variants: 'primary' | 'secondary' | 'ghost' | 'icon'

export default function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) {
  const base = 'inline-flex items-center justify-center gap-1.5 font-semibold font-sans transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-primary hover:bg-primary-hover text-white text-[13.5px] px-4 py-2 rounded-lg shadow-btn hover:shadow-btn-hover hover:-translate-y-px active:translate-y-0',
    secondary:
      'border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-500 hover:text-gray-800 text-[13.5px] px-4 py-2 rounded-lg',
    ghost:
      'text-gray-400 hover:text-gray-700 hover:bg-gray-100 text-sm px-2 py-1 rounded-md',
    icon:
      'w-[34px] h-[34px] bg-white/[0.06] border border-white/10 rounded-lg text-white/65 hover:bg-white/10 hover:text-white',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
