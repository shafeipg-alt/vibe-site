import { useState } from 'react'

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  // 兼容性兜底：通过临时 input 复制
  const input = document.createElement('input')
  input.value = text
  input.setAttribute('readonly', '')
  input.style.position = 'absolute'
  input.style.left = '-9999px'
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}

function ContactRow({ label, value, onCopy }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs font-medium text-white/60">{label}</div>
      <div className="flex items-center justify-between gap-3">
        <div className="truncate text-sm text-white/85">{value}</div>
        <button
          type="button"
          onClick={onCopy}
          className="shrink-0 rounded-lg border border-white/10 bg-white/0 px-3 py-1 text-xs font-medium text-white/75 transition hover:bg-white/10"
        >
          复制
        </button>
      </div>
    </div>
  )
}

export default function ContactCard() {
  const [copied, setCopied] = useState('')
  const email = 'hello@shafeipg.com'
  const githubUrl = 'https://github.com/shafeipg'

  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-neon sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm text-white/70">
            你可以直接复制联系方式，或者从下面的链接跳转到仓库主页。
          </p>
          <p className="mt-2 text-xs text-white/50">
            提示：把 `ContactCard.jsx` 里的 `email` / `githubUrl` 换成你自己的即可。
          </p>
        </div>
        <div className="min-h-[24px] text-xs text-fuchsia-200/80">
          {copied ? `已复制：${copied}` : ' '}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <ContactRow
          label="邮箱"
          value={email}
          onCopy={async () => {
            await copyText(email)
            setCopied('邮箱')
            setTimeout(() => setCopied(''), 1200)
          }}
        />
        <ContactRow
          label="GitHub"
          value={githubUrl}
          onCopy={async () => {
            await copyText(githubUrl)
            setCopied('GitHub 链接')
            setTimeout(() => setCopied(''), 1200)
          }}
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/90 via-cyan-400/70 to-indigo-500/80 px-5 py-3 text-sm font-semibold text-black shadow-neon transition hover:brightness-110"
        >
          打开 GitHub 仓库
        </a>
        <div className="text-xs text-white/55">
          邮件建议标题格式：`[vibe-site] 你好 Shafeipg`
        </div>
      </div>
    </div>
  )
}

