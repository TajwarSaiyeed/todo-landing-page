import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ActionButton } from './components/ActionButton'
import { SectionHeading } from './components/SectionHeading'
import { SurfaceCard } from './components/SurfaceCard'
import {
  FaArrowRight,
  FaBars,
  FaBell,
  FaCalendarAlt,
  FaChartLine,
  FaCheck,
  FaCheckCircle,
  FaChevronLeft,
  FaCloud,
  FaFilter,
  FaGithub,
  FaInbox,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaMoon,
  FaPlus,
  FaRegCircle,
  FaRocket,
  FaSortAmountDown,
  FaStar,
  FaSun,
  FaTag,
  FaTimes,
  FaTrash,
  FaTwitter,
  FaUsers,
} from 'react-icons/fa'

const STORAGE_KEY = 'taskflow-public-tasks'
const COOKIE_KEY = 'taskflow-cookie-banner-dismissed'

const navItems = [
  { label: 'Features', href: '#features', section: 'features' },
  { label: 'How It Works', href: '#how-it-works', section: 'how-it-works' },
  { label: 'Stats', href: '#stats', section: 'stats' },
  { label: 'Testimonials', href: '#testimonials', section: 'testimonials' },
  { label: 'Pricing', href: '#pricing', section: 'pricing' },
  { label: 'FAQ', href: '#faq', section: 'faq' },
]

const heroParticles = [
  { top: '12%', left: '8%', size: 10, delay: 0.2, duration: 7.5 },
  { top: '22%', left: '22%', size: 14, delay: 1.1, duration: 9 },
  { top: '14%', left: '52%', size: 8, delay: 0.7, duration: 8.5 },
  { top: '28%', left: '76%', size: 12, delay: 1.4, duration: 10 },
  { top: '42%', left: '14%', size: 9, delay: 0.5, duration: 7.8 },
  { top: '58%', left: '34%', size: 16, delay: 1.6, duration: 10.5 },
  { top: '18%', left: '88%', size: 11, delay: 0.9, duration: 9.6 },
  { top: '66%', left: '82%', size: 13, delay: 0.3, duration: 8.9 },
]

const stats = [
  { value: '10K+', label: 'Users', icon: FaUsers },
  { value: '500K', label: 'Tasks Done', icon: FaCheckCircle },
  { value: '4.9', label: 'Star Rating', icon: FaStar },
  { value: '99.9%', label: 'Uptime', icon: FaCloud },
]

const features = [
  {
    title: 'Smart Reminders',
    description: 'Stay on track with intelligent reminders that surface the right task at the right moment.',
    icon: FaBell,
    iconClass: 'bg-[#7C3AED]/10 text-[#7C3AED]',
  },
  {
    title: 'Team Collaboration',
    description: 'Share lists, assign work, and keep everyone aligned in one elegant workspace.',
    icon: FaUsers,
    iconClass: 'bg-[#06B6D4]/10 text-[#06B6D4]',
  },
  {
    title: 'Progress Tracking',
    description: 'Visualize momentum with clear progress insights and celebratory completion states.',
    icon: FaChartLine,
    iconClass: 'bg-[#EC4899]/10 text-[#EC4899]',
  },
  {
    title: 'Cross Platform',
    description: 'Pick up your tasks seamlessly across desktop, tablet, and mobile devices.',
    icon: FaMobileAlt,
    iconClass: 'bg-[#7C3AED]/10 text-[#A855F7]',
  },
  {
    title: 'Dark Mode',
    description: 'A polished dark theme that keeps your focus sharp day or night.',
    icon: FaMoon,
    iconClass: 'bg-[#06B6D4]/10 text-[#0EA5E9]',
  },
  {
    title: 'Offline Support',
    description: 'Keep working even when the connection drops — your tasks stay with you.',
    icon: FaCloud,
    iconClass: 'bg-[#EC4899]/10 text-[#DB2777]',
  },
]

const steps = [
  {
    title: 'Capture tasks instantly',
    description: 'Add tasks in seconds with rich details, priority tags, and due dates.',
    icon: FaPlus,
  },
  {
    title: 'Organize by context',
    description: 'Group work by project, team, or life area so nothing gets buried.',
    icon: FaTag,
  },
  {
    title: 'Finish with confidence',
    description: 'Track progress, celebrate wins, and keep the next action in view.',
    icon: FaCheck,
  },
]

const testimonials = [
  {
    name: 'Ariana Patel',
    role: 'Product Designer',
    quote: 'TaskFlow makes my daily planning feel calm and intentional. It looks premium and actually keeps me organized.',
  },
  {
    name: 'Marcus Reed',
    role: 'Startup Founder',
    quote: 'Our team finally has a todo app that feels fast, beautiful, and practical for shared execution.',
  },
  {
    name: 'Leila Johnson',
    role: 'Operations Lead',
    quote: 'The dark mode, reminders, and clean dashboard make it the easiest tool in our stack to adopt.',
  },
]

const pricing = [
  {
    name: 'Free',
    price: '$0',
    badge: 'For individuals',
    features: ['Unlimited personal tasks', 'Basic reminders', 'Dark mode'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$9',
    badge: 'Most popular',
    features: ['Everything in Free', 'Advanced reminders', 'Progress analytics', 'Offline sync'],
    cta: 'Upgrade to Pro',
    featured: true,
  },
  {
    name: 'Team',
    price: '$29',
    badge: 'For collaboration',
    features: ['Everything in Pro', 'Shared workspaces', 'Team assignments', 'Admin controls'],
    cta: 'Choose Team',
    featured: false,
  },
]

const faqs = [
  {
    question: 'Can I use TaskFlow on mobile?',
    answer: 'Yes — the layout is fully responsive and optimized for mobile-first use.',
  },
  {
    question: 'Does TaskFlow support dark mode?',
    answer: 'Absolutely. You can switch between a bright and dark experience instantly.',
  },
  {
    question: 'Can teams collaborate together?',
    answer: 'Yes, the Team plan is built for shared projects, assignments, and coordination.',
  },
  {
    question: 'Will my tasks work offline?',
    answer: 'TaskFlow is designed to keep your workflow moving even without a connection.',
  },
  {
    question: 'Is this ready for production?',
    answer: 'This landing page is a polished front-end showcase built with Vite, React, and Tailwind.',
  },
]

const footerSocials = [
  { label: 'GitHub', href: '#', icon: FaGithub },
  { label: 'Twitter', href: '#', icon: FaTwitter },
  { label: 'LinkedIn', href: '#', icon: FaLinkedinIn },
  { label: 'Instagram', href: '#', icon: FaInstagram },
]

const appCategories = ['Work', 'Personal', 'Shopping', 'Health']
const priorityOptions = ['high', 'medium', 'low']
const sortOptions = [
  { value: 'dateAdded', label: 'Date Added' },
  { value: 'dueDate', label: 'Due Date' },
  { value: 'priority', label: 'Priority' },
]

const categoryMeta = {
  Work: { chip: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-200', dot: '#7C3AED' },
  Personal: { chip: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-200', dot: '#06B6D4' },
  Shopping: { chip: 'bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-200', dot: '#EC4899' },
  Health: { chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200', dot: '#10B981' },
}

const priorityMeta = {
  high: { label: 'High', chip: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-200', rank: 0 },
  medium: { label: 'Medium', chip: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-200', rank: 1 },
  low: { label: 'Low', chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200', rank: 2 },
}

const emptyTaskTemplate = {
  title: '',
  priority: 'medium',
  dueDate: '',
  category: 'Work',
}

const confettiPalette = ['#7C3AED', '#A855F7', '#06B6D4', '#EC4899', '#10B981', '#F59E0B']
const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function loadTasks() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function createTaskId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function formatDate(value) {
  if (!value) return 'No due date'
  const date = new Date(`${value}T00:00:00`)
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
}

function App() {
  const [path, setPath] = useState(() => (typeof window === 'undefined' ? '/' : window.location.pathname))
  const [darkMode, setDarkMode] = useState(false)

  const navigate = useCallback((to) => {
    if (typeof window === 'undefined') return
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to)
      setPath(to)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', darkMode)
    root.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  return path.startsWith('/app') ? (
    <TodoPage navigate={navigate} darkMode={darkMode} setDarkMode={setDarkMode} />
  ) : (
    <LandingPage navigate={navigate} darkMode={darkMode} setDarkMode={setDarkMode} />
  )
}

function LandingPage({ navigate, darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('features')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [cookieVisible, setCookieVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.localStorage.getItem(COOKIE_KEY) !== 'true'
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.25, 0.5] },
    )

    navItems.forEach(({ section }) => {
      const el = document.getElementById(section)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 760)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleAnchor = (event, href) => {
    event.preventDefault()
    setMobileOpen(false)
    scrollToSection(href)
  }

  const dismissCookie = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(COOKIE_KEY, 'true')
    }
    setCookieVisible(false)
  }

  return (
    <div className="min-h-screen bg-white text-[#1E1E2E] transition-colors duration-300 dark:bg-[#0F0F1A] dark:text-white">
      <header className="sticky top-0 z-50 border-b border-violet-200/60 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#0F0F1A]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/')} className="text-left">
            <p className="text-2xl font-black tracking-tight text-[#7C3AED]">TaskFlow</p>
            <p className="text-xs uppercase tracking-[0.35em] text-[#7C3AED]">Smart Todo App</p>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = activeSection === item.section
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleAnchor(event, item.href)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? 'bg-violet-100 text-[#7C3AED] dark:bg-white/10 dark:text-violet-200'
                      : 'text-[#4B5563] hover:bg-violet-50 hover:text-[#7C3AED] dark:text-slate-300 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-[#7C3AED] shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-[#06B6D4] dark:border-white/10 dark:bg-white/5 dark:text-violet-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href="/app"
              onClick={(event) => {
                event.preventDefault()
                navigate('/app')
              }}
              className="hidden rounded-full bg-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(124,58,237,0.28)] transition hover:bg-[#06B6D4] sm:inline-flex"
            >
              Try App
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-[#7C3AED] lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-violet-200"
              aria-label="Open menu"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t border-violet-200 bg-white/95 px-4 py-4 lg:hidden dark:border-white/5 dark:bg-[#0F0F1A]/95"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2">
                {navItems.map((item) => {
                  const active = activeSection === item.section
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(event) => handleAnchor(event, item.href)}
                      className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                        active
                          ? 'bg-violet-100 text-[#7C3AED] dark:bg-white/10 dark:text-violet-200'
                          : 'text-[#4B5563] dark:text-slate-300'
                      }`}
                    >
                      {item.label}
                    </a>
                  )
                })}
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    navigate('/app')
                  }}
                  className="mt-2 rounded-2xl bg-[#7C3AED] px-4 py-3 text-sm font-semibold text-white"
                >
                  Try App
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-violet-50/70 to-cyan-50/40 dark:from-[#0F0F1A] dark:via-[#171727] dark:to-[#0F0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_28%),radial-gradient(circle_at_top_left,rgba(124,58,237,0.15),transparent_32%)]" />
          <div className="mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              transition={{ duration: 0.65 }}
              className="relative z-10 flex flex-col justify-center"
            >
              <span className="mb-5 inline-flex w-fit items-center rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#7C3AED] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-violet-200">
                Organize your life, one task at a time
              </span>
              <h1 className="max-w-2xl text-6xl font-black tracking-tight text-[#1E1E2E] sm:text-7xl lg:text-[5.7rem] dark:text-white">
                Task management that feels
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] bg-clip-text text-transparent">
                  {' '}electric.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B5563] dark:text-slate-300">
                TaskFlow blends smart reminders, beautiful collaboration, and calm productivity in a modern interface built for focus.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ActionButton
                  href="/app"
                  className="taskflow-cta"
                  onClick={(event) => {
                    event.preventDefault()
                    navigate('/app')
                  }}
                >
                  Start free <FaArrowRight />
                </ActionButton>
                <ActionButton href="#demo" variant="secondary" onClick={(event) => handleAnchor(event, '#demo')}>
                  Watch demo
                </ActionButton>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm font-semibold text-[#4B5563] dark:text-slate-300">
                {['Cross-platform sync', 'Dark mode ready', 'Team collaboration'].map((item) => (
                  <div key={item} className="rounded-2xl border border-violet-200 bg-white px-4 py-4 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="demo"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="relative mx-auto max-w-xl rounded-[2rem] border border-violet-200 bg-white/90 p-4 shadow-[0_25px_80px_rgba(124,58,237,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                {heroParticles.map((particle, index) => (
                  <motion.span
                    key={index}
                    className="absolute rounded-full bg-white/80 blur-[1px] dark:bg-cyan-200/70"
                    style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size }}
                    animate={{ y: [0, -14, 0], x: [0, 7, 0], opacity: [0.25, 0.95, 0.25] }}
                    transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
                  />
                ))}
                <div className="rounded-[1.5rem] border border-violet-200 bg-gradient-to-br from-[#7C3AED] via-[#A855F7] to-[#06B6D4] p-5 text-white shadow-[0_18px_50px_rgba(124,58,237,0.28)] dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm/6 uppercase tracking-[0.28em] text-white/80">TaskFlow dashboard</p>
                      <h2 className="mt-2 text-2xl font-bold">Your productive day, visualized</h2>
                    </div>
                    <span className="rounded-full bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                      Sync on
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[1.5rem] bg-white/15 p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-[#1E1E2E] shadow-sm">
                        <div>
                          <p className="text-sm font-bold">Today’s focus</p>
                          <p className="text-xs text-[#4B5563]">7 tasks • 3 priorities</p>
                        </div>
                        <FaCheckCircle className="text-[#7C3AED]" />
                      </div>
                      <div className="mt-4 space-y-3">
                        {['Finalize hero copy', 'Review design tokens', 'Ship landing page'].map((task, index) => (
                          <div key={task} className="flex items-center justify-between rounded-2xl bg-white/12 px-4 py-3 text-sm font-medium">
                            <div className="flex items-center gap-3">
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                                {index + 1}
                              </span>
                              <span>{task}</span>
                            </div>
                            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">High</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <div className="rounded-[1.5rem] bg-white p-4 text-[#1E1E2E] shadow-sm">
                        <p className="text-sm font-bold">Weekly progress</p>
                        <div className="mt-4 flex items-end gap-2">
                          {[38, 54, 46, 68, 74, 88, 92].map((height, index) => (
                            <div key={index} className="flex flex-1 flex-col items-center gap-2">
                              <div className="w-full rounded-t-2xl bg-gradient-to-t from-[#7C3AED] to-[#06B6D4]" style={{ height: `${height}px` }} />
                              <span className="text-[10px] text-[#4B5563]">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[1.5rem] bg-white p-4 text-[#1E1E2E] shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED]">
                            <FaRocket />
                          </div>
                          <div>
                            <p className="text-sm font-bold">Task velocity</p>
                            <p className="text-sm text-[#4B5563]">13 completed this week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionHeading
          id="stats"
          label="Trusted by modern teams"
          title="Built to look sharp, feel crisp, and keep momentum visible."
          subtitle="A clear view of adoption, progress, and reliability."
        >
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <SurfaceCard
                as={motion.article}
                key={label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={sectionVariants}
                transition={{ duration: 0.45 }}
                className="p-6 text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-[#7C3AED] dark:bg-white/10 dark:text-violet-200">
                  <Icon />
                </div>
                <p className="mt-6 text-4xl font-black text-[#1E1E2E] dark:text-white">{value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#7C3AED]">{label}</p>
              </SurfaceCard>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="features"
          label="Features"
          title="Everything you need for calm, productive task management."
          subtitle="High-contrast cards, bold typography, and responsive layouts tuned for clarity."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map(({ title, description, icon: Icon, iconClass }) => (
              <SurfaceCard
                as={motion.article}
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                transition={{ duration: 0.45 }}
                className="group relative overflow-hidden p-6"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${iconClass}`}>
                  <Icon />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#1E1E2E] dark:text-white">{title}</h3>
                <p className="mt-3 text-base leading-7 text-[#374151] dark:text-slate-300">{description}</p>
              </SurfaceCard>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="how-it-works"
          label="How It Works"
          title="A simple flow from capture to completion."
          subtitle="Connect each step with a dotted line and keep the journey easy to follow."
        >
          <div className="relative grid gap-6 lg:grid-cols-3 lg:pt-10">
            <div className="absolute left-10 right-10 top-20 hidden border-t-2 border-dashed border-violet-300/70 lg:block" />
            {steps.map((step, index) => (
              <SurfaceCard
                as={motion.article}
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative z-10 p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C3AED] text-white shadow-[0_14px_30px_rgba(124,58,237,0.25)]">
                  <step.icon />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1E1E2E] dark:text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#4B5563] dark:text-slate-300">{step.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="testimonials"
          label="Testimonials"
          title="Loved by people who want productivity without the clutter."
          subtitle="Real-feeling demo testimonials with 5-star ratings for polish."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <SurfaceCard
                as={motion.figure}
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                transition={{ duration: 0.45 }}
                className="p-6"
              >
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <blockquote className="mt-5 text-lg leading-8 text-[#1E1E2E] dark:text-slate-100">“{item.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] text-white">
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="font-bold text-[#1E1E2E] dark:text-white">{item.name}</p>
                    <p className="text-sm text-[#4B5563] dark:text-slate-300">{item.role}</p>
                  </div>
                </figcaption>
              </SurfaceCard>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="pricing"
          label="Pricing"
          title="Pick the plan that fits your workflow."
          subtitle="Hover animations and glow effects make the tiers feel alive."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <SurfaceCard
                as={motion.article}
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                transition={{ duration: 0.45 }}
                featured={plan.featured}
                className={`p-6 ${plan.featured ? 'bg-[#7C3AED] text-white' : ''}`}
              >
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] ${plan.featured ? 'bg-white/15 text-violet-50' : 'bg-violet-100 text-[#7C3AED] dark:bg-white/10 dark:text-violet-200'}`}>
                  {plan.badge}
                </span>
                <div className="mt-6 flex items-end gap-2">
                  <p className="text-5xl font-black tracking-tight">{plan.price}</p>
                  <span className={`mb-2 text-sm font-semibold ${plan.featured ? 'text-violet-100' : 'text-[#4B5563] dark:text-slate-300'}`}>
                    /mo
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-3 text-sm font-medium ${plan.featured ? 'text-violet-50' : 'text-[#1E1E2E] dark:text-slate-100'}`}>
                      <FaCheckCircle className={plan.featured ? 'text-cyan-200' : 'text-[#7C3AED]'} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ActionButton
                  type="button"
                  variant={plan.featured ? 'secondary' : 'primary'}
                  className={`mt-8 w-full ${plan.featured ? 'bg-white text-[#7C3AED] hover:bg-cyan-50' : ''}`}
                >
                  {plan.cta}
                </ActionButton>
              </SurfaceCard>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="faq"
          label="FAQ"
          title="Common questions, answered clearly."
          subtitle="A tidy accordion keeps the answers compact and easy to scan."
        >
          <SurfaceCard as="div" className="mx-auto max-w-3xl divide-y divide-violet-200 dark:divide-white/10">
            {faqs.map((faq, index) => (
              <FaqItem key={faq.question} faq={faq} index={index} />
            ))}
          </SurfaceCard>
        </SectionHeading>
      </main>

      <footer className="border-t border-violet-200 bg-slate-50/90 dark:border-white/5 dark:bg-[#141421]/90">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.75fr_0.9fr] lg:px-8">
          <div>
            <p className="text-2xl font-black text-[#1E1E2E] dark:text-white">TaskFlow</p>
            <p className="mt-4 max-w-md leading-7 text-[#4B5563] dark:text-slate-300">
              A modern landing page concept for a smart todo application, built for clarity, responsiveness, and conversion.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {footerSocials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-[#7C3AED] transition hover:-translate-y-0.5 hover:border-[#06B6D4] hover:text-[#06B6D4] dark:border-white/10 dark:bg-white/5 dark:text-violet-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#7C3AED]">Links</p>
            <div className="mt-4 flex flex-col gap-3 text-[#4B5563] dark:text-slate-300">
              {['Features', 'Pricing', 'FAQ', 'Privacy'].map((link) => (
                <a key={link} href="#" className="transition hover:text-[#7C3AED] dark:hover:text-cyan-200">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#7C3AED]">Newsletter</p>
            <p className="mt-4 leading-7 text-[#4B5563] dark:text-slate-300">
              Get product updates, feature launches, and productivity tips.
            </p>
            <form className="mt-4 flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm text-[#1E1E2E] outline-none transition placeholder:text-[#6B7280] focus:border-[#06B6D4] dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              <button type="submit" className="rounded-2xl bg-[#7C3AED] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#06B6D4]">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-violet-200 py-5 text-center text-sm text-[#4B5563] dark:border-white/5 dark:text-slate-400">
          © 2026 TaskFlow. Built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.
        </div>
      </footer>

      <AnimatePresence>
        {cookieVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl border border-violet-200 bg-white p-4 shadow-[0_22px_60px_rgba(124,58,237,0.18)] md:flex-row md:items-center md:justify-between dark:border-white/10 dark:bg-[#151525]"
          >
            <div>
              <p className="font-bold text-[#1E1E2E] dark:text-white">Quick notification</p>
              <p className="text-sm text-[#4B5563] dark:text-slate-300">
                TaskFlow uses a small banner so you can dismiss updates once and keep browsing.
              </p>
            </div>
            <button
              type="button"
              onClick={dismissCookie}
              className="rounded-2xl bg-[#7C3AED] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#06B6D4]"
            >
              Got it
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7C3AED] text-white shadow-[0_18px_42px_rgba(124,58,237,0.28)] transition hover:bg-[#06B6D4]"
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function TodoPage({ navigate, darkMode, setDarkMode }) {
  const [tasks, setTasks] = useState(() => loadTasks())
  const [form, setForm] = useState(emptyTaskTemplate)
  const [filterMode, setFilterMode] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('Work')
  const [sortBy, setSortBy] = useState('dateAdded')

  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        left: `${(index * 17) % 100}%`,
        delay: (index % 6) * 0.12,
        duration: 2.4 + (index % 4) * 0.3,
        rotate: index * 15,
        size: 8 + (index % 4) * 2,
        color: confettiPalette[index % confettiPalette.length],
      })),
    [],
  )

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const completedCount = tasks.filter((task) => task.completed).length
  const progress = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0
  const allCompleted = tasks.length > 0 && completedCount === tasks.length

  const visibleTasks = useMemo(() => {
    let list = [...tasks]

    if (filterMode === 'active') {
      list = list.filter((task) => !task.completed)
    }

    if (filterMode === 'completed') {
      list = list.filter((task) => task.completed)
    }

    if (filterMode === 'category') {
      list = list.filter((task) => task.category === selectedCategory)
    }

    if (sortBy === 'dateAdded') {
      list.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    }

    if (sortBy === 'dueDate') {
      list.sort((a, b) => {
        const aDate = a.dueDate || '9999-12-31'
        const bDate = b.dueDate || '9999-12-31'
        return aDate.localeCompare(bDate)
      })
    }

    if (sortBy === 'priority') {
      list.sort((a, b) => priorityMeta[a.priority].rank - priorityMeta[b.priority].rank)
    }

    return list
  }, [filterMode, selectedCategory, sortBy, tasks])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.title.trim()) return

    setTasks((current) => [
      {
        id: createTaskId(),
        title: form.title.trim(),
        priority: form.priority,
        dueDate: form.dueDate,
        category: form.category,
        completed: false,
        createdAt: new Date().toISOString(),
      },
      ...current,
    ])
    setForm(emptyTaskTemplate)
    setFilterMode('all')
  }

  const toggleTask = (id) => {
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id) => {
    const task = tasks.find((entry) => entry.id === id)
    const confirmed = window.confirm(`Delete “${task?.title ?? 'this task'}”?`)
    if (!confirmed) return
    setTasks((current) => current.filter((entry) => entry.id !== id))
  }

  const clearCompleted = () => {
    setTasks((current) => current.filter((task) => !task.completed))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/70 to-cyan-50/40 text-[#1E1E2E] transition-colors duration-300 dark:from-[#0F0F1A] dark:via-[#121222] dark:to-[#0F0F1A] dark:text-white">
      <header className="sticky top-0 z-40 border-b border-violet-200/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0F0F1A]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-bold text-[#7C3AED] shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-[#06B6D4] dark:border-white/10 dark:bg-white/5 dark:text-violet-200"
            >
              <FaChevronLeft /> Back to site
            </button>
            <div>
              <p className="text-2xl font-black tracking-tight text-[#7C3AED]">TaskFlow</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7C3AED]">Public Todo App</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-bold text-[#1E1E2E] sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
              {completedCount} / {tasks.length || 0} complete
            </span>
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-[#7C3AED] transition hover:border-cyan-300 hover:text-[#06B6D4] dark:border-white/10 dark:bg-white/5 dark:text-violet-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-6 rounded-[2rem] border border-violet-200 bg-white p-6 shadow-[0_16px_45px_rgba(124,58,237,0.08)] dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#7C3AED]">Your workspace</p>
              <h1 className="mt-2 text-3xl font-black text-[#1E1E2E] dark:text-white">Public Todo App</h1>
              <p className="mt-2 max-w-2xl text-[#4B5563] dark:text-slate-300">
                Add tasks, prioritize them, set due dates, and keep everything synced in localStorage. No login required.
              </p>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:w-[520px]">
              <div className="rounded-2xl bg-violet-50 p-4 dark:bg-white/5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Tasks</p>
                <p className="mt-2 text-2xl font-black text-[#1E1E2E] dark:text-white">{tasks.length}</p>
              </div>
              <div className="rounded-2xl bg-cyan-50 p-4 dark:bg-white/5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#06B6D4]">Completed</p>
                <p className="mt-2 text-2xl font-black text-[#1E1E2E] dark:text-white">{completedCount}</p>
              </div>
              <div className="rounded-2xl bg-pink-50 p-4 dark:bg-white/5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC4899]">Open</p>
                <p className="mt-2 text-2xl font-black text-[#1E1E2E] dark:text-white">{tasks.length - completedCount}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-violet-200 bg-white p-5 shadow-[0_16px_45px_rgba(124,58,237,0.08)] dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED]">
                  <FaFilter />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#1E1E2E] dark:text-white">Filters</p>
                  <p className="text-sm text-[#4B5563] dark:text-slate-300">Switch views instantly.</p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                {[
                  { key: 'all', label: 'All Tasks', count: tasks.length },
                  { key: 'active', label: 'Active', count: tasks.filter((task) => !task.completed).length },
                  { key: 'completed', label: 'Completed', count: completedCount },
                ].map((item) => {
                  const active = filterMode === item.key
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setFilterMode(item.key)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-semibold transition ${
                        active
                          ? 'bg-violet-100 text-[#7C3AED] dark:bg-white/10 dark:text-violet-200'
                          : 'bg-slate-50 text-[#4B5563] hover:bg-violet-50 dark:bg-white/5 dark:text-slate-300'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="rounded-full bg-white px-2 py-1 text-xs font-bold text-[#7C3AED] dark:bg-[#0F0F1A] dark:text-violet-200">{item.count}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-violet-200 bg-white p-5 shadow-[0_16px_45px_rgba(124,58,237,0.08)] dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06B6D4]/10 text-[#06B6D4]">
                  <FaTag />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#1E1E2E] dark:text-white">By Category</p>
                  <p className="text-sm text-[#4B5563] dark:text-slate-300">Filter by task type.</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {appCategories.map((category) => {
                  const active = filterMode === 'category' && selectedCategory === category
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setFilterMode('category')
                        setSelectedCategory(category)
                      }}
                      className={`rounded-2xl px-3 py-3 text-sm font-semibold transition ${
                        active
                          ? 'bg-[#7C3AED] text-white'
                          : `${categoryMeta[category].chip} hover:-translate-y-0.5`
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={() => {
                  setFilterMode('all')
                  setSelectedCategory('Work')
                }}
                className="mt-4 w-full rounded-2xl border border-violet-200 px-4 py-3 text-sm font-bold text-[#7C3AED] transition hover:border-cyan-300 hover:text-[#06B6D4] dark:border-white/10 dark:text-violet-200"
              >
                Reset category view
              </button>
            </div>

            <div className="rounded-[2rem] border border-violet-200 bg-white p-5 shadow-[0_16px_45px_rgba(124,58,237,0.08)] dark:border-white/10 dark:bg-white/5">
              <label className="text-sm font-bold uppercase tracking-[0.35em] text-[#7C3AED]">Sort By</label>
              <div className="relative mt-3">
                <FaSortAmountDown className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]" />
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="w-full rounded-2xl border border-violet-200 bg-white py-3 pl-11 pr-4 text-[#1E1E2E] outline-none transition focus:border-[#06B6D4] dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={clearCompleted}
                  className="w-full rounded-2xl bg-[#7C3AED] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#06B6D4]"
                >
                  Clear completed tasks
                </button>
                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Progress</p>
                  <p className="mt-2 text-2xl font-black text-[#1E1E2E] dark:text-white">{completedCount} of {tasks.length || 0}</p>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-white dark:bg-[#0F0F1A]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-violet-200 bg-white p-5 shadow-[0_16px_45px_rgba(124,58,237,0.08)] dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid gap-4 xl:grid-cols-[2fr_160px_160px_180px_auto]">
                <div>
                  <label className="text-sm font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Task</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                    placeholder="What do you need to do?"
                    className="mt-2 w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-[#1E1E2E] outline-none transition placeholder:text-[#6B7280] focus:border-[#06B6D4] dark:border-white/10 dark:bg-[#0F0F1A] dark:text-white"
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        handleSubmit(event)
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="text-sm font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Priority</label>
                  <select
                    value={form.priority}
                    onChange={(event) => setForm((current) => ({ ...current, priority: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-[#1E1E2E] outline-none transition focus:border-[#06B6D4] dark:border-white/10 dark:bg-[#0F0F1A] dark:text-white"
                  >
                    {priorityOptions.map((priority) => (
                      <option key={priority} value={priority}>
                        {priorityMeta[priority].label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Due Date</label>
                  <input
                    type="date"
                    value={form.dueDate}
                    onChange={(event) => setForm((current) => ({ ...current, dueDate: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-[#1E1E2E] outline-none transition focus:border-[#06B6D4] dark:border-white/10 dark:bg-[#0F0F1A] dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Category</label>
                  <select
                    value={form.category}
                    onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-[#1E1E2E] outline-none transition focus:border-[#06B6D4] dark:border-white/10 dark:bg-[#0F0F1A] dark:text-white"
                  >
                    {appCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#7C3AED] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#06B6D4]"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </form>

            <div className="rounded-[2rem] border border-violet-200 bg-white p-5 shadow-[0_16px_45px_rgba(124,58,237,0.08)] dark:border-white/10 dark:bg-white/5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Task List</p>
                  <p className="mt-1 text-[#4B5563] dark:text-slate-300">
                    {visibleTasks.length} visible • {tasks.length} total • {completedCount} completed
                  </p>
                </div>
                <div className="rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-[#7C3AED] dark:bg-white/5 dark:text-violet-200">
                  {filterMode === 'category' ? `${selectedCategory} tasks` : 'All tasks'}
                </div>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-[#0F0F1A]">
                <div className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-violet-200 bg-white p-4 shadow-[0_16px_45px_rgba(124,58,237,0.08)] dark:border-white/10 dark:bg-white/5">
              <AnimatePresence>
                {allCompleted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
                  >
                    {confettiPieces.map((piece, index) => (
                      <motion.span
                        key={index}
                        className="absolute rounded-sm"
                        style={{ left: piece.left, top: '-8%', width: piece.size, height: piece.size * 2, backgroundColor: piece.color }}
                        animate={{ y: ['0%', '130%'], rotate: [0, piece.rotate, piece.rotate * 2], opacity: [1, 1, 0] }}
                        transition={{ duration: piece.duration, delay: piece.delay, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
                      />
                    ))}
                    <div className="absolute inset-x-0 top-6 mx-auto w-fit rounded-full bg-[#7C3AED] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(124,58,237,0.28)]">
                      All tasks completed — nice work ✨
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {visibleTasks.length ? (
                    visibleTasks.map((task) => {
                      const category = categoryMeta[task.category]
                      const priority = priorityMeta[task.priority]
                      return (
                        <motion.article
                          key={task.id}
                          layout
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -14, scale: 0.98 }}
                          transition={{ duration: 0.22 }}
                          className="rounded-[1.5rem] border border-violet-200 bg-white p-4 shadow-[0_10px_28px_rgba(124,58,237,0.06)] dark:border-white/10 dark:bg-[#151525]"
                        >
                          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div className="flex min-w-0 gap-4">
                              <button
                                type="button"
                                onClick={() => toggleTask(task.id)}
                                className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition ${
                                  task.completed
                                    ? 'border-emerald-500 bg-emerald-500 text-white'
                                    : 'border-violet-300 bg-white text-transparent hover:border-[#06B6D4] dark:bg-[#0F0F1A]'
                                }`}
                                aria-label="Toggle task completion"
                              >
                                <FaCheck />
                              </button>
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className={`text-lg font-bold text-[#1E1E2E] dark:text-white ${task.completed ? 'line-through decoration-2 decoration-emerald-500 opacity-70' : ''}`}>
                                    {task.title}
                                  </h3>
                                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${priority.chip}`}>{priority.label}</span>
                                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${category.chip}`}>{task.category}</span>
                                </div>
                                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#4B5563] dark:text-slate-300">
                                  <span className="inline-flex items-center gap-2">
                                    <FaCalendarAlt className="text-[#7C3AED]" />
                                    {formatDate(task.dueDate)}
                                  </span>
                                  <span className="inline-flex items-center gap-2">
                                    <FaRegCircle className="text-[#06B6D4]" />
                                    Added {new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(task.createdAt))}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => deleteTask(task.id)}
                              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 text-[#7C3AED] transition hover:border-red-300 hover:text-red-600 dark:border-white/10 dark:text-violet-200"
                              aria-label="Delete task"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </motion.article>
                      )
                    })
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex min-h-[380px] flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-violet-300 bg-violet-50/60 p-10 text-center dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl text-[#7C3AED] shadow-[0_14px_35px_rgba(124,58,237,0.14)] dark:bg-[#0F0F1A]">
                        <FaInbox />
                      </div>
                      <h3 className="mt-6 text-2xl font-black text-[#1E1E2E] dark:text-white">No tasks yet</h3>
                      <p className="mt-3 max-w-md text-[#4B5563] dark:text-slate-300">
                        Add your first task above. This empty state keeps the page clean and gives you a clear place to begin.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className="p-6">
      <button type="button" onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between gap-4 text-left">
        <span className="text-lg font-bold text-[#1E1E2E] dark:text-white">{faq.question}</span>
        <span className="text-2xl text-[#7C3AED]">{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden text-[#4B5563] dark:text-slate-300"
          >
            {faq.answer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default App
