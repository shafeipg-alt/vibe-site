import { repos } from '../data/repos'

function LanguagePill({ language }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {language}
    </span>
  )
}

function RepoCard({ repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className="group relative block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" aria-hidden="true">
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/15 to-indigo-500/20 blur-[12px]" />
      </div>

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <LanguagePill language={repo.language} />
          <span className="text-xs text-white/50">★ {repo.stars}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-white">
          {repo.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {repo.description}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-200/90">
          查看仓库
          <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </a>
  )
}

export default function RepoList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {repos.map((repo) => (
        <RepoCard key={repo.url} repo={repo} />
      ))}
    </div>
  )
}

