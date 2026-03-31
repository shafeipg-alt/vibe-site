import { useEffect, useMemo, useState } from 'react'
import AboutSection from './components/AboutSection'
import RepoList from './components/RepoList'
import ContactCard from './components/ContactCard'
import Reveal from './components/Reveal'

export default function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 默认启用深色模式（Tailwind 的 `dark:` 变体依赖这个 class）
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const next = max > 0 ? window.scrollY / max : 0
      setProgress(next)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = useMemo(
    () => [
      { id: 'about', label: '个人简介' },
      { id: 'repos', label: 'GitHub 仓库' },
      { id: 'contact', label: '联系我' },
    ],
    [],
  )

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        跳到主要内容
      </a>

      <div className="noise" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500/80 via-cyan-400/70 to-indigo-500/80 shadow-neon" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white/95">
                Shafeipg 的开源灵感空间
              </div>
              <div className="text-xs text-white/60">Neon notes · Deep scroll</div>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition hover:text-white/95"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="h-[2px] w-full bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500"
            style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
          />
        </div>
      </header>

      <main>
        <section className="px-5 pb-14 pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Reveal delay={0}>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  把开源灵感，写成你的个人发光宇宙
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                  深色模式 · 流动霓虹渐变背景 · 丝滑滚动进入动画。下面的内容会用更“顺手”的方式展示：简介、仓库列表、以及一个清晰的联系入口。
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#repos"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 shadow-neon transition hover:bg-white/10 hover:text-white"
                  >
                    查看 GitHub 仓库
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/90 via-cyan-400/70 to-indigo-500/80 px-5 py-3 text-sm font-medium text-black shadow-neon transition hover:brightness-110"
                  >
                    联系我
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 px-5 pb-14">
          <div className="mx-auto max-w-5xl">
            <Reveal delay={0}>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-14 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500" />
                <h2 className="text-xl font-semibold text-white">个人简介</h2>
              </div>
            </Reveal>
            <AboutSection />
          </div>
        </section>

        <section id="repos" className="scroll-mt-24 px-5 pb-14">
          <div className="mx-auto max-w-5xl">
            <Reveal delay={0}>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-14 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500" />
                <h2 className="text-xl font-semibold text-white">GitHub 仓库列表展示区</h2>
              </div>
            </Reveal>
            <RepoList />
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 pb-20">
          <div className="mx-auto max-w-5xl">
            <Reveal delay={0}>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-14 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500" />
                <h2 className="text-xl font-semibold text-white">联系我</h2>
              </div>
            </Reveal>
            <ContactCard />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/50">
        © {year} · Shafeipg · Shafeipg 的开源灵感空间
      </footer>
    </div>
  )
}
