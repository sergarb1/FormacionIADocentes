# AGENTS.md — Plan paso a paso para crear presentaciones educativas

Este archivo define el flujo de trabajo (step-by-step) para generar las
presentaciones educativas de este proyecto con **OpenCode + Freebuff**
(gratuitos) y **Slidev** (sli.dev), sustituyendo el enfoque antiguo basado
en Reveal.js + Gemini.

---

## Stack actual del proyecto

| Pieza | Herramienta | Rol |
|-------|-------------|-----|
| Framework de diapositivas | **Slidev** (sli.dev v53) | Presentaciones en HTML exportables a PDF |
| Redacción del contenido | **Freebuff** (freebuff.com) | Agente conversacional gratuito: prompts, narraciones, textos de slides |
| Generación de código / build | **OpenCode** (opencode.ai) | IDE open source con IA: scaffolding, build, export |
| Voz del audio | **edge-tts** (`es-ES-AlvaroNeural`) | Narración diapositiva a diapositiva (gratuito) |
| Hosting | **GitHub Pages** | Publicación automática desde `main` |

> Todo el stack de producción es gratuito. El deck 1 (chatbots) cita por su contenido didáctico a ChatGPT, Claude, DeepSeek y Gemini; todo lo demás se produce con Freebuff + OpenCode, sin herramientas de pago.

---

## Estructura de carpetas

```
FormacionIADocentes/
├── slidev/                        # Proyecto Slidev (npm)
│   ├── package.json               # Scripts: build, dev, export
│   ├── styles/index.css           # Estilos compartidos (todos los decks)
│   ├── global-bottom.vue          # Botón 🔊 audio narrado + reproductor
│   ├── convertir-deck.mjs         # Migrador de decks Reveal.js antiguos
│   ├── 0N-<tema>.md               # Un archivo Markdown por deck
│   └── dist/                      # Salida del build (HTML)
├── 01-…06-…/ (raíz)               # Copia de dist/ publicada en Pages
├── 0N-…pdf                        # PDFs por deck
├── audio-<tema>/                  # MP3 por diapositiva (slideNN.mp3)
└── narracion-<tema>.json          # Textos para edge-tts
```

---

## §1 · Crear un deck nuevo con Slidev (paso a paso)

### Paso 1 — Crear el archivo Markdown

`slidev/0N-<tema>.md` con headmatter:

```yaml
---
theme: default
title: <Título> · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: <nome-do-pdf>
---
```

### Paso 2 — Escribir las diapositivas

- Cada diapositiva se separa con una línea `---` entre líneas en blanco
- Al inicio de cada diapositiva (tras el separador) su audio:

```html
<audio class="deck-audio" src="../audio-<tema>/slideNN.mp3"></audio>
```

Contenido en HTML plano (los decks usan la misma familia de clases que
en Reveal.js, ya portadas a `slidev/styles/index.css`): `.g2`, `.g3`,
`.card`, `.pc`, `.pl`, `.exp`, `.exp-list`, `.tip`, `.tag <mat>`,
`.tb fb/op/canva/both`, `.tbl`, `.ftr`, `.sm`, `.fal-list`, `.f-item`,
`.cmp-grid`, `.hdr`.

### Paso 3 — ⚠️ Reglas que evitan errores de compilación

- **Nada de líneas en blanco dentro de `<pre>…</pre>`** (con o sin
  atributos). Sustitúyelas por `&nbsp;`. Si se cuelan, el build falla con
  `Element is missing end tag.`. Arreglo rápido:

  ```bash
  python3 - <<'PY'
  import re
  f = '0N-<tema>.md'
  s = open(f, encoding='utf-8').read()
  def fx(m):
      ls = m.group(0).split('\n')
      return '\n'.join([ls[0]] + ['&nbsp;' if l.strip()=='' else l for l in ls[1:-1]] + [ls[-1]])
  open(f, 'w', encoding='utf-8').write(re.sub(r'<pre[^>]*>.*?</pre>', fx, s, flags=re.S))
  PY
  ```

- No dejes restos de `</section>` sueltos (solo aplicable a decks migrados)
- Los prompts que empiezan con `1.` `-` están bien dentro del `<pre>`
  siempre que el bloque no contenga líneas en blanco

### Paso 4 — Compilar y exportar

```bash
cd slidev
npx slidev build 0N-<tema> --base "/FormacionIADocentes/0N-<tema>/"
                                       # HTML (⚠️ base ABSOLUTA con el subpath de Pages:
                                       # ni `--base ./` ni dejar el default `/`: el router interno
                                       # de Slidev no reconoce la URL y saca su 404 "Page not found")
npx slidev export 0N-<tema>.md --output ../0N-<tema>.pdf    # PDF (usa playwright-chromium)
cp -r dist/0N-<tema> ../0N-<tema>                            # publicar HTML en la raíz
```

### Paso 5 — Insertar la diapositiva nueva en `index.html`

Copia una tarjeta existente, cambia `num-N`, título, descripción, tags y
los enlaces (`<tema>/index.html` y `<tema>.pdf`). Actualiza también el
contador de diapositivas de la cabecera.

---

## §2 · Audio narrado (paso a paso)

1. Añade el `<audio class="deck-audio" src="../audio-<tema>/slideNN.mp3">`
   en cada diapositiva (Slidev reutiliza `global-bottom.vue` para el botón
   🔊/🔇 y el `<useNav>` para saber la diapositiva activa)
2. Crea `narracion-<tema>.json`:

   ```json
   {
     "_voice": "es-ES-AlvaroNeural",
     "_note": "Narración para '<tema>'",
     "slides": [
       { "id": 0, "title": "Portada", "text": "…" }
     ]
   }
   ```

3. Genera los MP3 (Windows):

   ```powershell
   pip install edge-tts
   edge-tts --voice es-ES-AlvaroNeural --text "<texto>" --write-media audio-<tema>\slide00.mp3
   ```

   o un script `generar-audio-<tema>.ps1` que recorra el JSON (ver los
   existentes en la raíz como modelo)

4. Reconstruye el deck: `cd slidev && npx slidev build … && cp -r dist/…`
   (el build enlaza `../audio-<tema>/…` con rutas relativas, sin duplicar MP3)

---

## §3 · Flujo recomendado con Freebuff + OpenCode

### Con Freebuff (rápido, sin instalar nada)

1. Entra en **freebuff.com** y describe el material: nivel, materia y formato
2. Pide borradores de prompts o textos de diapositivas en el chat
3. Pide "conviértelo en una web" si lo que necesitas es una web interactivo

### Con OpenCode (proyectos grandes)

1. `cd FormacionIADocentes && opencode`
2. Pide: "crea el deck `slidev/0N-<tema>.md` siguiendo AGENTS.md §1"
3. Pide: "compila y exporta a PDF" (§1 paso 4)
4. Revisa con "list sliding assets" o ejecutando `npm run build` en `slidev/`

### Regenerar todo (build + PDFs + copia a la raíz)

```bash
cd slidev
for f in 0*.md; do
  n="${f%.md}"
  npx slidev build $f --base "/FormacionIADocentes/$n/"
  npx slidev export $f --output ../$n.pdf
  rm -rf ../$n && cp -r "dist/$n" ../$n
done
```

---

## §4 · Convenciones de nombres

| Elemento | Patrón | Ejemplo |
|----------|--------|---------|
| Deck Markdown | `0N-<tema>.md` (en `slidev/`) | `01-ia-gratuita-docentes.md` |
| Carpeta HTML publicada | `0N-<tema>/` (raíz) | `01-ia-gratuita-docentes/` |
| PDF | `0N-<tema>.pdf` (raíz) | `01-ia-gratuita-docentes.pdf` |
| Audio | `audio-<tema>/slideNN.mp3` | `audio-ia-gratuita-docentes/slide01.mp3` |
| Narración | `narracion-<tema>.json` | `narracion-ia-gratuita-docentes.json` |
| Script audio | `generar-audio-<tema>.ps1` | `generar-audio-ia-gratuita-docentes.ps1` |
| TXT de infografía | `<tema>.txt` | `ia-gratuita-docentes.txt` |

---

## §5 · Colores por materia (tags)

| Materia | Clase | Colores |
|---------|-------|---------|
| Ciencias    | `tag g`  | `#dcfce7` / `#166534` |
| Historia    | `tag o`  | `#ffedd5` / `#9a3412` |
| Mate        | `tag p`  | `#f3e8ff` / `#6b21a8` |
| Lengua      | `tag pk` | `#fce7f3` / `#9d174d` |
| Geografía   | `tag t`  | `#ccfbf1` / `#115e59` |
| Worksheets  | `tag gy` | `#f1f5f9` / `#475569` |
| Diversidad  | `tag rw` | `#ffe4e6` / `#9f1239` |
| Infografías | `tag r`  | `#fee2e2` / `#991b1b` |
| img2img     | `tag b`  | `#dbeafe` / `#1e40af` |
| Comparativa | `tag y`  | `#fef9c3` / `#854d0e` |

Badges de herramientas (`.tb`):

```css
.tb.fb    { background:#ede9fe; color:#5b21b6; }  /* 🐋 Freebuff */
.tb.op    { background:#d1fae5; color:#065f46; }  /* ⚙️ OpenCode */
.tb.canva { background:#fce7f3; color:#9d174d; }  /* Canva */
.tb.both  { background:#e0e7ff; color:#3730a3; }  /* Freebuff + OpenCode */
/* Los badges de chatbots (deck 01) son spans .tb con estilo inline */
```

---

## §6 · Checklist de QA antes de publicar

- [ ] `npx slidev build` sin errores para todos los decks
- [ ] PDFs regenerados y presentes en la raíz
- [ ] Carpetas `0N-<tema>/` actualizadas en la raíz
- [ ] Rutas de audio relativas (`../audio-…/`) intactas tras el build
- [ ] `index.html` sin enlaces rotos (verfica con `grep` cada href)
- [ ] Roles correctos de herramientas: decks 1 (chatbots: ChatGPT, Claude,
      DeepSeek, Gemini), 3 y 4 (imagen: ChatGPT y Gemini) cons los agentes
      Freebuff/OpenCode reservados al deck 6 (código/agente); nada pago
- [ ] `README.md` con la tabla de presentations actualizada
