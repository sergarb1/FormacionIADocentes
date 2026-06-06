const slidesData = [

  // ── 1. PORTADA ──
  `<section data-audio="audio-codigo-cli/slide00.mp3">
    <h2 style="font-size:2em;text-align:center;">💻 Asistentes de código<br>con IA para docentes</h2>
    <h3 style="text-align:center;">OpenCode · Codex CLI · Gemini CLI · Claude Code · Junio 2026</h3>
    <p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
    <div style="text-align:center;margin-top:.4em;">
      <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
        <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
      </span>
    </div>
  </section>`,

  // ── 2. PANORAMA GENERAL ──
  `<section data-audio="audio-codigo-cli/slide01.mp3">
    <h2>🧰 Asistentes de código CLI</h2>
    <p class="sm">Herramientas que usas desde la terminal para crear materiales educativos sin saber programar. Les describes lo que necesitas y ellas lo generan.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6em;margin-top:.2em;">
      <div class="card" style="border-top:4px solid #10b981;text-align:center;">
        <p style="font-size:1.3em;margin:0;">🟢</p>
        <p><strong>OpenCode</strong></p>
        <p class="sm">100% gratuita · Open source · Sin límites</p>
      </div>
      <div class="card" style="border-top:4px solid #3b82f6;text-align:center;">
        <p style="font-size:1.3em;margin:0;">🔵</p>
        <p><strong>Codex CLI</strong></p>
        <p class="sm">Capa gratuita limitada · OpenAI · Bueno para código</p>
      </div>
      <div class="card" style="border-top:4px solid #f59e0b;text-align:center;">
        <p style="font-size:1.3em;margin:0;">🟡</p>
        <p><strong>Gemini CLI</strong></p>
        <p class="sm">Capa gratuita limitada · Google · Subida de archivos</p>
      </div>
      <div class="card" style="border-top:4px solid #8b5cf6;text-align:center;">
        <p style="font-size:1.3em;margin:0;">🟣</p>
        <p><strong>Claude Code</strong></p>
        <p class="sm">Capa gratuita limitada · Anthropic · Contexto largo</p>
      </div>
    </div>
    <div class="tip">🎯 Recomendada: <strong>OpenCode</strong> — gratuita, sin restricciones, en constante mejora</div>
  </section>`,

  // ── 3. OP en depth ──
  `<section data-audio="audio-codigo-cli/slide02.mp3">
    <h2>🟢 OpenCode — La recomendada</h2>
    <div class="g2">
      <div>
        <div class="card" style="margin-bottom:.3em;">
          <p>✅ <strong>100% gratuita</strong></p>
          <p class="sm">Sin límites de uso, sin planes de pago. Open source.</p>
        </div>
        <div class="card" style="margin-bottom:.3em;">
          <p>✅ <strong>Skills integrados</strong></p>
          <p class="sm">Instrucciones especializadas: presentaciones, documentos, juegos, web, correos, horarios…</p>
        </div>
        <div class="card" style="margin-bottom:.3em;">
          <p>✅ <strong>Modo agente autónomo</strong></p>
          <p class="sm">Crea, modifica y gestiona archivos por sí misma. Tú solo le dices qué hacer.</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.3em;">
          <p>✅ <strong>Modelo potente</strong></p>
          <p class="sm">DeepSeek V4 y otros modelos de última generación. Resultados de alta calidad.</p>
        </div>
        <div class="card" style="margin-bottom:.3em;">
          <p>✅ <strong>CLI + Web</strong></p>
          <p class="sm">Terminal y próximamente interfaz web. Instalación simple con npm.</p>
        </div>
        <div class="card" style="margin-bottom:.3em;">
          <p>✅ <strong>Comunidad activa</strong></p>
          <p class="sm">Nuevas funcionalidades cada semana. Repositorio en GitHub.</p>
        </div>
      </div>
    </div>
    <div class="tip">💡 Ideal para docentes: creas materiales sin preocuparte por costes ni límites</div>
  </section>`,

  // ── 4. COMPARATIVA ──
  `<section data-audio="audio-codigo-cli/slide03.mp3">
    <h2>🔍 Comparativa rápida</h2>
    <pre style="font-size:.45em;"><code>╔════════════════╦════════════╦══════════════╦══════════════╦══════════════╗
║                ║  OpenCode  ║  Codex CLI   ║  Gemini CLI  ║  Claude Code ║
╠════════════════╬════════════╬══════════════╬══════════════╬══════════════╣
║ Precio         ║   Gratis   ║ Gratis lim.  ║ Gratis lim.  ║ Gratis lim.  ║
║ Open source    ║     ✅     ║      ✅      ║      ❌      ║      ❌      ║
║ Skills         ║     ✅     ║      ❌      ║      ❌      ║      ❌      ║
║ Modo agente    ║     ✅     ║      ✅      ║      ✅      ║      ✅      ║
║ Subir archivos ║     ✅     ║      ✅      ║      ✅      ║      ✅      ║
║ Web scraping   ║     ✅     ║      ❌      ║      ❌      ║      ❌      ║
║ Audio          ║     ✅     ║      ❌      ║      ❌      ║      ❌      ║
║ Instalación    ║  npm i -g  ║  npm i -g    ║  SDK Google  ║  npm i -g    ║
╚════════════════╩════════════╩══════════════╩══════════════╩══════════════╝</code></pre>
  </section>`,

  // ── 5. CÓMO USAR OP ──
  `<section data-audio="audio-codigo-cli/slide04.mp3">
    <h2>🛠️ Cómo usar OpenCode</h2>
    <div class="g2">
      <div>
        <div class="card" style="margin-bottom:.4em;">
          <p>1️⃣ <strong>Instalar</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>npm install -g @opencode/cli</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>2️⃣ <strong>Iniciar en tu carpeta</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>cd mis-materiales
opencode</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>3️⃣ <strong>Pedir lo que necesitas</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>"Crea un documento bonito con el horario
de clases para imprimir, logo del centro
incluido"</code></pre>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.4em;">
          <p>4️⃣ <strong>Usar skills</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>"Carga el skill de documentos educativos
y genera una circular para las familias
sobre la excursión del viernes"</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>5️⃣ <strong>Modificar sobre la marcha</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>"Cambia los colores al tono azul del
centro, pon el logo a la izquierda
y añade un pie de página"</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>6️⃣ <strong>Ver resultado</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>Abre el HTML en tu navegador, imprímelo
o compártelo con las familias</code></pre>
        </div>
      </div>
    </div>
  </section>`,

  // ── 6. QUÉ SON LOS SKILLS ──
  `<section data-audio="audio-codigo-cli/slide05.mp3">
    <h2>🧠 Skills: el superpoder de OpenCode</h2>
    <p class="sm">Los <strong>skills</strong> son instrucciones especializadas que le dicen a OpenCode cómo comportarse para cada tarea. Como tener un experto en cada materia.</p>
    <div class="g2" style="margin-top:.3em;">
      <div>
        <div class="card" style="margin-bottom:.35em;border-left:3px solid #10b981;">
          <p>📄 <strong>Documentos bonitos</strong></p>
          <p class="sm">Circulares, cartas a familias, autorizaciones, certificados, diplomas en HTML imprimible</p>
        </div>
        <div class="card" style="margin-bottom:.35em;border-left:3px solid #3b82f6;">
          <p>📊 <strong>Presentaciones</strong></p>
          <p class="sm">HTML con Reveal.js, estructura limpia, diseño profesional y audio narrado</p>
        </div>
        <div class="card" style="margin-bottom:.35em;border-left:3px solid #f59e0b;">
          <p>📝 <strong>Worksheets</strong></p>
          <p class="sm">Fichas imprimibles A4 listas para fotocopiar, con ejercicios y solucionario</p>
        </div>
        <div class="card" style="margin-bottom:.35em;border-left:3px solid #8b5cf6;">
          <p>📅 <strong>Horarios y cuadrantes</strong></p>
          <p class="sm">Horarios de clase, cuadrantes de guardias, calendarios escolares, planificaciones semanales</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.35em;border-left:3px solid #ec4899;">
          <p>✉️ <strong>Correos y comunicaciones</strong></p>
          <p class="sm">Emails a familias, circulares, newsletter del centro, comunicados oficiales</p>
        </div>
        <div class="card" style="margin-bottom:.35em;border-left:3px solid #14b8a6;">
          <p>📱 <strong>Aplicaciones</strong></p>
          <p class="sm">Registro de notas, control de asistencia, generador de informes, horarios interactivos</p>
        </div>
        <div class="card" style="margin-bottom:.35em;border-left:3px solid #f97316;">
          <p>🎮 <strong>Juegos educativos</strong></p>
          <p class="sm">Quizzes, memory, arrastrar y soltar, sopa de letras en HTML+JS puro</p>
        </div>
        <div class="card" style="margin-bottom:.35em;border-left:3px solid #a855f7;">
          <p>🌐 <strong>Webs educativas</strong></p>
          <p class="sm">Miniwebs completas con navegación, recursos multimedia para tus unidades didácticas</p>
        </div>
      </div>
    </div>
    <div class="tip">🎯 "Carga el skill de [nombre]" — Pruébalo con: documentos, horarios, correos, juegos</div>
  </section>`,

  // ── 7. CÓMO USAR CODEX CLI ──
  `<section data-audio="audio-codigo-cli/slide06.mp3">
    <h2>🔵 Codex CLI (OpenAI)</h2>
    <div class="g2">
      <div>
        <div class="card" style="margin-bottom:.4em;">
          <p>⚙️ <strong>Instalación</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>npm install -g @openai/codex</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>🔑 <strong>API Key</strong></p>
          <p class="sm">Necesitas clave OpenAI. Capa gratuita con límite de tokens.</p>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>💪 <strong>Lo mejor</strong></p>
          <p class="sm">Muy bueno generando código estructurado. Ideal si ya tienes API key.</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.4em;">
          <p>⚠️ <strong>Límites gratis</strong></p>
          <p class="sm">La capa gratuita tiene límite de tokens. Para uso intensivo necesitas plan de pago.</p>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>💡 <strong>Ejemplo de uso</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>codex "Genera un registro de notas
interactivo para 30 alumnos con
media, gráfico y color verde si
aprueban, rojo si suspenden"</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>📎 <strong>Subir archivos</strong></p>
          <p class="sm">Puedes subir PDFs e imágenes para que los use como contexto.</p>
        </div>
      </div>
    </div>
  </section>`,

  // ── 8. CÓMO USAR GEMINI CLI ──
  `<section data-audio="audio-codigo-cli/slide07.mp3">
    <h2>🟡 Gemini CLI (Google)</h2>
    <div class="g2">
      <div>
        <div class="card" style="margin-bottom:.4em;">
          <p>⚙️ <strong>Instalación</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>docker pull gcr.io/gemini/gemini-cli
# O con SDK de Google Cloud</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>🔑 <strong>API Key</strong></p>
          <p class="sm">Cuenta Google Cloud. Capa gratuita generosa para empezar.</p>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>💪 <strong>Lo mejor</strong></p>
          <p class="sm">Integración con Google, subida de archivos grande, conocimiento del mundo.</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.4em;">
          <p>⚠️ <strong>Límites gratis</strong></p>
          <p class="sm">La capa gratuita tiene límites. Para proyectos grandes puede escalar.</p>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>💡 <strong>Ejemplo de uso</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>gemini "Crea un horario de guardias
para 20 profesores, de 8:00 a 15:00,
con colores por departamento y
legible en A3"</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>📎 <strong>Subir archivos</strong></p>
          <p class="sm">Acepta PDFs, imágenes, audio y vídeo. Ideal con materiales existentes.</p>
        </div>
      </div>
    </div>
  </section>`,

  // ── 9. CÓMO USAR CLAUDE CODE ──
  `<section data-audio="audio-codigo-cli/slide08.mp3">
    <h2>🟣 Claude Code (Anthropic)</h2>
    <div class="g2">
      <div>
        <div class="card" style="margin-bottom:.4em;">
          <p>⚙️ <strong>Instalación</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>npm install -g @anthropic/claude-code</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>🔑 <strong>API Key</strong></p>
          <p class="sm">Clave Anthropic. Capa gratuita limitada para pruebas.</p>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>💪 <strong>Lo mejor</strong></p>
          <p class="sm">Excelente analizando contexto largo y generando materiales detallados.</p>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:.4em;">
          <p>⚠️ <strong>Límites gratis</strong></p>
          <p class="sm">Capa gratuita más restrictiva. Para uso continuado requiere suscripción.</p>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>💡 <strong>Ejemplo de uso</strong></p>
          <pre style="font-size:.5em;margin:.15em 0;"><code>claude "Genera un boletín de notas
personalizado para cada alumno con
comentarios positivos y áreas de
mejora en HTML bonito"</code></pre>
        </div>
        <div class="card" style="margin-bottom:.4em;">
          <p>📎 <strong>Subir archivos</strong></p>
          <p class="sm">Acepta PDFs largos. Su ventana de contexto es la más amplia del mercado.</p>
        </div>
      </div>
    </div>
  </section>`,

  // ── 10. EJEMPLO 1: DOCUMENTO BONITO ──
  `<section data-audio="audio-codigo-cli/slide09.mp3">
    <h2 style="font-size:1.2em;">📄 Ejemplo 1: Circular para familias</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="font-size:.52em;border-left-color:#10b981;"><code>"Carga el skill de documentos educativos.

Crea una circular para las familias en HTML
imprimible sobre la excursión al museo de
ciencias del viernes 15 de mayo.

Incluye: fecha, hora de salida 8:30, regreso
17:00, precio 12€, qué llevar (comida, agua,
cuaderno), teléfono de contacto.

Diseño: A4, limpio, logo del centro arriba,
espacio para nombre del alumno y firma de la
familia, fecha tope de entrega 10 de mayo.
Tono cercano pero formal."</code></pre>
        <div class="ftr"><span class="tb op">OpenCode</span> · Documento bonito · Imprimible</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil</div>
        <ul class="exp-list">
          <li>✅ Genera un HTML imprimible con aspecto profesional</li>
          <li>✅ Incluye todos los datos: fechas, horas, precios, contacto</li>
          <li>✅ Espacio para firma → lista para imprimir y repartir</li>
          <li>✅ Puedes cambiar colores, logo o texto en segundos</li>
          <li>✅ Lo compartes por email o lo imprimes para el alumnado</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 11. EJEMPLO 2: HORARIO ──
  `<section data-audio="audio-codigo-cli/slide10.mp3">
    <h2 style="font-size:1.2em;">📅 Ejemplo 2: Horario de clases</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="font-size:.52em;border-left-color:#3b82f6;"><code>"Carga el skill de horarios y cuadrantes.

Genera un horario de clases semanal en HTML
para imprimir en A4. Debe tener:

- 5 columnas: lunes a viernes
- 7 filas: 8:30 a 14:30 con espacios de 1h
- Franja del patio marcada en otro color
- Asignaturas con colores por materia:
  mates azul, lengua verde, inglés rosa,
  ciencias naranja, historia marrón, gimnasia
  amarillo, plástica morado
- Logo del centro arriba a la izquierda
- Nombre del alumno y curso arriba a la derecha

Que sea bonito, limpio y listo para plastificar."</code></pre>
        <div class="ftr"><span class="tb op">OpenCode</span> · Horario · A4 imprimible</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil</div>
        <ul class="exp-list">
          <li>✅ Horario personalizado para cada alumno en segundos</li>
          <li>✅ Código de colores por materia → fácil de leer</li>
          <li>✅ Franja de patio marcada → los niños saben cuándo descansan</li>
          <li>✅ Listo para imprimir y plastificar</li>
          <li>✅ Puedes generar 30 horarios distintos en un minuto</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 12. EJEMPLO 3: CORREO ──
  `<section data-audio="audio-codigo-cli/slide11.mp3">
    <h2 style="font-size:1.2em;">✉️ Ejemplo 3: Email a familias</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="font-size:.52em;border-left-color:#ec4899;"><code>"Carga el skill de correos y comunicaciones.

Genera un email HTML bonito y responsive para
enviar a las familias de 1º ESO informando
sobre la reunión general del segundo trimestre.

Incluye:
- Asunto
- Saludo personalizado
- Fecha: martes 12 de marzo a las 17:00
- Lugar: salón de actos
- Orden del día: resultados académicos,
  actividades extraescolares, normas de
  convivencia, ruegos y preguntas
- Enlace al formulario de confirmación de
  asistencia
- Despedida cordial

Diseño limpio, legible en móvil, con los
colores del centro. Tono cercano y profesional."</code></pre>
        <div class="ftr"><span class="tb op">OpenCode</span> · Email HTML · Responsive</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil</div>
        <ul class="exp-list">
          <li>✅ HTML listo para copiar y pegar en Gmail, Outlook o la herramienta que uses</li>
          <li>✅ Diseño responsive → se ve bien en móvil y escritorio</li>
          <li>✅ Incluye todos los datos de la reunión</li>
          <li>✅ Enlace a formulario → puedes saber quién vendrá</li>
          <li>✅ El tono cercano mejora la comunicación con las familias</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 13. EJEMPLO 4: REGISTRO DE NOTAS ──
  `<section data-audio="audio-codigo-cli/slide12.mp3">
    <h2 style="font-size:1.2em;">📊 Ejemplo 4: Registro de notas interactivo</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="font-size:.52em;border-left-color:#14b8a6;"><code>"Carga el skill de aplicaciones.

Crea una aplicación web en HTML+JS para
registrar notas de una clase.

Características:
- Añadir alumnos con nombre y apellidos
- 3 evaluaciones con notas de 0 a 10
- Media automática redondeada a 2 decimales
- Nota final (media de las 3 evaluaciones)
- Color verde si la nota final es >=5, rojo si <5
- Botón para exportar a CSV
- Los datos se guardan en localStorage
- Diseño limpio, colores suaves, responsive

Que funcione sin conexión a internet."</code></pre>
        <div class="ftr"><span class="tb op">OpenCode</span> · App web · Offline</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil</div>
        <ul class="exp-list">
          <li>✅ Aplicación funcional sin saber programar</li>
          <li>✅ Guarda los datos en el navegador → no se pierden al cerrar</li>
          <li>✅ Código de colores: verde aprobado, rojo suspenso → de un vistazo</li>
          <li>✅ Exportación a CSV → puedes abrirlo en Excel o en cualquier programa</li>
          <li>✅ Funciona sin internet → usable en cualquier sitio</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 14. EJEMPLO 5: CUADRRANTE DE GUARDIAS ──
  `<section data-audio="audio-codigo-cli/slide13.mp3">
    <h2 style="font-size:1.2em;">📋 Ejemplo 5: Cuadrante de guardias</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="font-size:.52em;border-left-color:#f59e0b;"><code>"Carga el skill de horarios y cuadrantes.

Genera un cuadrante de guardias semanal para
el departamento de matemáticas (8 profesores).

De lunes a viernes de 8:30 a 14:30 en
franjas de 1 hora. Cada profesor tiene una
guardia distinta cada día. No puede coincidir
el mismo profesor en dos horas seguidas.

Colores: verde para guardias de aula, azul
para pasillo, naranja para patio. Una fila
extra para observaciones.

Diseño en HTML imprimible A3 apaisado, claro
y profesional. Logo del centro arriba."</code></pre>
        <div class="ftr"><span class="tb op">OpenCode</span> · Cuadrante · A3 imprimible</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil</div>
        <ul class="exp-list">
          <li>✅ Distribuye las guardias automáticamente sin solapamientos</li>
          <li>✅ Código de colores por tipo de guardia → se lee al instante</li>
          <li>✅ Formato A3 apaisado → perfecto para la sala de profesores</li>
          <li>✅ Si falta un profesor, puedes regenerar el cuadrante en segundos</li>
          <li>✅ Imprimible y también compartible por correo</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 15. EJEMPLO 6: JUEGO QUIZ ──
  `<section data-audio="audio-codigo-cli/slide14.mp3">
    <h2 style="font-size:1.2em;">🎮 Ejemplo 6: Quiz interactivo</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="font-size:.52em;border-left-color:#8b5cf6;"><code>"Carga el skill de juegos educativos.

Crea un quiz interactivo en HTML+JS sobre
los planetas del sistema solar para 5º de
primaria (10-11 años).

- 10 preguntas con 4 opciones (A, B, C, D)
- Una sola respuesta correcta por pregunta
- Al seleccionar: verde si acierta, rojo si falla
- Al final: puntuación total y mensaje motivador
- Barra de progreso que se llena al responder
- Diseño espacial: fondo oscuro, estrellas,
  planetas decorativos
- Letra grande y clara
- Que funcione sin internet

Incluye datos curiosos en cada respuesta."</code></pre>
        <div class="ftr"><span class="tb op">OpenCode</span> · Quiz · Juego educativo</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil</div>
        <ul class="exp-list">
          <li>✅ Juego completo listo para usar en clase</li>
          <li>✅ Feedback inmediato: verde acierto, rojo fallo</li>
          <li>✅ Puntuación final con mensaje motivador → refuerzo positivo</li>
          <li>✅ Diseño atractivo para los niños: espacio, estrellas, planetas</li>
          <li>✅ Sin internet → funciona en cualquier aula, incluso sin conexión</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 16. EJEMPLO 7: EXAMEN ──
  `<section data-audio="audio-codigo-cli/slide15.mp3">
    <h2 style="font-size:1.2em;">✏️ Ejemplo 7: Examen con solucionario</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="font-size:.52em;border-left-color:#f97316;"><code>"Carga el skill de documentos educativos.

Genera un examen de matemáticas para 1º ESO
sobre fracciones en HTML imprimible A4.

Incluye:
- 10 preguntas: 4 de simplificar, 3 de sumar/
  restar, 2 de multiplicar/dividir, 1 problema
  con fracciones en la vida real
- Espacio para escribir la respuesta debajo
  de cada pregunta
- Portada con nombre, fecha, curso y nota
- Paginación
- Versión para el profesor con solucionario
  en página aparte
- Diseño limpio, profesional, fotocopiable en
  blanco y negro"</code></pre>
        <div class="ftr"><span class="tb op">OpenCode</span> · Examen · Solucionario incluido</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil</div>
        <ul class="exp-list">
          <li>✅ Examen completo generado en segundos con distintos tipos de pregunta</li>
          <li>✅ Solucionario separado → para el profesor, sin que lo vean los alumnos</li>
          <li>✅ Formato A4 B/N → fotocopiable sin gastar tinta de color</li>
          <li>✅ Puedes generar 4 versiones distintas para evitar copias</li>
          <li>✅ Editable: cambias números, añades preguntas, ajustas dificultad</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 17. EJEMPLO 8: DIPLOMA ──
  `<section data-audio="audio-codigo-cli/slide16.mp3">
    <h2 style="font-size:1.2em;">🏆 Ejemplo 8: Diploma personalizado</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="font-size:.52em;border-left-color:#10b981;"><code>"Carga el skill de documentos educativos.

Genera un diploma en HTML imprimible para
entregar a los alumnos al final del curso.
Estilo pergamino elegante.

Incluye:
- Marco decorativo dorado
- Texto: 'Otorgado a [NOMBRE] por su esfuerzo
  y dedicación durante el curso 2025-2026'
- Espacio para nombre del alumno (que se pueda
  rellenar a mano o editar)
- Línea de firma del tutor o tutora
- Línea de firma del director/a
- Fecha
- Logo del centro
- Fondo color marfil, tipografía elegante

Que quede bonito para imprimir en A4."</code></pre>
        <div class="ftr"><span class="tb op">OpenCode</span> · Diploma · Imprimible</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué es útil</div>
        <ul class="exp-list">
          <li>✅ Diploma con aspecto profesional y elegante</li>
          <li>✅ Personalizable: cambias nombre, curso, motivo</li>
          <li>✅ Imprimible en A4 → listo para entregar</li>
          <li>✅ Puedes generar 30 diplomas en un minuto, uno por alumno</li>
          <li>✅ Los alumnos valoran mucho este tipo de reconocimientos</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 18. RESUMEN ──
  `<section data-audio="audio-codigo-cli/slide17.mp3">
    <h2>✨ En resumen</h2>
    <div class="g2" style="font-size:.8em;">
      <div class="card" style="text-align:center;border-top:4px solid #10b981;">
        <p style="font-size:1.5em;margin:0;">🟢</p>
        <p><strong>OpenCode</strong> — La recomendada</p>
        <p class="sm">✅ 100% gratuita · ✅ Skills · ✅ Sin límites · ✅ Open source</p>
      </div>
      <div class="card" style="border-top:4px solid #94a3b8;text-align:center;">
        <p style="font-size:1.3em;margin:0;">🔵 🟡 🟣</p>
        <p><strong>Alternativas con capa gratis</strong></p>
        <p class="sm">Codex CLI · Gemini CLI · Claude Code · Buenos para probar</p>
      </div>
    </div>
    <hr style="margin:.4em 0;">
    <p style="text-align:center;">📄 Documentos · 📊 Presentaciones · 📅 Horarios · ✉️ Correos · 📱 Apps · 🎮 Juegos · ✏️ Exámenes</p>
    <p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Junio 2026</p>
  </section>`,
];
