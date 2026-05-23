const baseCardClasses =
  'rounded-3xl border border-violet-200 bg-white shadow-[0_14px_34px_rgba(124,58,237,0.08)] transition-all duration-300 dark:border-white/10 dark:bg-[#151525]'

export function SurfaceCard({ as: Component = 'div', featured = false, className = '', children, ...props }) {
  const variantClasses = featured
    ? 'border-[#7C3AED] shadow-[0_24px_70px_rgba(124,58,237,0.18)]'
    : 'hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(124,58,237,0.14)]'

  return (
    <Component className={`${baseCardClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </Component>
  )
}
