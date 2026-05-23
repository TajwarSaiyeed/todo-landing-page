import { motion } from 'framer-motion'

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function SectionHeading({ id, label, title, subtitle, align = 'center', children, className = '' }) {
  const contentAlignment = align === 'left' ? 'max-w-3xl text-left' : 'mx-auto max-w-2xl text-center'
  const bodySpacing = align === 'left' ? 'mt-10' : 'mt-12'

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={headingVariants}
      transition={{ duration: 0.5 }}
      className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}
    >
      <div className={contentAlignment}>
        <p className="text-sm font-black uppercase tracking-[0.38em] text-[#7C3AED]">{label}</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#111827] sm:text-4xl dark:text-white">{title}</h2>
        {subtitle ? <p className="mt-4 text-base leading-7 text-[#4B5563] dark:text-slate-300">{subtitle}</p> : null}
      </div>
      {children ? <div className={bodySpacing}>{children}</div> : null}
    </motion.section>
  )
}
