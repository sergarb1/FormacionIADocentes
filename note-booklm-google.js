const slidesData = [

  // ── 1. PORTADA ──
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

  // ── 2. QUÉ ES NOTEBOOKLM ──
  `<section data-audio="audio-booklm/slide01.mp3">
    <h2>🧠 ¿Qué es NotebookLM?</h2>
    <div class="g2">
      <div>
        <div class="card" style="text-align:center;height:100%;">
          <p style="font-size:2em;margin:0;">📚</p>
          <p><strong>Asistente de estudio con IA</strong></p>
          <p class="sm">Subes tus fuentes (PDFs, webs, vídeos, textos) y la IA trabaja sobre tu contenido</p>
        </div>
      </div>
      <div>
        <div class="card" style="text-align:center;height:100%;border-top:4px solid #0d9488;">
          <p style="font-size:2em;margin:0;">🔒</p>
          <p><strong>Tus datos, seguros</strong></p>
          <p class="sm">Solo usa el contenido que tú subes. No se entrena con tus fuentes. Privacidad total</p>
        </div>
      </div>
    </div>
    <div class="tip">💡 Ideal para docentes: creas materiales basados en tus apuntes, no en contenido genérico de internet</div>
  </section>`,

  // ── 3. CÓMO SUBIR FUENTES ──
  `<section data-audio="audio-booklm/slide02.mp3">
    <h2>📤 Subir fuentes a NotebookLM</h2>
    <p class="sm">Formatos compatibles:</p>
    <div class="g3" style="font-size:.85em;">
      <div class="card" style="text-align:center;">
        <p style="font-size:1.5em;margin:0;">📄</p>
        <p class="sm">PDF</p>
      </div>
      <div class="card" style="text-align:center;">
        <p style="font-size:1.5em;margin:0;">🔗</p>
        <p class="sm">Enlaces web</p>
      </div>
      <div class="card" style="text-align:center;">
        <p style="font-size:1.5em;margin:0;">📝</p>
        <p class="sm">Texto copiado</p>
      </div>
      <div class="card" style="text-align:center;">
        <p style="font-size:1.5em;margin:0;">▶️</p>
        <p class="sm">Vídeos YouTube</p>
      </div>
      <div class="card" style="text-align:center;">
        <p style="font-size:1.5em;margin:0;">📂</p>
        <p class="sm">Google Docs</p>
      </div>
      <div class="card" style="text-align:center;">
        <p style="font-size:1.5em;margin:0;">🎤</p>
        <p class="sm">Grabaciones audio</p>
      </div>
    </div>
    <div class="tip">🎯 Cada fuente alimenta el cuaderno. La IA responde solo con lo que le has subido</div>
  </section>`,

  // ── 4. PODCAST ──
  `<section data-audio="audio-booklm/slide03.mp3">
    <h2>🎙️ Generar podcast (Audio Overview)</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo hacerlo</div>
        <pre style="border-left-color:#0d9488;"><code>1. Abre tu cuaderno en NotebookLM
2. Ve a "Audio Overview" / "Resumen de audio"
3. Haz clic en "Generar"
4. Espera 2-5 minutos (depende de las fuentes)
5. Escucha el podcast generado con dos voces
   conversando sobre tu contenido</code></pre>
        <div class="ftr" style="margin-top:.3em;">
          <span class="tb" style="background:#ccfbf1;color:#115e59;font-size:.8em;">🎙️ Podcast generado por IA</span>
        </div>
      </div>
      <div class="exp">
        <div class="pl">💡 Características</div>
        <ul class="exp-list">
          <li>Dos voces <strong>realistas</strong> conversando (no lectura robótica)</li>
          <li>Tono <strong>divulgativo y ameno</strong>, tipo programa de radio</li>
          <li>Idioma según las fuentes: funciona en <strong>español, inglés, etc.</strong></li>
          <li>Ideal para que los alumnos <strong>repasen escuchando</strong></li>
          <li>Puedes <strong>descargar el audio</strong> como MP3</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 5. PRESENTACIONES ──
  `<section data-audio="audio-booklm/slide04.mp3">
    <h2>📊 Generar presentaciones</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo hacerlo</div>
        <pre style="border-left-color:#0d9488;"><code>1. Abre tu cuaderno en NotebookLM
2. Haz clic en "Generar guía de estudio"
3. Selecciona "Presentación" como formato
4. La IA genera diapositivas con:
   - Títulos y subtítulos
   - Puntos clave de tus fuentes
   - Preguntas de repaso al final
5. Puedes exportar a Google Slides</code></pre>
        <div class="ftr" style="margin-top:.3em;">
          <span class="tb" style="background:#dbeafe;color:#1e40af;font-size:.8em;">📊 Compatible con Google Slides</span>
        </div>
      </div>
      <div class="exp">
        <div class="pl">💡 Características</div>
        <ul class="exp-list">
          <li>Genera diapositivas <strong>estructuradas</strong> a partir de tus fuentes</li>
          <li>Incluye <strong>citas y referencias</strong> a las fuentes originales</li>
          <li>Exportable a <strong>Google Slides</strong> para editar después</li>
          <li>Ideal para preparar <strong>clases en minutos</strong></li>
          <li>Puedes <strong>personalizar</strong> el diseño después de exportar</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 6. VÍDEOS NARRADOS ──
  `<section data-audio="audio-booklm/slide05.mp3">
    <h2>🎬 Generar vídeos narrados</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo hacerlo</div>
        <pre style="border-left-color:#0d9488;"><code>1. NotebookLM puede generar presentaciones
   con narración de audio sincronizada
2. La IA explica cada diapositiva con voz
   humana (seleccionas el idioma)
3. Se genera un vídeo combinando las
   diapositivas + la narración
4. Descargas el resultado o lo compartes
   directamente con los alumnos</code></pre>
        <div class="ftr" style="margin-top:.3em;">
          <span class="tb" style="background:#fce7f3;color:#9d174d;font-size:.8em;">🎬 Vídeo + voz sincronizados</span>
        </div>
      </div>
      <div class="exp">
        <div class="pl">💡 Características</div>
        <ul class="exp-list">
          <li><strong>Voz natural</strong> que lee y explica el contenido</li>
          <li>Ideal para <strong>flipped classroom</strong> (clase invertida)</li>
          <li>Alumnos pueden <strong>ver y escuchar</strong> a su ritmo</li>
          <li>Perfecto para <strong>alumnos con dificultades</strong> de lectura</li>
          <li>Se puede <strong>compartir por enlace</strong> o descargar</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 7. FLASHCARDS ──
  `<section data-audio="audio-booklm/slide06.mp3">
    <h2>🃏 Generar flashcards</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo hacerlo</div>
        <pre style="border-left-color:#0d9488;"><code>1. Abre la "Guía de estudio" de tu cuaderno
2. Selecciona la pestaña "Flashcards"
3. La IA genera preguntas y respuestas
   basadas en tus fuentes
4. Aparecen en formato digital:
   - Cara A: pregunta o concepto
   - Cara B: respuesta o definición
5. Puedes repasar con el sistema de
   spaced repetition integrado</code></pre>
        <div class="ftr" style="margin-top:.3em;">
          <span class="tb" style="background:#fef3c7;color:#92400e;font-size:.8em;">🃏 Repaso con repetición espaciada</span>
        </div>
      </div>
      <div class="exp">
        <div class="pl">💡 Características</div>
        <ul class="exp-list">
          <li>Genera flashcards <strong>automáticamente</strong> desde tus apuntes</li>
          <li>Sistema de <strong>repetición espaciada</strong> para memorizar</li>
          <li>Puedes <strong>marcar</strong> las que ya sabes y repetir las difíciles</li>
          <li>Ideal para <strong>preparar exámenes</strong> de forma activa</li>
          <li>Las preguntas son <strong>específicas de tu contenido</strong></li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 8. QUIZZES ──
  `<section data-audio="audio-booklm/slide07.mp3">
    <h2>✍️ Generar quizzes y exámenes</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Cómo hacerlo</div>
        <pre style="border-left-color:#0d9488;"><code>1. Dentro de tu cuaderno, usa el chat
2. Escribe un prompt como:
   "Genera 10 preguntas tipo test sobre
    mis apuntes con 4 opciones cada una
    y las soluciones al final"
3. La IA genera las preguntas basándose
   exclusivamente en tus fuentes
4. Puedes pedir diferentes formatos:
   - Verdadero/Falso
   - Preguntas abiertas
   - Relacionar columnas
   - Completar huecos</code></pre>
        <div class="ftr" style="margin-top:.3em;">
          <span class="tb" style="background:#e0e7ff;color:#3730a3;font-size:.8em;">✍️ Variedad de formatos</span>
        </div>
      </div>
      <div class="exp">
        <div class="pl">💡 Características</div>
        <ul class="exp-list">
          <li>Preguntas <strong>basadas en tus fuentes reales</strong> (no en internet)</li>
          <li>Puedes pedir <strong>nivel de dificultad</strong> específico</li>
          <li>Incluye <strong>solucionario</strong> con referencias a las fuentes</li>
          <li>Ideal para <strong>autoevaluación</strong> de los alumnos</li>
          <li>Exportable a <strong>documento</strong> para imprimir</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 9. GUÍA DE ESTUDIO ──
  `<section data-audio="audio-booklm/slide08.mp3">
    <h2>📖 Guía de estudio completa</h2>
    <div class="g2" style="font-size:.85em;">
      <div>
        <div class="card" style="margin-bottom:.35em;">
          <p>📝 <strong>Resumen ejecutivo</strong></p>
          <p class="sm">Resume todo tu contenido en un documento breve</p>
        </div>
        <div class="card" style="margin-bottom:.35em;">
          <p>❓ <strong>Preguntas frecuentes</strong></p>
          <p class="sm">Genera FAQ basadas en dudas comunes del tema</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.35em;">
          <p>📊 <strong>Glosario de términos</strong></p>
          <p class="sm">Extrae los conceptos clave con sus definiciones</p>
        </div>
        <div class="card" style="margin-bottom:.35em;">
          <p>📅 <strong>Plan de estudio</strong></p>
          <p class="sm">Sugiere cómo organizar el repaso del contenido</p>
        </div>
      </div>
    </div>
    <div class="tip">💡 Todo en un solo clic: la guía de estudio se genera automática al subir tus fuentes</div>
  </section>`,

  // ── 10. IDEAS PARA DOCENTES ──
  `<section data-audio="audio-booklm/slide09.mp3">
    <h2>💡 Ideas para usar en clase</h2>
    <div class="g2">
      <div>
        <div class="card green" style="margin-bottom:.35em;">
          <p>🎙️ <strong>Podcast de repaso</strong></p>
          <p class="sm">Genera un podcast del tema y compártelo antes del examen</p>
        </div>
        <div class="card amber" style="margin-bottom:.35em;">
          <p>🃏 <strong>Flashcards colaborativas</strong></p>
          <p class="sm">Los alumnos estudian con las tarjetas generadas del temario</p>
        </div>
      </div>
      <div>
        <div class="card blue" style="margin-bottom:.35em;">
          <p>🎬 <strong>Vídeo para flipped classroom</strong></p>
          <p class="sm">Los alumnos ven el vídeo narrado en casa y trabajan en clase</p>
        </div>
        <div class="card purple" style="margin-bottom:.35em;">
          <p>✍️ <strong>Quiz de autoevaluación</strong></p>
          <p class="sm">Al final de cada unidad, los alumnos se autoevalúan</p>
        </div>
      </div>
    </div>
  </section>`,

  // ── 11. CIERRE ──
  `<section data-audio="audio-booklm/slide10.mp3">
    <h2 style="text-align:center;">🚀 ¡Prueba NotebookLM!</h2>
    <p style="text-align:center;font-size:1em;margin-top:.8em;">📘 <a href="https://notebooklm.google.com" target="_blank">notebooklm.google.com</a></p>
    <p style="text-align:center;font-size:.65em;color:#475569;">Gratis con cuenta de Google · Sin límite de cuadernos</p>
    <hr style="margin:.8em 0;">
    <div style="text-align:center;">
      <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
        <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
      </span>
    </div>
    <p style="text-align:center;font-size:.5em;color:#94a3b8;margin-top:.4em;">Sergi Garcia Barea · Junio 2026</p>
  </section>`,
];
