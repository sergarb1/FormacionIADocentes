// Compila y exporta todos los decks de Slidev del proyecto.
//   node build-todos.mjs          → build SPA (dist/<slug>/)
//   node build-todos.mjs build pdf → build + export de PDF
//   node build-todos.mjs pdf      → solo export de PDF
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const BASE = '/FormacionIADocentes/'
const mode = process.argv[2] || 'build'
const alsoPdf = process.argv[3] === 'pdf' || mode === 'pdf'

// slug exportPdf: nombre del PDF en la raíz del proyecto
const DECKS = [
  { entry: '01-freebuff-opencode.md',  slug: '01-freebuff-opencode',   pdf: 'freebuff-opencode.pdf',    base: true },
  { entry: '02-pensamiento-critico.md', slug: '02-pensamiento-critico', pdf: 'pensamiento-critico.pdf',  base: true },
  { entry: '03-crear-imagenes.md',      slug: '03-crear-imagenes',     pdf: 'crear-imagenes-educativas.pdf', base: true },
  { entry: '04-infografias-canva.md',   slug: '04-infografias-canva',  pdf: 'infografias-con-ia-y-canva.pdf', base: true },
  { entry: '05-notebooklm.md',          slug: '05-notebooklm',         pdf: 'note-booklm-google.pdf',    base: true },
  { entry: '06-opencode-freebuff.md',   slug: '06-opencode-freebuff',  pdf: 'opencode-freebuff.pdf',     base: true },
]

function run(args) {
  const res = spawnSync('npx', ['slidev', ...args], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    cwd: import.meta.dirname,
  })
  if (res.status !== 0) {
    console.error(`\n❌ Falló: slidev ${args.join(' ')}\n`)
    process.exit(res.status ?? 1)
  }
}

function chromePath() {
  for (const p of [
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ]) if (existsSync(p)) return p
  return undefined
}

mkdirSync('dist', { recursive: true })

for (const deck of DECKS) {
  if (mode !== 'pdf') {
    const out = join('dist', deck.slug)
    console.log(`\n🔨 ${deck.entry} → ${out}`)
    const args = ['build', deck.entry, '--out', out]
    if (deck.base) args.push('--base', BASE + deck.slug + '/')
    run(args)
  }
  if (alsoPdf) {
    console.log(`\n📄 Exportando PDF de ${deck.entry}`)
    const args = ['export', deck.entry, '--output', join('..', deck.pdf), '--wait', '2000']
    const chrome = chromePath()
    if (chrome) args.push('--executable-path', chrome)
    run(args)
  }
}

console.log('\n✅ Todos los decks procesados.')
