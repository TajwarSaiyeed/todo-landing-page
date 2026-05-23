import { useEffect, useMemo, useState } from 'react'
import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaComments,
  FaMoon,
  FaRegClock,
  FaSun,
  FaSyncAlt,
  FaTasks,
  FaUsers,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Smart Reminders',
    description: 'Stay on track with intelligent alerts that surface the right task at the right moment.',
    icon: FaRegClock,
  },
  {
    title: 'Team Collaboration',
    description: 'Share lists, assign work, and keep everyone aligned in one elegant workspace.',
    icon: FaUsers,
  },
  {
    title: 'Progress Tracking',
    description: 'Visualize momentum with clear progress insights and celebratory completion states.',
    icon: FaChartLine,
  },
  {
    title: 'Cross Platform',
    description: 'Pick up your tasks seamlessly across desktop, tablet, and mobile devices.',
    icon: FaSyncAlt,
  },
  {
    title: 'Dark Mode',
    description: 'A polished dark theme that keeps your focus sharp day or night.',
    icon: FaMoon,
  },
  {
    title: 'Offline Support',
    description: 'Keep working even when the connection drops — your tasks stay with you.',
    icon: FaCloud,
  },
]

const steps = [
  {
    title: 'Capture tasks instantly',
    description: 'Add tasks in seconds with rich details, priority tags, and due dates.',
  },
  {
    title: 'Organize by context',
    description: 'Group work by project, team, or life area so nothing gets buried.',
  },
  {
    title: 'Finish with confidence',
    description: 'Track progress, celebrate wins, and keep the next action in view.',
  },
]

const testimonials = [
  {
    name: 'Ariana Patel',
    role: 'Product Designer',
    quote:
      'TaskFlow makes my daily planning feel calm and intentional. It looks premium and actually keeps me organized.',
  },
  {
    name: 'Marcus Reed',
    role: 'Startup Founder',
    quote:
      'Our team finally has a todo app that feels fast, beautiful, and practical for shared execution.',
  },
  {
    name: 'Leila Johnson',
    role: 'Operations Lead',
    quote:
      'The dark mode, reminders, and clean dashboard make it the easiest tool in our stack to adopt.',
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

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', darkMode)
    root.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  const headlineGradient = useMemo(
    () =>
      darkMode
        ? 'from-white via-violet-100 to-violet-300'
        : 'from-slate-900 via-violet-900 to-violet-700',
    [darkMode],
  )

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-ink-950 dark:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/75 backdrop-blur-xl dark:border-white/5 dark:bg-ink-950/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-lg font-semibold tracking-tight text-violet-600 dark:text-violet-300">
              TaskFlow
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Smart Todo App
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href="#pricing"
              className="hidden rounded-full border border-violet-500/20 bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-500 sm:inline-flex"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          className={`relative overflow-hidden ${darkMode ? 'bg-hero-grid-dark' : 'bg-hero-grid'}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16),transparent_55%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex flex-col justify-center"
            >
              <span className="mb-5 inline-flex w-fit items-center rounded-full border border-violet-500/20 bg-white/80 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm backdrop-blur dark:bg-white/5 dark:text-violet-200">
                Organize your life, one task at a time
              </span>
              <h1 className={`max-w-xl bg-gradient-to-r ${headlineGradient} bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl`}>
                Build momentum with a todo app that feels effortless.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                TaskFlow brings together smart reminders, beautiful collaboration, and calm productivity in a modern interface designed for focus.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-500"
                >
                  Start free <FaArrowRight />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-base font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  Explore features
                </a>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm text-slate-600 dark:text-slate-300">
                {[
                  'Cross-platform sync',
                  'Dark mode ready',
                  'Team collaboration',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/70 p-4 text-center shadow-soft dark:bg-white/5">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="relative mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/80 p-4 shadow-glow backdrop-blur-xl dark:bg-white/5">
                <div className="flex items-center justify-between rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 dark:border-white/5 dark:bg-ink-900">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Today’s focus</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">7 tasks • 3 priorities</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">Synced</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-violet-600 to-fuchsia-600 p-6 text-white shadow-lg dark:border-white/5">
                    <p className="text-sm/6 uppercase tracking-[0.25em] text-violet-100/80">Mockup</p>
                    <h2 className="mt-3 text-2xl font-semibold">Your polished dashboard</h2>
                    <p className="mt-2 max-w-sm text-sm text-violet-100/90">
                      A beautiful placeholder for your app interface, complete with cards, progress, and focus views.
                    </p>
                    <div className="mt-6 grid gap-3">
                      {['Finalize hero copy', 'Review design tokens', 'Ship landing page'].map((task, index) => (
                        <div
                          key={task}
                          className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-3">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
                              {index + 1}
                            </span>
                            <span className="text-sm font-medium">{task}</span>
                          </div>
                          <FaCheckCircle className="text-violet-100" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft dark:border-white/5 dark:bg-ink-900">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Weekly progress</p>
                      <div className="mt-4 flex items-end gap-2">
                        {[38, 54, 46, 68, 74, 88, 92].map((height, index) => (
                          <div key={index} className="flex flex-1 flex-col items-center gap-2">
                            <div
                              className="w-full rounded-t-2xl bg-gradient-to-t from-violet-600 to-violet-300"
                              style={{ height: `${height}px` }}
                            />
                            <span className="text-[10px] text-slate-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft dark:border-white/5 dark:bg-ink-900">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                          <FaTasks />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">Task velocity</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">13 completed this week</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionWrap id="features" title="Features" subtitle="Everything you need for calm, productive task management.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow dark:border-white/5 dark:bg-white/5"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/10 text-2xl text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap id="how-it-works" title="How It Works" subtitle="A simple flow from capture to completion.">
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/5 dark:bg-white/5"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-lg font-bold text-white shadow-glow">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap id="testimonials" title="Testimonials" subtitle="Trusted by people who want productivity without the clutter.">
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.figure
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/5 dark:bg-white/5"
              >
                <blockquote className="text-lg leading-8 text-slate-700 dark:text-slate-200">“{item.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600/10 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                    <FaComments />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap id="pricing" title="Pricing" subtitle="Pick the plan that fits your workflow.">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
                className={`rounded-3xl border p-6 shadow-soft transition hover:-translate-y-1 ${
                  plan.featured
                    ? 'border-violet-500 bg-violet-600 text-white shadow-glow'
                    : 'border-slate-200 bg-white dark:border-white/5 dark:bg-white/5'
                }`}
              >
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${plan.featured ? 'bg-white/15 text-violet-50' : 'bg-violet-600/10 text-violet-700 dark:text-violet-300'}`}>
                  {plan.badge}
                </span>
                <div className="mt-6 flex items-end gap-2">
                  <p className="text-5xl font-bold tracking-tight">{plan.price}</p>
                  <span className={`mb-2 text-sm ${plan.featured ? 'text-violet-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    /mo
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{plan.name}</h3>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <FaCheckCircle className={plan.featured ? 'text-violet-100' : 'text-violet-600 dark:text-violet-300'} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-8 w-full rounded-2xl px-5 py-4 text-sm font-semibold transition ${
                    plan.featured
                      ? 'bg-white text-violet-700 hover:bg-violet-50'
                      : 'bg-slate-100 text-slate-900 hover:bg-violet-600 hover:text-white dark:bg-white/10 dark:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap id="faq" title="FAQ" subtitle="Common questions, answered clearly.">
          <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-soft dark:divide-white/5 dark:border-white/5 dark:bg-white/5">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="p-6">
                <button
                  type="button"
                  onClick={() => setOpenFaq(index === openFaq ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                  <span className="text-2xl text-violet-600 dark:text-violet-300">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </SectionWrap>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50/90 dark:border-white/5 dark:bg-ink-900/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
          <div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">TaskFlow</p>
            <p className="mt-4 max-w-md leading-7 text-slate-600 dark:text-slate-300">
              A modern landing page concept for a smart todo application, built for clarity, responsiveness, and conversion.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Links
            </p>
            <div className="mt-4 flex flex-col gap-3 text-slate-600 dark:text-slate-300">
              {['Features', 'Pricing', 'FAQ', 'Privacy'].map((link) => (
                <a key={link} href="#" className="transition hover:text-violet-600 dark:hover:text-violet-300">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Newsletter
            </p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Get product updates, feature launches, and productivity tips.
            </p>
            <form className="mt-4 flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              <button type="submit" className="rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500 dark:border-white/5 dark:text-slate-400">
          © 2026 TaskFlow. Built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.
        </div>
      </footer>
    </div>
  )
}

function SectionWrap({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600 dark:text-violet-300">
          {title}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {subtitle}
        </h2>
      </div>
      {children}
    </section>
  )
}

export default App
