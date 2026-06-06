# AGENTS.md — Skills para crear presentaciones educativas

Este archivo define skills que OpenCode puede cargar para generar
presentaciones educativas en HTML con Reveal.js, siguiendo el mismo
estilo y estructura que las de este proyecto.

---

## Skill: presentacion-educativa

Úsalo cuando te pidan crear una presentación educativa en HTML.

Eres un creador de presentaciones educativas profesionales.

### Estructura base

Crea un HTML con Reveal.js (v4.6.1) siguiendo esta estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <title>[Título] · Sergi Garcia Barea</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/reveal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/theme/white.min.css" id="theme">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/print/pdf.css">
  <style>
    /* Mismo estilo que las presentaciones existentes */
    :root {
      --r-heading-color: #1e3a5f;
      --r-main-color: #2c3e50;
      --r-link-color: #2563eb;
    }
    .reveal { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; }
    .reveal .slides section {
      text-align: left; padding: 0 5%;
      display: flex !important; flex-direction: column; justify-content: center;
      font-size: .85em;
    }
    .reveal h2 { font-size: 1.5em; margin-bottom: .3em; color: #1e3a5f; line-height: 1.2; }
    .reveal p  { margin: .25em 0; }
    .reveal ul, .reveal ol { margin: .15em 0; padding-left: 1.2em; }
    .reveal li { margin-bottom: .1em; }
    .reveal pre {
      font-size: .55em; background: #f8fafc; padding: 10px 14px;
      border-radius: 6px; margin: .1em 0 0 0; border-left: 3px solid #f59e0b;
      white-space: pre-wrap; word-wrap: break-word; line-height: 1.35;
    }
    .reveal pre code { max-height: none; background: transparent; padding: 0; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: .5em 0; }
    .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1em; margin: .3em 0; align-items: start; }
    .card {
      background: #f8fafc; border-radius: 8px; padding: .6em .8em;
      border: 1px solid #e2e8f0;
    }
    .pc {
      background: #f8fafc; border-radius: 8px; padding: .4em .6em .2em .6em;
      border: 1px solid #e2e8f0; margin:0;
    }
    .pl {
      font-size: .55em; color: #64748b; text-transform: uppercase;
      letter-spacing: .04em; margin-bottom: .15em;
    }
    .ftr {
      font-size: .58em; color: #64748b;
      display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
    }
    .tb {
      display: inline-block; padding: 1px 8px; border-radius: 10px;
      font-size: .85em; font-weight: 600;
    }
    .tag {
      display: inline-block; padding: 1px 7px; border-radius: 4px;
      font-size: .7em; font-weight: 600;
    }
    .tag.g  { background: #dcfce7; color: #166534; }
    .tag.p  { background: #f3e8ff; color: #6b21a8; }
    .tag.o  { background: #ffedd5; color: #9a3412; }
    .tag.r  { background: #fee2e2; color: #991b1b; }
    .tag.b  { background: #dbeafe; color: #1e40af; }
    .tag.pk { background: #fce7f3; color: #9d174d; }
    .tag.t  { background: #ccfbf1; color: #115e59; }
    .tag.gy { background: #f1f5f9; color: #475569; }
    .tag.rw { background: #ffe4e6; color: #9f1239; }
    .tag.y  { background: #fef9c3; color: #854d0e; }
    .exp {
      background: #f0f4ff; border-radius: 8px; padding: .4em .7em .2em .7em;
      border: 1px solid #dbeafe; margin:0;
    }
    .exp-list { list-style: none; padding: 0; margin: .15em 0; }
    .exp-list li {
      font-size: .6em; color: #1e3a5f; margin-bottom: .25em;
      padding-left: 1.5em; position: relative; line-height: 1.4;
    }
    .exp-list li::before { content: "✅"; position: absolute; left: 0; font-size:.82em; }
    .tip {
      background: #fef3c7; border-radius: 6px; padding: .35em .6em;
      font-size: .6em; color: #92400e; margin-top: .35em;
      border-left: 3px solid #f59e0b;
    }
    .sm { font-size: .6em; color: #64748b; }
    .print-btn, .audio-ctrl {
      position: fixed; z-index: 40; font-size: .5em;
      background: rgba(255,255,255,.88); padding: 5px 14px;
      border-radius: 20px; box-shadow: 0 1px 4px rgba(0,0,0,.12);
      backdrop-filter: blur(4px); cursor: pointer; user-select: none;
      border: none; line-height: 1;
    }
    .print-btn { bottom: 14px; left: 18px; }
    .print-btn a { color: #475569; text-decoration: none; }
    .print-btn a:hover { color: #1e3a5f; }
    .audio-ctrl { bottom: 14px; left: 90px; color: #475569; font-size: .6em; padding: 4px 10px; }
    .audio-ctrl:hover { color: #1e3a5f; }
    @media print {
      .print-btn, .audio-ctrl { display: none; }
      .reveal .slides section { opacity: 1 !important; }
      .reveal .slides section .fragment { opacity: 1 !important; }
      .reveal .progress, .reveal .slide-number { display: none; }
    }
    @media screen and (max-width:480px) {
      .g2 { grid-template-columns: 1fr; gap: .6em; }
    }
  </style>
</head>
<body>
  <button class="audio-ctrl" id="audioCtrl" onclick="toggleAudio()">🔊</button>
  <div class="print-btn">📄 <a href="?print-pdf#/" target="_blank">PDF</a></div>
  <div class="reveal"><div class="slides"></div></div>
  <audio id="slide-audio" preload="auto"></audio>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/reveal.min.js"></script>
  <script src="[nombre-js].js"></script>
  <script>
    const container = document.querySelector('.slides');
    slidesData.forEach(html => container.insertAdjacentHTML('beforeend', html));
    Reveal.initialize({
      hash: true, center: true, transition: 'slide',
      slideNumber: 'c/t', plugins: [],
      pdfMaxPagesPerSlide: 1, pdfSeparateFragments: false,
      width: 1280, height: 720, margin: 0.04, minScale: 0.2, maxScale: 2.0
    });
    const audioEl = document.getElementById('slide-audio');
    let audioMuted = false, started = false;
    function toggleAudio() {
      audioMuted = !audioMuted;
      document.getElementById('audioCtrl').textContent = audioMuted ? '🔇' : '🔊';
    }
    function playSlideAudio(slide) {
      if (audioMuted || !started) return;
      const src = slide.getAttribute('data-audio');
      if (!src) return;
      audioEl.src = src; audioEl.play();
    }
    function firstInteraction() {
      if (started) return; started = true;
      document.removeEventListener('click', firstInteraction, true);
      document.removeEventListener('keydown', firstInteraction, true);
      playSlideAudio(Reveal.getCurrentSlide());
    }
    document.addEventListener('click', firstInteraction, true);
    document.addEventListener('keydown', firstInteraction, true);
    Reveal.addEventListener('slidechanged', e => playSlideAudio(e.currentSlide));
  </script>
</body>
</html>
```

### Datos de diapositivas en JS separado

Crea un archivo `[nombre].js` con la estructura:

```js
const slidesData = [
  `<section data-audio="audio-carpeta/slide00.mp3">
    <h2 style="font-size:2em;text-align:center;">🧠 Título de la presentación</h2>
    <h3 style="text-align:center;">Subtítulo · Fecha</h3>
    <p style="text-align:center;margin-top:1.2em;">👤 Autor</p>
    <div style="text-align:center;margin-top:.4em;">
      <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
        <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
      </span>
    </div>
  </section>`,

  `<section data-audio="audio-carpeta/slide01.mp3">
    <h2>Título de la diapositiva</h2>
    <p>Contenido didáctico...</p>
  </section>`,
  // ...
];
```

### Patrones de diapositivas

**Portada:**
```html
<section data-audio="audio-carpeta/slide00.mp3">
  <h2 style="font-size:2em;text-align:center;">🧠 Título</h2>
  <h3 style="text-align:center;">Subtítulo · Fecha</h3>
  <p style="text-align:center;margin-top:1.2em;">👤 Autor</p>
</section>
```

**Prompt + explicación (g2):**
```html
<section data-audio="audio-carpeta/slide01.mp3">
  <h2 style="font-size:1.2em;">❶ <span class="tag g">🔬 Ciencias</span> Título</h2>
  <div class="g2" style="gap:1.2em;">
    <div class="pc" style="margin:0;">
      <div class="pl">📝 Prompt detallado</div>
      <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Texto del prompt aquí..."</code></pre>
      <div class="ftr"><span class="tb chat">Herramienta</span> · Etiqueta · Nivel</div>
    </div>
    <div class="exp">
      <div class="pl">💡 Por qué funciona</div>
      <ul class="exp-list">
        <li><strong>Clave 1</strong> → explicación</li>
        <li><strong>Clave 2</strong> → explicación</li>
      </ul>
    </div>
  </div>
</section>
```

**Comparativa / dos columnas:**
```html
<section>
  <h2>Título</h2>
  <div class="g2">
    <div class="card" style="border-top:4px solid #color;">
      <p><strong>Columna 1</strong></p>
      <p class="sm">Contenido...</p>
    </div>
    <div class="card" style="border-top:4px solid #color2;">
      <p><strong>Columna 2</strong></p>
      <p class="sm">Contenido...</p>
    </div>
  </div>
</section>
```

**Cierre:**
```html
<section data-audio="audio-carpeta/slideN.mp3">
  <h2>✨ En resumen</h2>
  <div class="g2" style="font-size:.8em;">
    <div class="card" style="text-align:center;border-top:4px solid #color;">
      <p style="font-size:1.5em;margin:0;">🟡</p>
      <p><strong>Título</strong></p>
      <p class="sm">✔️ Punto 1<br>✔️ Punto 2</p>
    </div>
    <div class="card" style="text-align:center;border-top:4px solid #color2;">
      <p style="font-size:1.5em;margin:0;">🔵</p>
      <p><strong>Título</strong></p>
      <p class="sm">✔️ Punto 1<br>✔️ Punto 2</p>
    </div>
  </div>
  <hr style="margin:.4em 0;">
  <p style="text-align:center;">🧑‍🏫 Frase de cierre</p>
  <p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Autor · Fecha</p>
</section>
```

### Audio narrado con edge-tts

Cuando se pida audio, sigue este flujo:

1. Añadir `data-audio="audio-carpeta/slideXX.mp3"` a cada `<section>`
2. Crear JSON de narración `narracion-[nombre].json`:
```json
{
  "_voice": "es-ES-AlvaroNeural",
  "_note": "Narración para '[título presentación]'",
  "slides": [
    { "id": 0, "title": "Portada", "text": "Texto narrado..." },
    { "id": 1, "title": "Título", "text": "Texto narrado..." }
  ]
}
```
3. Crear el script PowerShell `generar-audio-[nombre].ps1`:
```powershell
$Voice = "es-ES-AlvaroNeural"
$Json  = Get-Content "narracion-[nombre].json" -Raw | ConvertFrom-Json
$OutDir = "$PSScriptRoot\audio-carpeta"
if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force }
$edge = "C:\Users\serga\AppData\Roaming\Python\Python311\Scripts\edge-tts.exe"
foreach ($slide in $Json.slides) {
  $id   = $slide.id
  $text = $slide.text
  $name = "slide$("{0:D2}" -f $id).mp3"
  $out  = "$OutDir\$name"
  Write-Host "🎙️  [$id] $($slide.title) → $name"
  & $edge --voice $Voice --text "$text" --write-media "$out"
  if ($LASTEXITCODE -eq 0) {
    $len = (Get-Item $out).Length
    Write-Host "   ✅  $([math]::Round($len/1kb)) KB"
  } else { Write-Host "   ❌  Error" }
}
```

### Nombres de archivo

- HTML: `[tema].html` (ej: `sistema-solar.html`)
- JS: `[tema].js` (ej: `sistema-solar.js`)
- Audio: `audio-[tema]/slideXX.mp3` (ej: `audio-sistema-solar/slide00.mp3`)
- Narración: `narracion-[tema].json` (ej: `narracion-sistema-solar.json`)
- Script audio: `generar-audio-[tema].ps1`
- TXT infografía: `[tema].txt`

### Colores por materia

| Materia | Tag | Color |
|---------|-----|-------|
| Ciencias | `tag g` | `#dcfce7` texto `#166534` |
| Historia | `tag o` | `#ffedd5` texto `#9a3412` |
| Matemáticas | `tag p` | `#f3e8ff` texto `#6b21a8` |
| Lengua | `tag pk` | `#fce7f3` texto `#9d174d` |
| Geografía | `tag t` | `#ccfbf1` texto `#115e59` |
| Worksheets | `tag gy` | `#f1f5f9` texto `#475569` |
| Diversidad | `tag rw` | `#ffe4e6` texto `#9f1239` |
| Infografías | `tag r` | `#fee2e2` texto `#991b1b` |
| img2img | `tag b` | `#dbeafe` texto `#1e40af` |
| Comparativa | `tag y` | `#fef9c3` texto `#854d0e` |

### Badges de herramientas

```
.tb.chat  { background: #fef3c7; color: #92400e; }  /* ChatGPT */
.tb.nana  { background: #dbeafe; color: #1e40af; }  /* Nano Banana 2 */
.tb.both  { background: #e0e7ff; color: #3730a3; }  /* Ambas */
.tb.op    { background: #d1fae5; color: #065f46; }  /* OpenCode */
.tb.cdx   { background: #dbeafe; color: #1e40af; }  /* Codex */
.tb.gem   { background: #fef3c7; color: #92400e; }  /* Gemini */
.tb.claude{ background: #f3e8ff; color: #6b21a8; }  /* Claude */
.tb.canva { background: #fce7f3; color: #9d174d; }  /* Canva */
```

### Medidas Reveal.js

```js
Reveal.initialize({
  hash: true, center: true, transition: 'slide',
  slideNumber: 'c/t', plugins: [],
  pdfMaxPagesPerSlide: 1, pdfSeparateFragments: false,
  width: 1280, height: 720, margin: 0.04, minScale: 0.2, maxScale: 2.0
});
```

---

## Skill: anadir-presentacion-a-index

Úsalo cuando te pidan añadir una presentación nueva al índice.

Lee el `index.html` existente y añade una nueva tarjeta en la
sección de presentaciones, siguiendo el mismo patrón que las
existentes (card con número, título, descripción, tags y enlaces).

El número debe ser el siguiente correlativo. Los enlaces:
- Slides: `[nombre-archivo].html`
- PDF: `[nombre-archivo].pdf` (mismo nombre pero extensión .pdf)

---

## Skill: generar-txt-infografia

Úsalo cuando te pidan crear el TXT de instrucciones para infografía.

Crea un archivo `[tema].txt` con instrucciones detalladas para
generar una infografía educativa sobre el contenido de la
presentación, incluyendo:

- Título sugerido y estilo visual
- Herramienta recomendada
- Estructura sección por sección
- Notas para la generación con IA

(Sigue el mismo formato que los TXT existentes en el proyecto.)

---

## Skill: publicar-github-pages

Úsalo cuando te pidan preparar el proyecto para GitHub Pages.

1. Verificar que todos los enlaces usen rutas relativas
2. Añadir/actualizar `index.html` con enlaces a todas las presentaciones
3. Añadir botón de PDF (con `?print-pdf#/`) en cada HTML
4. Asegurar que el README.md incluya URLs de GitHub Pages
5. Verificar que no haya espacios en nombres de archivo que puedan
   dar problemas en algunas URLs (codificar como %20 si es necesario)
