import Reveal from './Reveal'

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  )
}

export default function AboutSection() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-6 shadow-neon sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-wide text-white/60">
            欢迎来到
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Shafeipg 的开源灵感空间
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            这里收集我在开源道路上的碎片：能跑起来的想法、能被复用的组件、以及把“灵感”落地成可持续迭代的过程。
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-medium text-white/60">我在做什么</div>
              <div className="mt-2 text-sm text-white/85">
                前端产品原型 · 组件化实践 · 动效与可用性
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-medium text-white/60">我的写作方式</div>
              <div className="mt-2 text-sm text-white/85">
                以问题为起点，用清晰的结构记录取舍与结论
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:max-w-[260px]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-medium text-white/60">核心关键词</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag>Open Source</Tag>
              <Tag>Neon UI</Tag>
              <Tag>Deep Scroll</Tag>
              <Tag>Readable Code</Tag>
              <Tag>Smooth Motion</Tag>
              <Tag>Design Systems</Tag>
            </div>
          </div>

          <Reveal delay={160}>
            <div className="mt-4 text-xs text-white/55">
              小提示：滑动页面，会看到渐显进入的“丝滑”动画。
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

