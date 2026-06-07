# 🤖 Formación en IA para Docentes

**Curso práctico de presentaciones interactivas** para que el profesorado aprenda a usar la inteligencia artificial en el aula — ordenado por dificultad, con ejemplos reales, audio narrado y PDF descargable.

🌐 **Web del proyecto:** [👉 sergarb1.github.io/FormacionIADocentes 👈](https://sergarb1.github.io/FormacionIADocentes)

🎯 6 presentaciones · 📊 130 diapositivas · 🎙️ Audio narrado · 🔊 Se puede silenciar · 📄 PDF imprimible · 🧑‍🏫 De básico a avanzado

---

## 📋 Presentaciones

| # | Presentación | Nivel | Slides | ¿Qué aprenderás? | Para quién |
|---|-------------|-------|-------|-----------------|------------|
| 1 | [👉 ChatGPT, Gemini, Claude… para docentes 👈](https://sergarb1.github.io/FormacionIADocentes/chatgpt-para-docentes.html) | 🌱 Básico | 17 | Los principales chatbots de IA: cómo funcionan, prompts efectivos, 8 ejemplos prácticos para clase, tutoría, evaluación y planificación | Quien empieza desde cero |
| 2 | [👉 Pensamiento crítico y detección de falacias con IA 👈](https://sergarb1.github.io/FormacionIADocentes/pensamiento-critico.html) | 🌿 Intermedio | 18 | Usa la IA como analizador de discursos: falacias, coerción, sesgos. 2 actividades prácticas para clase | Quien quiere enseñar a pensar críticamente |
| 3 | [👉 Crear imágenes educativas con IA 👈](https://sergarb1.github.io/FormacionIADocentes/crear%20imagenes%20educativas.html) | 🌿 Intermedio | 35 | ChatGPT Images 2.0 y Nano Banana 2 para ilustraciones científicas, mapas conceptuales, infografías, worksheets y materiales visuales | Quien crea recursos visuales sin saber diseñar |
| 4 | [👉 Infografías con IA + Canva Capas Mágicas 👈](https://sergarb1.github.io/FormacionIADocentes/infografias-ia-canva.html) | 🌿 Intermedio | 22 | Flujo completo: IA genera fondos y elementos, Canva separa objetos automáticamente, tú personalizas y maquetas. 12 ejemplos prácticos de ciencias a FP | Quien quiere infografías profesionales sin saber diseño |
| 5 | [👉 NotebookLM de Google 👈](https://sergarb1.github.io/FormacionIADocentes/note-booklm-google.html) | 🌳 Avanzado | 18 | Asistente de investigación con IA: subir fuentes, preguntas, resúmenes, guías de estudio, podcasts, flashcards y notas del cuaderno | Quien investiga, prepara materiales o trabaja con documentos |
| 6 | [👉 Asistentes de código con IA para docentes 👈](https://sergarb1.github.io/FormacionIADocentes/codigo-cli-ia.html) | 🌳 Avanzado | 20 | OpenCode, Codex CLI, Gemini CLI y Claude Code: herramientas que crean materiales desde la terminal sin programar. 8 ejemplos prácticos | Quien quiere crear HTML interactivos describiéndolos |

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
4. **Navegar** — Flechas ← →, ESPACIO, o clic para avanzar. ESC para vista general
5. **PDF** — Pulsa "PDF" o añade `?print-pdf#/` a la URL e imprime desde el navegador

> Todas las presentaciones incluyen **audio sincronizado diapositiva a diapositiva** con voz natural `es-ES-AlvaroNeural` (Microsoft Edge TTS). La narración se reproduce al hacer la primera interacción (clic o tecla).

---

## 🗂️ Estructura del proyecto

```
📁 FormacionIADocentes/
├── 📄 index.html                     # Página principal del proyecto
├── 📄 *.html                         # Presentaciones en Reveal.js (6)
├── 📄 *.js                           # Datos de las diapositivas (slidesData)
│
├── 📁 audio-booklm/                  # 18 audios — NotebookLM
├── 📁 audio-chatgpt/                 # 17 audios — ChatGPT, Gemini, Claude
├── 📁 audio-codigo-cli/              # 20 audios — Asistentes de código CLI
├── 📁 audio-imagenes/                # 35 audios — Crear imágenes educativas
├── 📁 audio-infografias/             # 16 audios — Infografías con IA + Canva
├── 📁 audio-pensamiento-critico/     # 18 audios — Pensamiento crítico
│
├── 📄 narracion-chatgpt.json         # Textos para generar audio (ChatGPT)
├── 📄 narracion-pensamiento-critico.json
├── 📄 narracion-imagenes.json
├── 📄 narracion-infografias.json
├── 📄 narracion-booklm.json
├── 📄 narracion-note-booklm.json
├── 📄 narracion-codigo-cli.json
├── 📄 narracion-codigo-cli-ia.json
│
├── 📄 generar-todo-audio.ps1         # Script para regenerar TODOS los audios
├── 📄 generar-audio-*.ps1            # Scripts individuales por presentación
│
├── 📄 *.txt                          # Instrucciones para generar infografías
├── 📄 AGENTS.md                      # Skills para OpenCode (crear presentaciones como estas)
├── 📄 *.png                          # Infografías de portada para index.html
└── 📄 README.md                      # Este archivo
```

---

## 🎙️ Audio narrado

Cada presentación tiene una narración profesional generada con **Microsoft Edge TTS** (voz `es-ES-AlvaroNeural`), sincronizada diapositiva a diapositiva. En total se generan **124 pistas de audio** distribuidas en 6 presentaciones.

### Cómo funciona

- El audio se activa al hacer clic o pulsar una tecla (primera interacción del usuario)
- Al cambiar de diapositiva, se reproduce el audio correspondiente
- Puedes silenciar la narración en cualquier momento con el botón 🔊

### Regenerar todos los audios

```powershell
.\generar-todo-audio.ps1
```

O por separado:

```powershell
.\generar-audio-pensamiento-critico.ps1
.\generar-audio-codigo-cli-ia.ps1
.\generar-audio-chatgpt.ps1
.\generar-audio-imagenes.ps1
.\generar-audio-infografias.ps1
.\generar-audio-note-booklm.ps1
```

### Requisitos

```bash
pip install edge-tts
```

---

## 🚀 Despliegue en GitHub Pages

El proyecto está publicado en GitHub Pages:

```
👉 https://sergarb1.github.io/FormacionIADocentes/ 👈
```

### URLs de las presentaciones

| # | Presentación | 👉 Slides 👈 | 👉 PDF 👈 |
|---|-------------|-------------|----------|
| 1 | ChatGPT, Gemini, Claude… | [`chatgpt-para-docentes.html`](https://sergarb1.github.io/FormacionIADocentes/chatgpt-para-docentes.html) | [`chatgpt-para-docentes.pdf`](https://sergarb1.github.io/FormacionIADocentes/chatgpt-para-docentes.pdf) |
| 2 | Pensamiento crítico y falacias | [`pensamiento-critico.html`](https://sergarb1.github.io/FormacionIADocentes/pensamiento-critico.html) | [`pensamiento-critico.pdf`](https://sergarb1.github.io/FormacionIADocentes/pensamiento-critico.pdf) |
| 3 | Crear imágenes con IA | [`crear%20imagenes%20educativas.html`](https://sergarb1.github.io/FormacionIADocentes/crear%20imagenes%20educativas.html) | [`crear-imagenes-educativas.pdf`](https://sergarb1.github.io/FormacionIADocentes/crear-imagenes-educativas.pdf) |
| 4 | Infografías con IA + Canva | [`infografias-ia-canva.html`](https://sergarb1.github.io/FormacionIADocentes/infografias-ia-canva.html) | [`infografias-con-ia-y-canva.pdf`](https://sergarb1.github.io/FormacionIADocentes/infografias-con-ia-y-canva.pdf) |
| 5 | NotebookLM de Google | [`note-booklm-google.html`](https://sergarb1.github.io/FormacionIADocentes/note-booklm-google.html) | [`note-booklm-google.pdf`](https://sergarb1.github.io/FormacionIADocentes/note-booklm-google.pdf) |
| 6 | Asistentes de código CLI | [`codigo-cli-ia.html`](https://sergarb1.github.io/FormacionIADocentes/codigo-cli-ia.html) | [`codigo-cli-ia.pdf`](https://sergarb1.github.io/FormacionIADocentes/codigo-cli-ia.pdf) |

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|-----------|-----|
| **[Reveal.js](https://revealjs.com/)** | Framework de presentaciones HTML interactivas. Responsive, navegación por teclado, zoom, vista general |
| **[edge-tts](https://github.com/rany2/edge-tts)** | Síntesis de voz desde Microsoft Edge. Gratuito, sin límites, voz natural `es-ES-AlvaroNeural` |
| **ChatGPT / ChatGPT Images 2.0** | Generación de texto e imágenes con IA. Ideal para contenido educativo visual y estructuración de materiales |
| **Gemini** | Asistente de Google con capacidad de análisis multimodal, subida de archivos y razonamiento |
| **Claude** | Asistente de Anthropic con excelente análisis de contexto largo y generación de materiales detallados |
| **Nano Banana 2** | Generación y edición conversacional de imágenes con IA. Ideal para iterar sobre ilustraciones |
| **Canva Capas Mágicas** | Separación automática de objetos en imágenes para componer infografías educativas profesionales |
| **OpenCode** | Asistente de código CLI gratuito y open source para generar materiales educativos describiéndolos |
| **Codex CLI / Gemini CLI / Claude Code** | Alternativas de terminal para crear HTML, apps y documentos desde prompts de lenguaje natural |
| **NotebookLM** | Asistente de investigación de Google que analiza documentos y genera resúmenes, podcasts y guías |
| **GitHub Pages** | Alojamiento gratuito del proyecto. Despliegue automático desde la rama principal |

---

## 📝 Licencia

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — Sergi Garcia Barea

Puedes **compartir** y **adaptar** el material para cualquier fin, incluso comercial, siempre que **reconozcas la autoría** y **compartas bajo la misma licencia**.

---

Hecho con ❤️ para la comunidad educativa.
