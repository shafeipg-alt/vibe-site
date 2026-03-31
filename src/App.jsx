export default function App() {
  const year = new Date().getFullYear()

  // 占位：请将下方链接替换为你自己的美团/大众点评链接
  const meituanUrl = 'https://meituan.example.com/your-shop'
  // 占位：请将下方链接替换为你自己的抖音团购链接
  const douyinUrl = 'https://douyin.example.com/your-shop'

  const phone = '138-0000-0000' // 占位：电话
  const wechat = 'juyicha-space' // 占位：微信号

  return (
    <div className="min-h-screen bg-[#fcfaf2] text-[#332b21]">
      <header className="border-b border-[#e4ddc8]/80 bg-[#fcfaf2]/95">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <div className="text-xl font-semibold tracking-[0.12em] sm:text-2xl">
              居易茶空间
            </div>
            <div className="mt-1 text-xs font-medium text-[#6b5a43] sm:text-sm">
              处于平易，随遇而安
            </div>
          </div>
          <div className="text-xs text-[#8c7a5d] sm:text-right">
            <div>以一盏清茶，留一刻缓慢。</div>
            <div className="mt-0.5">Welcome to JuYi Tea Space.</div>
          </div>
        </div>
      </header>

      <main>
        {/* 核心操作区 */}
        <section className="px-5 pb-10 pt-10 sm:pb-12 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-xl">
              <h1 className="text-2xl font-semibold tracking-wide sm:text-3xl">
                在城市的一隅，安放一杯属于自己的茶
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#6b5a43] sm:text-base">
                居易，不必刻意讲究排场，只要放松坐下，听水声、看茶烟，就够了。线上只保留两个入口：一个是当下要用的预约渠道，一个是最简洁的到店方式。
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <a
                href={meituanUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[60px] items-center justify-between rounded-xl border border-[#e4ddc8] bg-white/90 px-4 py-3 text-sm font-medium text-[#332b21] shadow-sm transition hover:bg-white sm:min-h-[72px] sm:px-5 sm:text-base"
              >
                <div>
                  <div>美团预约</div>
                  <div className="mt-1 text-xs font-normal text-[#8c7a5d]">
                    建议优先使用，查看当日可预约时段
                  </div>
                </div>
                <span aria-hidden="true" className="text-base text-[#7c8a4b]">
                  →
                </span>
              </a>

              <a
                href={douyinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[60px] items-center justify-between rounded-xl border border-[#e4ddc8] bg-[#f5efe0] px-4 py-3 text-sm font-medium text-[#332b21] shadow-sm transition hover:bg-[#f2ead7] sm:min-h-[72px] sm:px-5 sm:text-base"
              >
                <div>
                  <div>抖音团购</div>
                  <div className="mt-1 text-xs font-normal text-[#8c7a5d]">
                    购买团购套餐，到店出示核销即可
                  </div>
                </div>
                <span aria-hidden="true" className="text-base text-[#7c8a4b]">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 产品展示区 */}
        <section className="px-5 pb-14 sm:pb-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex items-baseline justify-between gap-3">
              <h2 className="text-lg font-semibold tracking-wide sm:text-xl">
                在这里，你可以慢慢挑
              </h2>
              <div className="hidden text-xs text-[#8c7a5d] sm:block">
                精选好茶 · 匠心茶具 · 私密茶室
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="flex flex-col rounded-2xl border border-[#e4ddc8] bg-white/95 px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3ebd9] text-sm"
                  >
                    茶
                  </span>
                  <h3 className="text-sm font-semibold sm:text-base">精选好茶</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#6b5a43] sm:text-sm">
                  根据当季气候与体感状态，推荐适合当下的一壶：龙井、岩茶、普洱、生熟茶……只取干净、稳定的一线货源。
                </p>
                <div className="mt-3 text-xs text-[#8c7a5d]">
                  参考价格：单壶 ¥68 - ¥188
                </div>
              </article>

              <article className="flex flex-col rounded-2xl border border-[#e4ddc8] bg-white/95 px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9e2cf] text-sm"
                  >
                    具
                  </span>
                  <h3 className="text-sm font-semibold sm:text-base">匠心茶具</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#6b5a43] sm:text-sm">
                  使用手工盖碗、紫砂壶与温润木托，让器物和茶汤一起“缓下来”，也为你留一点亲手泡茶的小仪式感。
                </p>
                <div className="mt-3 text-xs text-[#8c7a5d]">
                  参考价格：茶具 ¥39 起，礼盒 ¥128 起
                </div>
              </article>

              <article className="flex flex-col rounded-2xl border border-[#e4ddc8] bg-white/95 px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e4decf] text-sm"
                  >
                    室
                  </span>
                  <h3 className="text-sm font-semibold sm:text-base">私密茶室</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#6b5a43] sm:text-sm">
                  小面积包间，适合两三位朋友安静聊天，也可以一个人带书、带电脑，待上一整个下午。
                </p>
                <div className="mt-3 text-xs text-[#8c7a5d]">
                  参考价格：人均 ¥88 - ¥168
                </div>
              </article>
            </div>

            <p className="mt-5 text-xs text-[#8c7a5d] sm:hidden">
              提示：更多图片与环境展示，可在美团或抖音详情页查看。
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e4ddc8] bg-[#fcfaf2]/95">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-[#6b5a43] sm:text-sm">
            <div>联系方式：</div>
            <div className="mt-1">
              微信号：<span className="font-medium">{wechat}</span>
            </div>
            <div>
              电话：<span className="font-medium">{phone}</span>
            </div>
          </div>
          <div className="text-xs text-[#a0937a] sm:text-right">
            <div>© {year} 居易茶空间</div>
            <div className="mt-1">本页仅作简单线上介绍，一切以店内实际为准。</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
