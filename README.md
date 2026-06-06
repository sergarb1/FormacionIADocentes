# 🤖 Formación en IA para Docentes

**Curso práctico de presentaciones interactivas** para que el profesorado aprenda a usar la inteligencia artificial en el aula — ordenado por dificultad, con ejemplos reales, audio narrado y PDF descargable.

🌐 Web del proyecto: [sergarb1.github.io/FormacionIADocentes](https://sergarb1.github.io/FormacionIADocentes)

🎯 6 presentaciones · 🎙️ Audio narrado · 🔊 Se puede silenciar · 📄 PDF imprimible · 🧑‍🏫 De básico a avanzado

---

## 📋 Presentaciones

| # | Presentación | Nivel | ¿Qué aprenderás? | Para quién |
|---|-------------|-------|-----------------|------------|
| 1 | [ChatGPT, Gemini, Claude… para docentes](https://sergarb1.github.io/FormacionIADocentes/chatgpt-para-docentes.html) | 🌱 Básico | Los principales chatbots de IA: cómo funcionan, prompts efectivos, 8 ejemplos prácticos | Quien empieza desde cero |
| 2 | [Pensamiento crítico y detección de falacias con IA](https://sergarb1.github.io/FormacionIADocentes/pensamiento-critico.html) | 🌿 Intermedio | Usa la IA como analizador de discursos: falacias, coerción, sesgos. Actividad para clase | Quien quiere enseñar a pensar críticamente |
| 3 | [Crear imágenes educativas con IA](https://sergarb1.github.io/FormacionIADocentes/crear%20imagenes%20educativas.html) | 🌿 Intermedio | ChatGPT Images 2.0 y Nano Banana 2 para ilustraciones, mapas, infografías y worksheets | Quien crea recursos visuales |
| 4 | [NotebookLM de Google](https://sergarb1.github.io/FormacionIADocentes/note-booklm-google.html) | 🌿 Intermedio | Asistente de investigación: subir fuentes, resúmenes, podcasts, flashcards | Quien investiga o prepara materiales |
| 5 | [Infografías con IA + Canva Capas Mágicas](https://sergarb1.github.io/FormacionIADocentes/infografias%20con%20ia%20y%20canva.html) | 🌳 Avanzado | Flujo completo: IA genera fondos, Canva separa, tú personalizas | Quien quiere infografías profesionales |
| 6 | [Asistentes de código con IA para docentes](https://sergarb1.github.io/FormacionIADocentes/codigo-cli-ia.html) | 🌳 Avanzado | OpenCode, Codex CLI, Gemini CLI, Claude Code: crea materiales desde la terminal | Quien quiere HTML interactivos describiéndolos |

### 🌱 Niveles
| Nivel | Significado |
|-------|-------------|
| 🌱 **Básico** | No necesitas experiencia previa con IA. Empieza aquí. |
| 🌿 **Intermedio** | Conocimientos básicos de herramientas IA. Algo de práctica. |
| 🌳 **Avanzado** | Herramientas más técnicas, resultados más potentes. Requiere exploración. |

---

## 🎬 Cómo usar cada presentación

1. **Abrir** — Pulsa "Presentación" para ver los slides interactivos en el navegador
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
├── 📄 *.html                         # Presentaciones en Reveal.js
├── 📄 *.js                           # Datos de las diapositivas (slidesData)
├── 📁 audio-booklm/                  # Audios narrados (NotebookLM)
├── 📁 audio-chatgpt/                 # Audios narrados (ChatGPT, Gemini, Claude)
├── 📁 audio-codigo-cli/              # Audios narrados (Código CLI)
├── 📁 audio-imagenes/                # Audios narrados (Imágenes IA)
├── 📁 audio-infografias/             # Audios narrados (Infografías)
├── 📁 audio-pensamiento-critico/     # Audios narrados (P. crítico y falacias)
├── 📄 narracion-*.json               # Textos para generar audio con edge-tts
├── 📄 generar-todo-audio.ps1         # Script PowerShell para regenerar todos los audios
├── 📄 *.txt                          # Instrucciones para infografías (estilo Mr. Wonderful 💛)
├── 📄 AGENTS.md                      # Skills para OpenCode (crear presentaciones como estas)
└── 📄 README.md                      # Este archivo
```

---

## 🎙️ Audio narrado

Cada presentación tiene una narración profesional generada con **Microsoft Edge TTS** (voz `es-ES-AlvaroNeural`), sincronizada diapositiva a diapositiva.

### Cómo funciona
- El audio se activa al hacer clic o pulsar una tecla (primera interacción del usuario)
- Al cambiar de diapositiva, se reproduce el audio correspondiente
- Puedes silenciar la narración en cualquier momento con el botón 🔊

### Regenerar todos los audios

```powershell
.\generar-todo-audio.ps1
```

### Requisitos

```bash
pip install edge-tts
```

---

## 🚀 Despliegue en GitHub Pages

El proyecto está publicado en GitHub Pages:

```
https://sergarb1.github.io/FormacionIADocentes/
```

### URLs de las presentaciones

| Presentación | Slides | PDF |
|-------------|--------|-----|
| ChatGPT, Gemini, Claude… | `chatgpt-para-docentes.html` | `chatgpt-para-docentes.pdf` |
| Pensamiento crítico y falacias | `pensamiento-critico.html` | `pensamiento-critico.pdf` |
| Crear imágenes con IA | `crear%20imagenes%20educativas.html` | `crear-imagenes-educativas.pdf` |
| NotebookLM de Google | `note-booklm-google.html` | `note-booklm-google.pdf` |
| Infografías con IA + Canva | `infografias%20con%20ia%20y%20canva.html` | `infografias-con-ia-y-canva.pdf` |
| Asistentes de código CLI | `codigo-cli-ia.html` | `codigo-cli-ia.pdf` |

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|-----------|-----|
| **[Reveal.js](https://revealjs.com/)** | Framework de presentaciones HTML interactivas. Responsive, navegación por teclado, zoom, vista general |
| **[edge-tts](https://github.com/rany2/edge-tts)** | Síntesis de voz desde Microsoft Edge. Gratuito, sin límites, voz natural |
| **ChatGPT / ChatGPT Images 2.0** | Generación de texto e imágenes con IA. Ideal para contenido educativo visual |
| **Nano Banana 2** | Generación y edición conversacional de imágenes |
| **Canva Capas Mágicas** | Separación automática de objetos en imágenes para componer infografías |
| **OpenCode** | Asistente de código CLI gratuito y open source para generar materiales educativos |

---

## 📝 Licencia

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — Sergi Garcia Barea

Puedes **compartir** y **adaptar** el material para cualquier fin, incluso comercial, siempre que **reconozcas la autoría** y **compartas bajo la misma licencia**.

---

Hecho con ❤️ para la comunidad educativa.
