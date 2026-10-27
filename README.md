# 🤖 Formación en IA para Docentes

**Curso práctico de presentaciones interactivas** para que el profesorado aprenda a usar la inteligencia artificial en el aula usando **herramientas 100% gratuitas** — ordenado por dificultad, con ejemplos reales, audio narrado y PDF descargable.

🌐 **Web del proyecto:** [👉 sergarb1.github.io/FormacionIADocentes 👈](https://sergarb1.github.io/FormacionIADocentes)

🎯 6 presentaciones · 📊 124 diapositivas · 🎙️ Audio narrado · 🔊 Se puede silenciar · 📄 PDF imprimible · 🧑‍🏫 De básico a avanzado

> ✨ **Hecho con Freebuff (freebuff.com) + OpenCode (opencode.ai) + Slidev (sli.dev)** — un flujo de trabajo gratuito y replicable, explicado paso a paso en [`AGENTS.md`](AGENTS.md). Las diapositivas están escritas en Markdown (Slidev) en lugar de HTML+Reveal.js.

---

## 📋 Presentaciones

| # | Presentación | Nivel | Slides | ¿Qué aprenderás? | Para quién |
|---|-------------|-------|-------|-----------------|------------|
| 1 | [👉 IA gratuita para docentes · ChatGPT, Claude, DeepSeek y Gemini 👈](https://sergarb1.github.io/FormacionIADocentes/01-ia-gratuita-docentes/) | 🌱 Básico | 11 | Qué ofrece gratis cada chatbot (ChatGPT polivalente, Claude para textos largos, DeepSeek sin límites, Gemini integrado con Google) y 3 prompts que funcionan en los cuatro | Quien empieza desde cero |
| 2 | [👉 Pensamiento crítico y detección de falacias con IA 👈](https://sergarb1.github.io/FormacionIADocentes/02-pensamiento-critico/) | 🌿 Intermedio | 18 | Usa la IA como analizador de discursos: falacias, coerción, sesgos. 2 actividades prácticas para clase | Quien quiere enseñar a pensar críticamente |
| 3 | [👉 Crear imágenes educativas con IA 👈](https://sergarb1.github.io/FormacionIADocentes/03-crear-imagenes-educativas/) | 🌿 Intermedio | 35 | Ilustraciones científicas, mapas conceptuales, infografías, worksheets y materiales visuales con prompts detallados para cualquier materia y nivel | Quien crea recursos visuales sin saber diseñar |
| 4 | [👉 Infografías con IA + Canva Capas Mágicas 👈](https://sergarb1.github.io/FormacionIADocentes/04-infografias-ia-canva/) | 🌿 Intermedio | 22 | Flujo completo: IA genera fondos y elementos, Canva separa objetos automáticamente, tú personalizas y maquetas | Quien quiere infografías profesionales sin saber diseño |
| 5 | [👉 NotebookLM para docentes 👈](https://sergarb1.github.io/FormacionIADocentes/05-notebooklm/) | 🌳 Avanzado | 18 | Asistente de investigación con IA: subir fuentes, preguntas con citas, resúmenes, guías de estudio, podcasts, flashcards y quizzes | Quien investiga, prepara materiales o trabaja con documentos |
| 6 | [👉 Código con IA en la terminal 👈](https://sergarb1.github.io/FormacionIADocentes/06-codigo-cli-ia/) | 🌳 Avanzado | 20 | OpenCode + Freebuff: herramientas gratuitas open source que crean materiales educativos (circulares, horarios, exámenes, JQuery… interactuables) sin saber programar | Quien quiere crear HTML interactivos describiéndolos |

### 🌱 Niveles

| Nivel | Significado |
|-------|-------------|
| 🌱 **Básico** | No necesitas experiencia previa con IA. Empieza aquí. |
| 🌿 **Intermedio** | Conocimientos básicos de herramientas IA. Algo de práctica. |
| 🌳 **Avanzado** | Herramientas más técnicas, resultados más potentes. Requiere exploración. |

---

## 🎬 Cómo usar cada presentación

1. **Abrir** — Pulsa el enlace 👆 para ver los slides interactivos en el navegador
2. **Escuchar** — El audio se activa automáticamente al pasar de diapositiva (primera interacción)
3. **Silenciar** — Pulsa el icono 🔊 (abajo a la izquierda) para desactivar la narración
4. **Navegar** — Flechas ← →, ESPACIO, o clic para avanzar. ESC/`o` para vista general, `n`/`p` entre diapositivas
5. **PDF** — Pulsa "PDF" o el PDF de la raíz del repo (`0N-<tema>.pdf`)

> Todas las presentaciones incluyen **audio sincronizado diapositiva a diapositiva** con voz natural `es-ES-AlvaroNeural` (Microsoft Edge TTS). La narración se reproduce al hacer la primera interacción (clic o tecla).

---

## 🗂️ Estructura del proyecto

```
📁 FormacionIADocentes/
├── 📄 index.html                     # Página principal del proyecto
├── 📁 01-…06-…/                       # Presentaciones publicadas (Slidev → HTML estático)
│   ├── index.html
│   └── assets/
├── 📄 01-…06-…pdf                    # PDFs por presentación
│
├── 📁 slidev/                        # ⭐ Proyecto fuente (Markdown + npm)
│   ├── package.json                  # Scripts: build / export / dev
│   ├── styles/index.css              # Estilos compartidos de todos los decks
│   ├── global-bottom.vue             # Botón + reproductor de audio narrado
│   ├── convertir-deck.mjs            # Migrador de los decks Reveal.js antiguos
│   ├── 0N-<tema>.md                  # Fuente editable de cada deck (Markdown)
│   └── dist/                         # Salida del build
│
├── 📁 audio-<tema>/                  # MP3 por diapositiva (slideNN.mp3)
├── 📄 narracion-<tema>.json          # Textos para generar el audio (edge-tts)
├── 📄 generar-audio-<tema>.ps1       # Scripts PowerShell por presentación
│
├── 📄 AGENTS.md                      # ⭐ Plan paso a paso para crear decks (Slidev + Freebuff + OpenCode)
├── 📄 *.txt                          # Instrucciones para generar infografías
├── 📄 *.png                          # Infografías de portada para index.html
└── 📄 README.md                      # Este archivo
```

---

## 🛠️ Stack

| Tecnología | Uso |
|-----------|-----|
| **[Slidev (sli.dev)](https://sli.dev)** | Framework de presentaciones basado en Markdown + Vue. Exporta a HTML/PDF con navegación por teclado y vista general |
| **🐋 [Freebuff](https://freebuff.com)** | Agente conversacional gratuito: redacta prompts, narraciones y material didáctico sin instalación |
| **⚙️ [OpenCode](https://opencode.ai)** | IDE open source con IA integrada. Conecta Freebuff o modelos locales (Ollama) para proyectos grandes |
| **[edge-tts](https://github.com/rany2/edge-tts)** | Síntesis de voz desde Microsoft Edge. Gratuito, voz natural `es-ES-AlvaroNeural` |
| **Canva Capas Mágicas** | Separación automática de objetos en imágenes para componer infografías |
| **NotebookLM** | Asistente de investigación que analiza documentos y genera podcasts, flashcards y guías |
| **GitHub Pages** | Alojamiento gratuito. Despliegue automático desde la rama principal |

---

## 🚀 Regenerar las presentaciones

Requisitos: Node.js 18+.

```bash
cd slidev
npm install

# Compilar decks individuales (⚠️ base ABSOLUTA del subpath de Pages:
# con `--base ./` los assets cargan pero el router interno de Slidev
# no reconoce la URL y muestra su 404 "Page not found")
npx slidev build 01-ia-gratuita-docentes --base "/FormacionIADocentes/01-ia-gratuita-docentes/"

# Exportar a PDF
npx slidev export 01-ia-gratuita-docentes.md --output ../01-ia-gratuita-docentes.pdf

# =O regenerar todos de golpe=
for f in 0*.md; do
  n="${f%.md}"
  npx slidev build $f --base "/FormacionIADocentes/$n/"
  npx slidev export $f --output ../$n.pdf
  rm -rf ../$n && cp -r "dist/$n" ../$n
done
```

> El export a PDF usa `playwright-chromium` (instalado como devDependency).

## 🎙️ Audio narrado

Cada presentación tiene su narración en `narracion-<tema>.json` y MP3s en `audio-<tema>/`.

```powershell
pip install edge-tts
.\generar-audio-<tema>.ps1   # genera los slideNN.mp3 desde el JSON
```

---

## 📝 Licencia

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — Sergi Garcia Barea

Puedes **compartir** y **adaptar** el material para cualquier fin, incluso comercial, siempre que **reconozcas la autoría** y **compartas bajo la misma licencia**.

---

Hecho con ❤️ para la comunidad educativa.
