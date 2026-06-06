const slidesData = [

  // ── 0. PORTADA ──
  `<section data-audio="audio-booklm/slide00.mp3">
    <h2 style="font-size:2em;text-align:center;">📘 NotebookLM de Google<br>tutorial para docentes</h2>
    <h3 style="text-align:center;">Podcasts · Presentaciones · Vídeos narrados · Flashcards · Quizzes</h3>
    <p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
    <div style="text-align:center;margin-top:.3em;">
      <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
        <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
      </span>
    </div>
    <p style="text-align:center;font-size:.5em;color:#94a3b8;margin-top:.5em;">🔗 <a href="https://notebooklm.google.com" target="_blank">notebooklm.google.com</a></p>
  </section>`,

  // ── 1. QUÉ ES NOTEBOOKLM ──
  `<section data-audio="audio-booklm/slide01.mp3">
    <h2 style="font-size:1.2em;">❶ <span class="tag t">📘 Google IA</span> ¿Qué es NotebookLM?</h2>
    <p><strong>NotebookLM</strong> es un asistente de investigación con inteligencia artificial creado por Google. Funciona como un <strong>cuaderno de estudio inteligente</strong>: subes tus documentos, vídeos, webs o apuntes, y la IA trabaja exclusivamente sobre ese contenido.</p>
    <div class="g2" style="margin-top:.5em;">
      <div class="card" style="text-align:center;border-top:4px solid #0d9488;">
        <p style="font-size:1.8em;margin:0;">📚</p>
        <p><strong>Tus fuentes, tu contenido</strong></p>
        <p class="sm">Subes PDFs, YouTube, Google Docs, texto, webs. La IA solo usa lo que tú le das</p>
      </div>
      <div class="card" style="text-align:center;border-top:4px solid #0d9488;">
        <p style="font-size:1.8em;margin:0;">🔒</p>
        <p><strong>Privacidad total</strong></p>
        <p class="sm">Tus datos no se usan para entrenar modelos. Lo que subes, se queda en tu cuaderno</p>
      </div>
    </div>
    <div class="tip">💡 Diferencia clave: a diferencia de ChatGPT o Gemini, NotebookLM no busca en internet — solo responde con lo que has subido</div>
  </section>`,

  // ── 2. PRIMEROS PASOS ──
  `<section data-audio="audio-booklm/slide02.mp3">
    <h2 style="font-size:1.2em;">❷ <span class="tag t">🚀 Empezar</span> Primeros pasos</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo crear tu primer cuaderno</div>
        <pre style="font-size:.58em;border-left-color:#0d9488;"><code>1. Ve a notebooklm.google.com e inicia sesión
           con tu cuenta de Google
2. Haz clic en "Nuevo cuaderno"
3. Ponle un nombre (ej: "Tema 5 - Guerra Fría")
4. Haz clic en "Añadir fuente" y sube tu
   primer documento (PDF, web, texto...)
5. Espera a que la IA procese la fuente
6. ¡Ya puedes empezar a hacer preguntas!</code></pre>
        <div class="ftr"><span class="tb" style="background:#ccfbf1;color:#115e59;">🔗 notebooklm.google.com</span> · Gratis con cuenta Google</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Claves para empezar</div>
        <ul class="exp-list">
          <li><strong>Gratis</strong> — sin límite de cuadernos ni de fuentes por ahora</li>
          <li>Cada cuaderno puede tener hasta <strong>50 fuentes</strong> (aprox.)</li>
          <li>Cada fuente puede tener hasta <strong>500.000 palabras</strong></li>
          <li>Todo el procesamiento es <strong>en la nube</strong>, no instales nada</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 3. FUENTES COMPATIBLES ──
  `<section data-audio="audio-booklm/slide03.mp3">
    <h2 style="font-size:1.2em;">❸ <span class="tag t">📤 Fuentes</span> ¿Qué puedes subir?</h2>
    <p class="sm">NotebookLM acepta múltiples formatos. Cada fuente alimenta el cuaderno y la IA responde solo con ese contenido.</p>
    <div class="g3" style="font-size:.85em;">
      <div class="card" style="text-align:center;border-top:3px solid #0d9488;">
        <p style="font-size:1.5em;margin:0;">📄</p>
        <p class="sm"><strong>PDF</strong><br>Documentos, artículos, capítulos</p>
      </div>
      <div class="card" style="text-align:center;border-top:3px solid #3b82f6;">
        <p style="font-size:1.5em;margin:0;">🔗</p>
        <p class="sm"><strong>Enlaces web</strong><br>Artículos online, blogs, Wikipedia</p>
      </div>
      <div class="card" style="text-align:center;border-top:3px solid #f59e0b;">
        <p style="font-size:1.5em;margin:0;">📝</p>
        <p class="sm"><strong>Texto copiado</strong><br>Apuntes propios, fragmentos clave</p>
      </div>
      <div class="card" style="text-align:center;border-top:3px solid #ef4444;">
        <p style="font-size:1.5em;margin:0;">▶️</p>
        <p class="sm"><strong>Vídeos YouTube</strong><br>Transcripciones automáticas</p>
      </div>
      <div class="card" style="text-align:center;border-top:3px solid #8b5cf6;">
        <p style="font-size:1.5em;margin:0;">📂</p>
        <p class="sm"><strong>Google Docs</strong><br>Documentos de tu Drive</p>
      </div>
      <div class="card" style="text-align:center;border-top:3px solid #ec4899;">
        <p style="font-size:1.5em;margin:0;">🎤</p>
        <p class="sm"><strong>Grabaciones audio</strong><br>Clases, conferencias, podcasts</p>
      </div>
    </div>
    <div class="tip">🎯 La IA extrae la información de todas tus fuentes y la relaciona entre sí</div>
  </section>`,

  // ── 4. INTERFAZ DEL CUADERNO ──
  `<section data-audio="audio-booklm/slide04.mp3">
    <h2 style="font-size:1.2em;">❹ <span class="tag t">🗂️ El cuaderno</span> Tu espacio de trabajo</h2>
    <p>Cada cuaderno tiene varias secciones que te ayudan a organizar y extraer el máximo partido de tus fuentes:</p>
    <div class="g2" style="font-size:.85em;">
      <div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #0d9488;">
          <p><strong>💬 Chat</strong> — Haz preguntas sobre tus fuentes. La IA cita las respuestas</p>
        </div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #3b82f6;">
          <p><strong>📝 Notas</strong> — La IA genera resúmenes automáticos de cada fuente</p>
        </div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #f59e0b;">
          <p><strong>📖 Guía de estudio</strong> — Resumen ejecutivo + preguntas + glosario</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #8b5cf6;">
          <p><strong>🎙️ Audio Overview</strong> — Genera un podcast con dos voces conversando</p>
        </div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #ec4899;">
          <p><strong>📊 Presentación</strong> — Crea diapositivas desde tus fuentes</p>
        </div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #ef4444;">
          <p><strong>🃏 Flashcards</strong> — Tarjetas de repaso con repetición espaciada</p>
        </div>
      </div>
    </div>
  </section>`,

  // ── 5. CHAT CON TUS FUENTES ──
  `<section data-audio="audio-booklm/slide05.mp3">
    <h2 style="font-size:1.2em;">❺ <span class="tag t">💬 Chat</span> Pregunta a tus fuentes</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Ejemplos de preguntas</div>
        <pre style="font-size:.58em;border-left-color:#0d9488;"><code>"Resume el capítulo 3 en 5 puntos clave"
"¿Qué causas llevaron a la Revolución Francesa
 según los documentos que he subido?"
"Genera una línea del tiempo con los eventos
 principales del tema 7"
"Explica el concepto de fotosíntesis como si
 tuviera 12 años"
"Cita textualmente las fuentes que hablen
 sobre el cambio climático"</code></pre>
        <div class="ftr"><span class="tb" style="background:#ccfbf1;color:#115e59;">💬 Chat contextual</span> · Citas automáticas</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil para clase</div>
        <ul class="exp-list">
          <li>Las respuestas incluyen <strong>citas</strong> a la fuente original (número de página)</li>
          <li>Puedes pedir <strong>distinto nivel de profundidad</strong> según el alumno</li>
          <li>Ideal para que los alumnos <strong>investiguen</strong> por su cuenta</li>
          <li>El profesor <strong>verifica</strong> las respuestas contra las fuentes reales</li>
        </ul>
      </div>
    </div>
    <div class="tip">💡 Las citas son clave: cada respuesta incluye el fragmento original del que se extrajo la información</div>
  </section>`,

  // ── 6. AUDIO OVERVIEW ──
  `<section data-audio="audio-booklm/slide06.mp3">
    <h2 style="font-size:1.2em;">❻ <span class="tag t">🎙️ Podcast</span> Audio Overview</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo generar un podcast</div>
        <pre style="font-size:.58em;border-left-color:#0d9488;"><code>1. Abre tu cuaderno en NotebookLM
2. En la sección "Audio Overview" haz clic
   en "Generar"
3. La IA analiza todas tus fuentes y crea
   una conversación entre dos voces
4. Espera 2-5 minutos (depende del volumen
   de contenido)
5. Escucha el resultado: suena como un
   programa de radio real
6. Puedes descargar el MP3 o compartirlo
   con tus alumnos</code></pre>
        <div class="ftr"><span class="tb" style="background:#ccfbf1;color:#115e59;">🎙️ Voz natural</span> · Formato MP3</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Características</div>
        <ul class="exp-list">
          <li>Dos voces <strong>realistas</strong> conversando (no lectura robótica)</li>
          <li>Tono <strong>divulgativo y ameno</strong>, tipo programa de radio</li>
          <li>Idioma según las fuentes: funciona en <strong>español e inglés</strong></li>
          <li>Los alumnos pueden <strong>repasar escuchando</strong> mientras hacen otras cosas</li>
          <li>Ideal para <strong>alumnos con dificultades</strong> de lectura</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 7. GUÍA DE ESTUDIO ──
  `<section data-audio="audio-booklm/slide07.mp3">
    <h2 style="font-size:1.2em;">❼ <span class="tag t">📖 Guía</span> Guía de estudio completa</h2>
    <p>Con un solo clic, NotebookLM genera una guía de estudio estructurada a partir de tus fuentes:</p>
    <div class="g2" style="font-size:.85em;">
      <div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #0d9488;">
          <p>📝 <strong>Resumen ejecutivo</strong> — Síntesis de todo el contenido en un párrafo</p>
        </div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #3b82f6;">
          <p>❓ <strong>Preguntas frecuentes</strong> — Las dudas más comunes resueltas</p>
        </div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #f59e0b;">
          <p>📊 <strong>Glosario</strong> — Términos clave con sus definiciones</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #8b5cf6;">
          <p>📅 <strong>Plan de estudio</strong> — Sugerencias para organizar el repaso</p>
        </div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #ec4899;">
          <p>✍️ <strong>Preguntas de repaso</strong> — Para autoevaluarse después de estudiar</p>
        </div>
        <div class="card" style="margin-bottom:.3em;border-top:3px solid #ef4444;">
          <p>📄 <strong>Exportable</strong> — Puedes descargarlo como documento</p>
        </div>
      </div>
    </div>
    <div class="tip">💡 La guía de estudio se genera automática al subir tus fuentes, pero puedes regenerarla cuando quieras</div>
  </section>`,

  // ── 8. PRESENTACIONES ──
  `<section data-audio="audio-booklm/slide08.mp3">
    <h2 style="font-size:1.2em;">❽ <span class="tag t">📊 Slides</span> Presentaciones desde tus fuentes</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo generar presentaciones</div>
        <pre style="font-size:.58em;border-left-color:#0d9488;"><code>1. Dentro de tu cuaderno, haz clic en
   "Guía de estudio"
2. Selecciona "Presentación" como formato
3. La IA genera diapositivas estructuradas
   con títulos, puntos clave y citas
4. Aparecen organizadas como una
   presentación lista para usar
5. Puedes exportarlas a Google Slides
   para editarlas y personalizarlas</code></pre>
        <div class="ftr"><span class="tb" style="background:#dbeafe;color:#1e40af;">📊 Google Slides</span> · Exportable</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Características</div>
        <ul class="exp-list">
          <li>Diapositivas <strong>estructuradas</strong> a partir de tus fuentes reales</li>
          <li>Incluye <strong>citas y referencias</strong> a las fuentes originales</li>
          <li>Exportable a <strong>Google Slides</strong> para editar diseño</li>
          <li>Ideal para preparar <strong>clases en minutos</strong></li>
          <li>Puedes elegir entre varios <strong>formatos de salida</strong></li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 9. VÍDEOS NARRADOS ──
  `<section data-audio="audio-booklm/slide09.mp3">
    <h2 style="font-size:1.2em;">❾ <span class="tag t">🎬 Vídeo</span> Vídeos narrados automáticos</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo generar vídeos narrados</div>
        <pre style="font-size:.58em;border-left-color:#0d9488;"><code>1. NotebookLM puede generar presentaciones
   con narración de audio sincronizada
2. La IA explica cada diapositiva con voz
   humana (seleccionas el idioma)
3. Se genera un vídeo combinando las
   diapositivas + la narración
4. Descargas el resultado o lo compartes
   directamente con los alumnos
5. Ideal para flipped classroom: ellos ven
   el vídeo en casa y trabajan en clase</code></pre>
        <div class="ftr"><span class="tb" style="background:#fce7f3;color:#9d174d;">🎬 Vídeo + voz</span> · Flipped classroom</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Beneficios para el aula</div>
        <ul class="exp-list">
          <li><strong>Voz natural</strong> que lee y explica el contenido con ritmo</li>
          <li>Perfecto para <strong>alumnos con dificultades</strong> de lectura o atención</li>
          <li>Los alumnos pueden <strong>ver y escuchar</strong> a su propio ritmo</li>
          <li>Ideal para <strong>clase invertida</strong>: teoría en casa, práctica en aula</li>
          <li>Se puede <strong>compartir por enlace</strong> o descargar en MP4</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 10. NOTAS AUTOMÁTICAS ──
  `<section data-audio="audio-booklm/slide10.mp3">
    <h2 style="font-size:1.2em;">❿ <span class="tag t">📝 Notas</span> Notas del cuaderno</h2>
    <p>NotebookLM genera automáticamente <strong>notas de cada fuente</strong> que subes. Son resúmenes inteligentes que capturan lo esencial.</p>
    <div class="g2" style="font-size:.85em;">
      <div class="card" style="border-top:4px solid #0d9488;">
        <p><strong>📄 Resumen automático</strong></p>
        <p class="sm">Al subir un PDF, la IA genera un resumen estructurado con los puntos principales, personajes clave, fechas y conceptos importantes.</p>
      </div>
      <div class="card" style="border-top:4px solid #3b82f6;">
        <p><strong>🔗 Notas por fuente</strong></p>
        <p class="sm">Cada fuente tiene su propia nota. Puedes leer el resumen sin tener que repasar el documento original entero.</p>
      </div>
      <div class="card" style="border-top:4px solid #f59e0b;">
        <p><strong>✏️ Notas propias</strong></p>
        <p class="sm">Además de las notas automáticas, puedes escribir tus propias notas y anotaciones dentro del cuaderno.</p>
      </div>
      <div class="card" style="border-top:4px solid #8b5cf6;">
        <p><strong>📌 Ideas clave</strong></p>
        <p class="sm">La IA extrae automáticamente las ideas más importantes de cada fuente y las presenta de forma clara.</p>
      </div>
    </div>
  </section>`,

  // ── 11. FLASHCARDS ──
  `<section data-audio="audio-booklm/slide11.mp3">
    <h2 style="font-size:1.2em;">⓫ <span class="tag t">🃏 Flashcards</span> Tarjetas de repaso</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo usar las flashcards</div>
        <pre style="font-size:.58em;border-left-color:#0d9488;"><code>1. Abre la "Guía de estudio" de tu cuaderno
2. Selecciona la pestaña "Flashcards"
3. La IA genera preguntas y respuestas
   basadas exclusivamente en tus fuentes
4. Aparecen en formato digital:
   - Cara A: pregunta o concepto
   - Cara B: respuesta o definición
5. Sistema de repetición espaciada:
   - Marca "Fácil" si ya lo sabes
   - Marca "Difícil" para repetir después</code></pre>
        <div class="ftr"><span class="tb" style="background:#fef3c7;color:#92400e;">🃏 Spaced repetition</span> · Digital</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funcionan</div>
        <ul class="exp-list">
          <li>Genera flashcards <strong>automáticamente</strong> desde tus apuntes</li>
          <li>Sistema de <strong>repetición espaciada</strong> para memorizar a largo plazo</li>
          <li>Puedes <strong>marcar</strong> las que ya sabes y repetir las difíciles</li>
          <li>Ideal para <strong>preparar exámenes</strong> de forma activa</li>
          <li>Las preguntas son <strong>específicas de tu temario</strong></li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 12. QUIZZES ──
  `<section data-audio="audio-booklm/slide12.mp3">
    <h2 style="font-size:1.2em;">⓬ <span class="tag t">✍️ Quizzes</span> Exámenes y autoevaluación</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo generar exámenes</div>
        <pre style="font-size:.58em;border-left-color:#0d9488;"><code>Escribe en el chat de tu cuaderno:

"Genera 10 preguntas tipo test sobre
el tema de la Revolución Industrial
basándote en mis fuentes. Incluye
4 opciones cada una y las soluciones
al final con referencia a la fuente"

También puedes pedir otros formatos:
- Verdadero / Falso
- Preguntas abiertas de desarrollo
- Relacionar columnas
- Completar huecos
- Preguntas por niveles de dificultad</code></pre>
        <div class="ftr"><span class="tb" style="background:#e0e7ff;color:#3730a3;">✍️ Múltiples formatos</span> · Solucionario incluido</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Características</div>
        <ul class="exp-list">
          <li>Preguntas <strong>basadas en tus fuentes reales</strong>, no en internet</li>
          <li>Puedes pedir <strong>nivel de dificultad</strong> específico (básico, medio, avanzado)</li>
          <li>Incluye <strong>solucionario</strong> con referencias a las fuentes originales</li>
          <li>Ideal para <strong>autoevaluación</strong> de los alumnos antes del examen</li>
          <li>Exportable a <strong>documento</strong> para imprimir o compartir</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 13. FAQ Y GLOSARIO ──
  `<section data-audio="audio-booklm/slide13.mp3">
    <h2 style="font-size:1.2em;">⓭ <span class="tag t">❓ FAQ</span> Preguntas frecuentes y glosario</h2>
    <p>Dos herramientas muy útiles que NotebookLM genera automáticamente:</p>
    <div class="g2" style="font-size:.85em;">
      <div class="card" style="border-top:4px solid #0d9488;">
        <p style="font-size:1.3em;margin:0 0 .2em;">❓ FAQ automáticas</p>
        <p class="sm">La IA analiza tus fuentes y genera las preguntas más frecuentes sobre el tema, con sus respuestas basadas en los documentos. Ideal para que los alumnos resuelvan dudas comunes antes de preguntar al profesor.</p>
        <p class="sm" style="margin-top:.3em;"><strong>Ejemplo:</strong> "¿Cuál fue la causa principal de la Segunda Guerra Mundial?" → respuesta extraída de tus apuntes</p>
      </div>
      <div class="card" style="border-top:4px solid #3b82f6;">
        <p style="font-size:1.3em;margin:0 0 .2em;">📖 Glosario automático</p>
        <p class="sm">Extrae todos los términos clave de tus fuentes con sus definiciones. Cada término incluye una cita a la fuente original donde aparece.</p>
        <p class="sm" style="margin-top:.3em;"><strong>Ejemplo:</strong> "Fotosíntesis: proceso por el cual las plantas convierten la luz solar en energía química (Fuente: Libro de texto pág. 45)".</p>
      </div>
    </div>
  </section>`,

  // ── 14. 10 IDEAS PARA CLASE ──
  `<section data-audio="audio-booklm/slide14.mp3">
    <h2 style="font-size:1.2em;">⓮ <span class="tag t">💡 Ideas</span> 10 usos en el aula</h2>
    <div class="g2" style="font-size:.82em;">
      <div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #10b981;">
          <p>🎙️ <strong>Podcast de repaso</strong> — Genera un audio del tema para el examen</p>
        </div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #3b82f6;">
          <p>📊 <strong>Presentación automática</strong> — Prepara la clase en 2 minutos</p>
        </div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #f59e0b;">
          <p>🃏 <strong>Flashcards colaborativas</strong> — Los alumnos estudian con ellas</p>
        </div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #8b5cf6;">
          <p>🎬 <strong>Vídeo para flipped classroom</strong> — Teoría en casa, práctica en clase</p>
        </div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #ec4899;">
          <p>✍️ <strong>Quiz de autoevaluación</strong> — Antes del examen, los alumnos se prueban</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #ef4444;">
          <p>📖 <strong>Guía de estudio</strong> — Comparte el resumen ejecutivo con la clase</p>
        </div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #0d9488;">
          <p>❓ <strong>FAQ del tema</strong> — Los alumnos consultan antes de preguntar</p>
        </div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #f97316;">
          <p>📚 <strong>Glosario de términos</strong> — Vocabulario clave de la unidad</p>
        </div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #a855f7;">
          <p>🔍 <strong>Investigación guiada</strong> — Los alumnos preguntan a sus fuentes</p>
        </div>
        <div class="card" style="margin-bottom:.25em;border-top:3px solid #14b8a6;">
          <p>📝 <strong>Examen personalizado</strong> — Cada alumno con preguntas diferentes</p>
        </div>
      </div>
    </div>
  </section>`,

  // ── 15. CONSEJOS ──
  `<section data-audio="audio-booklm/slide15.mp3">
    <h2 style="font-size:1.2em;">⓯ <span class="tag t">🎯 Consejos</span> Para sacarle el máximo partido</h2>
    <div class="g2">
      <div>
        <div class="card" style="margin-bottom:.3em;">
          <p>📤 <strong>Sube fuentes de calidad</strong></p>
          <p class="sm">Mejores fuentes → mejores respuestas. Usa PDFs completos, no fragmentos</p>
        </div>
        <div class="card" style="margin-bottom:.3em;">
          <p>🧠 <strong>Sé específico en las preguntas</strong></p>
          <p class="sm">"Explícame el concepto de energía cinética con un ejemplo" funciona mejor que "Háblame de energía"</p>
        </div>
        <div class="card" style="margin-bottom:.3em;">
          <p>🔗 <strong>Combina tipos de fuente</strong></p>
          <p class="sm">PDF + vídeo YouTube + web = visión más completa del tema</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.3em;">
          <p>✅ <strong>Verifica las respuestas</strong></p>
          <p class="sm">La IA cita las fuentes. Comprueba que las referencias son correctas</p>
        </div>
        <div class="card" style="margin-bottom:.3em;">
          <p>🔄 <strong>Regenera cuando añadas fuentes</strong></p>
          <p class="sm">Si subes más documentos, regenera la guía de estudio para que incluya el nuevo contenido</p>
        </div>
        <div class="card" style="margin-bottom:.3em;">
          <p>📁 <strong>Organiza por temas</strong></p>
          <p class="sm">Crea un cuaderno por unidad didáctica. Así tienes todo separado y ordenado</p>
        </div>
      </div>
    </div>
  </section>`,

  // ── 16. COMPARATIVA ──
  `<section data-audio="audio-booklm/slide16.mp3">
    <h2 style="font-size:1.2em;">⓰ <span class="tag y">⚖️ Comparativa</span> NotebookLM vs otras IAs</h2>
    <div class="g2" style="font-size:.85em;">
      <div class="card" style="border-top:4px solid #0d9488;">
        <p style="font-size:1.3em;margin:0 0 .2em;">✅ NotebookLM</p>
        <p class="sm">✔️ Solo responde con tus fuentes<br>✔️ Citas automáticas con nº de página<br>✔️ Genera podcast, vídeos, flashcards<br>✔️ Guía de estudio completa<br>✔️ Privacidad total de datos</p>
      </div>
      <div class="card" style="border-top:4px solid #94a3b8;">
        <p style="font-size:1.3em;margin:0 0 .2em;">⚠️ ChatGPT / Gemini</p>
        <p class="sm">❌ Responde con conocimiento general de internet<br>❌ Puede alucinar o inventar citas<br>✔️ Mejor para brainstorming y creatividad<br>✔️ Más versátil en tareas generales<br>⚠️ Sin garantía de privacidad</p>
      </div>
    </div>
    <div class="tip">💡 Usa NotebookLM cuando necesites <strong>precisión basada en documentos</strong> y otras IAs para <strong>explorar ideas o generar contenido nuevo</strong></div>
  </section>`,

  // ── 17. CIERRE ──
  `<section data-audio="audio-booklm/slide17.mp3">
    <h2>✨ En resumen</h2>
    <div class="g2" style="font-size:.8em;">
      <div class="card" style="text-align:center;border-top:4px solid #0d9488;">
        <p style="font-size:1.5em;margin:0;">📘</p>
        <p><strong>Investiga mejor</strong></p>
        <p class="sm">✔️ Sube tus fuentes<br>✔️ Haz preguntas con citas<br>✔️ Genera materiales al instante</p>
      </div>
      <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
        <p style="font-size:1.5em;margin:0;">🎓</p>
        <p><strong>Enseña más fácil</strong></p>
        <p class="sm">✔️ Podcast para repasar<br>✔️ Flashcards para estudiar<br>✔️ Quizzes para evaluar</p>
      </div>
    </div>
    <hr style="margin:.4em 0;">
    <p style="text-align:center;">🧑‍🏫 NotebookLM no reemplaza al docente — le da superpoderes para preparar mejores clases</p>
    <p style="text-align:center;margin-top:.4em;">🚀 <a href="https://notebooklm.google.com" target="_blank">Prueba NotebookLM gratis</a></p>
    <p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Junio 2026</p>
  </section>`,
];
