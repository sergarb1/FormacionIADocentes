const slidesData = [

  // ── 1. PORTADA ──
  `<section data-audio="audio-chatgpt/slide00.mp3">
    <h2 style="font-size:2em;text-align:center;">🤖 ChatGPT, Gemini, Claude…<br>para docentes</h2>
    <h3 style="text-align:center;">Chatbots de IA para crear materiales educativos · Junio 2026</h3>
    <p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
    <div style="text-align:center;margin-top:.3em;">
      <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
        <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
      </span>
    </div>
  </section>`,

  // ── 2. QUÉ SON LOS CHATBOTS ──
  `<section data-audio="audio-chatgpt/slide01.mp3">
    <h2>🧰 ¿Qué son los chatbots de IA?</h2>
    <p class="sm">Asistentes conversacionales que entienden lenguaje natural y generan respuestas. Como tener un compañero que sabe de todo y está disponible 24/7.</p>
    <div class="cmp-grid">
      <div class="cmp-card" style="border-top:3px solid #10b981;">
        <div class="icon">💚</div>
        <div class="name">ChatGPT</div>
        <div class="detail">OpenAI · Modelo GPT · Gratuito con límites · Web + app</div>
      </div>
      <div class="cmp-card" style="border-top:3px solid #f59e0b;">
        <div class="icon">💛</div>
        <div class="name">Gemini</div>
        <div class="detail">Google · Modelo Gemini · Gratuito con límites · Web + app</div>
      </div>
      <div class="cmp-card" style="border-top:3px solid #8b5cf6;">
        <div class="icon">💜</div>
        <div class="name">Claude</div>
        <div class="detail">Anthropic · Modelo Claude · Capa gratuita · Contexto largo</div>
      </div>
      <div class="cmp-card" style="border-top:3px solid #3b82f6;">
        <div class="icon">💙</div>
        <div class="name">Copilot</div>
        <div class="detail">Microsoft · GPT-4 · Gratuito · Integrado en Bing/Edge</div>
      </div>
    </div>
    <div class="tip">💡 Todos tienen versión gratuita. Son herramientas que <strong>generan</strong> contenido, no lo copian de internet.</div>
  </section>`,

  // ── 3. TABLA COMPARATIVA ──
  `<section data-audio="audio-chatgpt/slide02.mp3">
    <h2>🔍 Comparativa rápida</h2>
    <pre style="font-size:.45em;"><code>╔════════════╦══════════╦══════════╦══════════╦══════════╗
║            ║ ChatGPT  ║  Gemini  ║  Claude  ║ Copilot  ║
╠════════════╬══════════╬══════════╬══════════╬══════════╣
║ Gratuito   ║   ✅     ║   ✅     ║   ✅     ║   ✅     ║
║ Subir arch ║   ✅     ║   ✅     ║   ✅     ║   ✅     ║
║ Web search ║   ✅     ║   ✅     ║   ❌     ║   ✅     ║
║ Contexto   ║ 128K     ║  1M      ║ 200K     ║  32K     ║
║ Imágenes   ║   ✅     ║   ✅     ║   ❌     ║   ✅     ║
║ App móvil  ║   ✅     ║   ✅     ║   ✅     ║   ✅     ║
║ Plugins    ║   ✅     ║   ✅     ║   ❌     ║   ❌     ║
╚════════════╩══════════╩══════════╩══════════╩══════════╝</code></pre>
    <p class="sm">Elige según tu necesidad: todos son válidos para crear materiales educativos.</p>
  </section>`,

  // ── 4. CÓMO FUNCIONAN ──
  `<section data-audio="audio-chatgpt/slide03.mp3">
    <h2>⚡ ¿Cómo funcionan?</h2>
    <div class="g2">
      <div>
        <div class="card green" style="margin-bottom:.4em;">
          <p>📝 <strong>1. Entienden lenguaje natural</strong></p>
          <p class="sm">Les hablas como a un compañero: "Necesito un ejercicio sobre fracciones para 1º ESO"</p>
        </div>
        <div class="card blue" style="margin-bottom:.4em;">
          <p>🧠 <strong>2. Generan respuestas originales</strong></p>
          <p class="sm">No copian de internet, crean contenido nuevo basado en su entrenamiento</p>
        </div>
      </div>
      <div>
        <div class="card amber" style="margin-bottom:.4em;">
          <p>🔄 <strong>3. Mantienen contexto</strong></p>
          <p class="sm">Recuerdan toda la conversación. Puedes pedir cambios, ampliaciones, correcciones</p>
        </div>
        <div class="card purple" style="margin-bottom:.4em;">
          <p>⚠️ <strong>4. Pueden alucinar</strong></p>
          <p class="sm">A veces inventan datos. Siempre revisa antes de usar en clase.</p>
        </div>
      </div>
    </div>
    <div class="tip">🧑‍🏫 <strong>Tu criterio docente</strong> sigue siendo imprescindible. La IA es una ayuda, no un sustituto.</div>
  </section>`,

  // ── 5. QUÉ ES UN PROMPT ──
  `<section data-audio="audio-chatgpt/slide04.mp3">
    <h2>📝 ¿Qué es un <span class="highlight">prompt</span>?</h2>
    <div class="g2">
      <div>
        <div class="card" style="text-align:center;height:100%;">
          <p style="font-size:2em;margin:0;">💬</p>
          <p><strong>Entrada de texto</strong></p>
          <p class="sm">Lo que escribes para decirle al chatbot qué necesitas</p>
        </div>
      </div>
      <div>
        <div class="card" style="text-align:center;height:100%;border-top:4px solid #10b981;">
          <p style="font-size:2em;margin:0;">🎯</p>
          <p><strong>A mejor prompt, mejor respuesta</strong></p>
          <p class="sm">El chatbot es tan bueno como el prompt que le des</p>
        </div>
      </div>
    </div>
    <div class="tip">💡 No es magia: es saber <strong>comunicar</strong> lo que necesitas como docente. Funciona igual en ChatGPT, Gemini, Claude y Copilot.</div>
  </section>`,

  // ── 6. ELEMENTOS DE UN BUEN PROMPT ──
  `<section data-audio="audio-chatgpt/slide05.mp3">
    <h2>🏗️ Elementos de un buen prompt</h2>
    <div class="f-item">
      <span class="num">1</span>
      <div><strong>Indicar un rol</strong> <span class="sm">— "Actúa como un profesor de matemáticas..."</span></div>
    </div>
    <div class="f-item">
      <span class="num">2</span>
      <div><strong>Dar un contexto</strong> <span class="sm">— "Estamos trabajando ecuaciones de 1º ESO"</span></div>
    </div>
    <div class="f-item">
      <span class="num">3</span>
      <div><strong>Instrucciones concisas</strong> <span class="sm">— "Quiero ejemplos prácticos basados en el deporte"</span></div>
    </div>
    <div class="f-item">
      <span class="num">4</span>
      <div><strong>Añadir elementos relevantes</strong> <span class="sm">— "Al finalizar, pregúntame si quiero más ejemplos"</span></div>
    </div>
    <hr>
    <p style="text-align:center;font-size:.75em;">💡 Rol + Contexto + Instrucción + Extras = ✅ Prompt efectivo</p>
    <p class="sm" style="text-align:center;">Válido para ChatGPT, Gemini, Claude y Copilot. El secreto está en los detalles.</p>
  </section>`,

  // ── 7. EJEMPLO MATES ──
  `<section data-audio="audio-chatgpt/slide06.mp3">
    <h2 style="font-size:1.2em;">❶ <span class="tag amber">📐 Matemáticas</span> Ecuaciones con deporte</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt (ChatGPT / Gemini / Claude)</div>
        <pre style="border-left-color:#f59e0b;"><code>"Actúa como un profesor de matemáticas de 1º ESO. Estamos trabajando las ecuaciones de primer grado. Quiero obtener ejemplos prácticos basados en el deporte para explicar adecuadamente estos conceptos y que mi alumnado pueda comprenderlos mejor. Quiero que al finalizar me preguntes si quiero más ejemplos o si quiero cambiar de temática, sugiriéndome otras temáticas."</code></pre>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li>Rol definido: <strong>profesor de matemáticas de 1º ESO</strong></li>
          <li>Contexto claro: <strong>ecuaciones de primer grado</strong></li>
          <li>Instrucción concreta: <strong>ejemplos basados en deporte</strong></li>
          <li>Elemento extra: <strong>que pregunte al final</strong></li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 8. EJEMPLO LENGUA ──
  `<section data-audio="audio-chatgpt/slide07.mp3">
    <h2 style="font-size:1.2em;">❷ <span class="tag purple">📖 Lengua</span> Texto adaptado por nivel</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt (válido en cualquier chatbot)</div>
        <pre style="border-left-color:#8b5cf6;"><code>"Actúa como un profesor de lengua de 2º ESO. Tengo un texto sobre el Romanticismo literario de 300 palabras. Quiero que lo reescribas en tres versiones: una para 1º ESO (vocabulario sencillo), otra para 2º ESO (nivel medio) y otra para 4º ESO (conceptos avanzados). Mantén las ideas principales. Al final, añade 3 preguntas de comprensión para cada nivel. Entrégamelo en formato tabla."</code></pre>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li>Rol + <strong>nivel concreto</strong> para cada versión</li>
          <li>Pide <strong>formato tabla</strong> → fácil de comparar</li>
          <li>Incluye <strong>preguntas de comprensión</strong> por nivel</li>
          <li>Ideal para <strong>aula diversa</strong> con distintos ritmos</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 9. EJEMPLO EVALUACIÓN ──
  `<section data-audio="audio-chatgpt/slide08.mp3">
    <h2 style="font-size:1.2em;">❸ <span class="tag teal">📋 Evaluación</span> Rúbrica de trabajo</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="border-left-color:#14b8a6;"><code>"Actúa como un docente de ciencias sociales. Necesito una rúbrica de evaluación para un trabajo sobre la Edad Media en 2º ESO. El trabajo incluye: portada, introducción, desarrollo (3 apartados), conclusión y bibliografía. Criterios: contenido, organización, ortografía, fuentes y presentación. 4 niveles: Excelente (4), Bien (3), Mejorable (2), Insuficiente (1). Formato tabla con columna de puntuación total."</code></pre>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li>Especifica <strong>partes del trabajo</strong> y <strong>criterios</strong></li>
          <li>Define <strong>4 niveles</strong> con etiquetas claras</li>
          <li>Pide <strong>formato tabla</strong> → listo para usar</li>
          <li>Base para luego ajustar los descriptores</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 10. EJEMPLO TUTORÍA ──
  `<section data-audio="audio-chatgpt/slide09.mp3">
    <h2 style="font-size:1.2em;">❹ <span class="tag blue">👥 Tutoría</span> Carta para familias</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="border-left-color:#3b82f6;"><code>"Actúa como un tutor de 3º ESO. Necesito redactar una carta para las familias informando sobre la salida escolar al museo de ciencia del viernes 15 de mayo. Incluye: fecha, hora de salida (8:30) y regreso (17:00), precio (12€), qué deben llevar (comida, agua, cuaderno), teléfono de contacto. Tono cercano pero formal. Extensión máximo un folio. Espacio para firma y fecha tope (10 de mayo)."</code></pre>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li>Datos <strong>muy concretos</strong> → evita olvidos</li>
          <li><strong>Tono definido</strong> (cercano pero formal)</li>
          <li>Incluye <strong>espacio para firma</strong></li>
          <li>Lista para imprimir y entregar</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 11. EJEMPLO EXÁMENES ──
  `<section data-audio="audio-chatgpt/slide10.mp3">
    <h2 style="font-size:1.2em;">❺ <span class="tag amber">✏️ Exámenes</span> Preguntas tipo test</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="border-left-color:#f59e0b;"><code>"Actúa como un profesor de biología de 1º Bachillerato. Estamos viendo el tema de la célula. Genera 15 preguntas tipo test con 4 opciones cada una (A, B, C, D). Las preguntas deben cubrir: tipos de células, orgánulos y sus funciones, diferencias entre célula vegetal y animal. Dificultad variada: 5 fáciles, 5 medias, 5 difíciles. Al final proporciona la solución correcta para cada una. Sin errores científicos."</code></pre>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li>Distribuye <strong>dificultad</strong> (5+5+5)</li>
          <li>Especifica <strong>temas concretos</strong> del currículo</li>
          <li>Pide <strong>solucionario</strong> incluido</li>
          <li>Ahorra horas de preparación</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 12. EJEMPLO PLANIFICACIÓN ──
  `<section data-audio="audio-chatgpt/slide11.mp3">
    <h2 style="font-size:1.2em;">❻ <span class="tag green">📅 Planificación</span> Situación de aprendizaje</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="border-left-color:#10b981;"><code>"Actúa como un docente de geografía de 3º ESO. Diseña una situación de aprendizaje sobre el cambio climático para 6 sesiones. Incluye: título, objetivos didácticos, contenidos, competencias clave, metodología (trabajo cooperativo), actividades por sesión, producto final (infografía digital), criterios de evaluación y atención a la diversidad. Extensión máxima 2 folios. Formato estructurado con apartados claros."</code></pre>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li>Sigue la <strong>estructura LOMLOE</strong></li>
          <li>Distribuye <strong>6 sesiones</strong> con actividades</li>
          <li>Incluye <strong>atención a la diversidad</strong></li>
          <li>Listo para entregar en jefatura</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 13. EJEMPLO INGLÉS ──
  `<section data-audio="audio-chatgpt/slide12.mp3">
    <h2 style="font-size:1.2em;">❼ <span class="tag rose">🌍 Inglés</span> Role-playing conversación</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="border-left-color:#ec4899;"><code>"Actúa como un profesor de inglés de 3º ESO. Necesito un diálogo para practicar el 'present perfect' y 'past simple'. El tema es una entrevista de trabajo para camarero en un restaurante. El diálogo debe tener 8 intervenciones por cada interlocutor (entrevistador y candidato). Incluye 5 huecos con verbos entre paréntesis para conjugar. Añade ejercicio de verdadero/falso con 5 frases sobre el diálogo."</code></pre>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li>Contexto <strong>realista</strong> (entrevista de trabajo)</li>
          <li>Practica dos tiempos verbales <strong>contrastados</strong></li>
          <li>Incluye <strong>ejercicio de huecos</strong> integrado</li>
          <li>Material listo para fotocopiar</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 14. EJEMPLO HISTORIA ──
  `<section data-audio="audio-chatgpt/slide13.mp3">
    <h2 style="font-size:1.2em;">❽ <span class="tag amber">🏛️ Historia</span> Esquema visual de etapa</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt</div>
        <pre style="border-left-color:#f59e0b;"><code>"Actúa como un profesor de historia de 4º ESO. Necesito un esquema visual de la Revolución Industrial. Divídelo en 3 etapas: primera Revolución (1760-1840), segunda Revolución (1870-1914) y consecuencias sociales. Para cada etapa incluye: años clave, inventos principales, países protagonistas y cambios sociales. Formato esquema jerárquico con viñetas. Lenguaje claro para 4º ESO. Añade línea temporal al inicio."</code></pre>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Divide en etapas</strong> para facilitar el estudio</li>
          <li>Pide <strong>formato esquema</strong> con viñetas</li>
          <li>Incluye <strong>línea temporal</strong> visual</li>
          <li>Lenguaje adaptado al <strong>nivel del curso</strong></li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 15. CÓMO INTERACTUAR ──
  `<section data-audio="audio-chatgpt/slide14.mp3">
    <h2>🔄 Interactúa con el chatbot</h2>
    <p class="sm">Todos mantienen el contexto de la conversación. Puedes:</p>
    <div class="g2">
      <div>
        <div class="card green" style="margin-bottom:.35em;">
          <p>➕ <strong>Pedir ampliaciones</strong></p>
          <p class="sm">"Dame 3 ejemplos más sobre baloncesto"</p>
        </div>
        <div class="card amber" style="margin-bottom:.35em;">
          <p>🔄 <strong>Cambiar de tema</strong></p>
          <p class="sm">"Ahora sobre música, por favor"</p>
        </div>
      </div>
      <div>
        <div class="card blue" style="margin-bottom:.35em;">
          <p>✏️ <strong>Corregir y matizar</strong></p>
          <p class="sm">"Hazlo más fácil, para 2º ESO"</p>
        </div>
        <div class="card purple" style="margin-bottom:.35em;">
          <p>❓ <strong>Comparar resultados</strong></p>
          <p class="sm">Prueba el mismo prompt en ChatGPT, Gemini y Claude. Cada uno da un resultado distinto.</p>
        </div>
      </div>
    </div>
    <div class="tip">💡 No es solo un prompt → es una <strong>conversación</strong> con la que puedes iterar. Prueba el mismo prompt en diferentes chatbots y compara.</div>
  </section>`,

  // ── 16. RECURSOS ──
  `<section data-audio="audio-chatgpt/slide15.mp3">
    <h2>🔗 Enlaces y recursos</h2>
    <div class="card green" style="margin-bottom:.4em;">
      <p>📚 <strong>AwesomeList Prompts ChatGPT para Educación</strong></p>
      <p class="sm">🔗 <a href="https://github.com/sergarb1/AwesomeList-Prompts-ChatGPT-Educacion" target="_blank">github.com/sergarb1/AwesomeList-Prompts-ChatGPT-Educacion</a></p>
    </div>
    <div class="card blue" style="margin-bottom:.4em;">
      <p>🌐 <strong>Gemini para educadores</strong></p>
      <p class="sm">🔗 <a href="https://gemini.google/" target="_blank">gemini.google.com</a></p>
    </div>
    <div class="card purple" style="margin-bottom:.4em;">
      <p>📝 <strong>Claude — Anthropic</strong></p>
      <p class="sm">🔗 <a href="https://claude.ai" target="_blank">claude.ai</a></p>
    </div>
    <div class="card amber" style="margin-bottom:.4em;">
      <p>🔍 <strong>Copilot — Microsoft</strong></p>
      <p class="sm">🔗 <a href="https://copilot.microsoft.com" target="_blank">copilot.microsoft.com</a></p>
    </div>
  </section>`,

  // ── 17. CIERRE ──
  `<section data-audio="audio-chatgpt/slide16.mp3">
    <h2 style="text-align:center;">🤖 ¡A practicar!</h2>
    <p style="text-align:center;font-size:1em;margin-top:.8em;">🧑‍🏫 Los chatbots son tus asistentes · 🎯 Tú pones el criterio docente</p>
    <hr style="margin:.8em 0;">
    <div class="g2" style="font-size:.8em;">
      <div class="card" style="text-align:center;border-top:4px solid #10b981;">
        <p style="font-size:1.5em;margin:0;">💚</p>
        <p><strong>ChatGPT</strong></p>
        <p class="sm">OpenAI · Versátil · Gran ecosistema</p>
      </div>
      <div class="card" style="text-align:center;border-top:4px solid #f59e0b;">
        <p style="font-size:1.5em;margin:0;">💛</p>
        <p><strong>Gemini</strong></p>
        <p class="sm">Google · Contexto enorme · Gratuito</p>
      </div>
    </div>
    <div class="g2" style="font-size:.8em;margin-top:.3em;">
      <div class="card" style="text-align:center;border-top:4px solid #8b5cf6;">
        <p style="font-size:1.5em;margin:0;">💜</p>
        <p><strong>Claude</strong></p>
        <p class="sm">Anthropic · Contexto largo · Detallado</p>
      </div>
      <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
        <p style="font-size:1.5em;margin:0;">💙</p>
        <p><strong>Copilot</strong></p>
        <p class="sm">Microsoft · Web search · Integrado</p>
      </div>
    </div>
    <p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.5em;">CC BY-SA 4.0 · Sergi Garcia Barea · Junio 2026</p>
  </section>`,
];
