const variantClasses = {
  primary:
    'bg-[#7C3AED] text-white shadow-[0_18px_50px_rgba(124,58,237,0.28)] hover:bg-[#06B6D4] hover:shadow-[0_20px_60px_rgba(6,182,212,0.24)]',
  secondary:
    'border-2 border-violet-300 bg-white/95 text-[#111827] hover:border-[#06B6D4] hover:text-[#06B6D4] dark:border-white/10 dark:bg-white/5 dark:text-white',
  subtle:
    'border border-violet-200 bg-white text-[#111827] hover:border-[#06B6D4] hover:text-[#06B6D4] dark:border-white/10 dark:bg-white/5 dark:text-slate-100',
}

export function ActionButton({ href, variant = 'primary', className = '', children, type = 'button', onClick, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold transition ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
