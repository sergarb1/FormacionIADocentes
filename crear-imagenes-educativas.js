const slidesData = [
  // ── 1. PORTADA ──
  `<section data-audio="audio-imagenes/slide00.mp3">
    <h2 style="font-size:2em;text-align:center;">🧠 Crear imágenes<br>educativas con IA</h2>
    <h3 style="text-align:center;">ChatGPT Images 2.0 · Nano Banana 2 · Junio 2026</h3>
    <p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
    <div style="text-align:center;margin-top:.4em;">
      <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
        <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
      </span>
    </div>
  </section>`,

  // ── 2. HERRAMIENTAS ──
  `<section data-audio="audio-imagenes/slide01.mp3">
    <h2>🛠️ Dos herramientas clave</h2>
    <div class="g2">
      <div class="card" style="border-top:4px solid #eab308;">
        <p><span style="font-size:1.4em;">🟡</span> <strong>ChatGPT Images 2.0</strong> <span class="bg">OpenAI</span></p>
        <p class="sm">~15 img/día gratis · Texto casi perfecto · Thinking (pago)</p>
      </div>
      <div class="card" style="border-top:4px solid #3b82f6;">
        <p><span style="font-size:1.4em;">🔵</span> <strong>Nano Banana 2</strong> <span class="bb">Gemini</span></p>
        <p class="sm">Sin límite claro · Edición conversacional · Conocimiento del mundo</p>
      </div>
    </div>
    <div class="tip">🎯 Ambas gratuitas. Texto preciso → ChatGPT · Edición rápida → Nano Banana</div>
  </section>`,

  // ── 3. VOLCÁN ──
  `<section data-audio="audio-imagenes/slide02.mp3">
    <h2 style="font-size:1.2em;">❶ <span class="tag g">🔬 Ciencias</span> Corte transversal de un volcán</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Crea un dibujo educativo en corte transversal de un volcán en erupción, dirigido a niños de 10 años de primaria. Deben verse claramente la cámara magmática, la chimenea o conducto principal, el cráter y la lava descendiendo por las laderas. Estilo visual limpio tipo libro de texto, con colores tierra y rojo. No incluyas etiquetas ni texto, las añadiré después con un editor. La imagen debe ocupar toda la diapositiva."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Primaria · Lámina</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Edad</strong> (10 años) → la IA ajusta nivel de detalle</li>
          <li><strong>Partes concretas</strong> (cámara magmática, chimenea, cráter)</li>
          <li><strong>Estilo definido</strong> (libro de texto, colores tierra y rojo)</li>
          <li><strong>Sin etiquetas</strong> → evita errores tipográficos de la IA</li>
          <li><strong>Thinking</strong> mode verifica la anatomía del volcán</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 4. CICLO DEL AGUA ──
  `<section data-audio="audio-imagenes/slide03.mp3">
    <h2 style="font-size:1.2em;">❷ <span class="tag g">🔬 Ciencias</span> Ciclo del agua interactivo</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Genera una infografía educativa del ciclo del agua para estudiantes de 4º de primaria (9-10 años). El diagrama debe incluir: evaporación del agua del mar, condensación formando nubes, precipitación (lluvia) y recogida en ríos y océanos. Usa un estilo isométrico en 3D con colores vibrantes: azul para el agua, blanco y gris para las nubes, verde para el suelo. Flechas curvas que conecten cada etapa. No incluyas texto. Deja espacio para que yo añada los nombres de cada fase después."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Primaria · Infografía</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>4 fases concretas</strong> → la IA estructura bien el diagrama</li>
          <li><strong>Estilo isométrico 3D</strong> → resultados más atractivos</li>
          <li><strong>Colores asignados</strong> por elemento (agua, nubes, suelo)</li>
          <li><strong>Flechas curvas</strong> dan sensación de movimiento continuo</li>
          <li><strong>Thinking mode</strong> planifica la disposición antes de generar</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 5. APARATO DIGESTIVO ──
  `<section data-audio="audio-imagenes/slide04.mp3">
    <h2 style="font-size:1.2em;">❸ <span class="tag g">🔬 Ciencias</span> Aparato digestivo humano</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Genera 4 variantes diferentes del aparato digestivo humano para un póster educativo de secundaria. Cada variante debe tener una distribución distinta de los órganos: boca, esófago, estómago, intestino delgado, intestino grueso, hígado y páncreas. Estilo vectorial plano con colores pastel, fondo blanco. Los órganos deben estar etiquetados con líneas finas. Asegúrate de que no haya errores anatómicos: el hígado está a la derecha, el estómago a la izquierda. No uses texto dentro de los órganos."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Secundaria · Póster</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>4 variantes</strong> → eliges la más correcta anatómicamente</li>
          <li><strong>Órganos enumerados</strong> para que no falte ninguno</li>
          <li><strong>Corrige errores comunes</strong> (hígado a la derecha)</li>
          <li><strong>Estilo vectorial plano</strong> → ideal para imprimir</li>
          <li><strong>Revisa</strong> cada variante contra un atlas antes de usar</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 6. CÉLULA VEGETAL VS ANIMAL ──
  `<section data-audio="audio-imagenes/slide05.mp3">
    <h2 style="font-size:1.2em;">❹ <span class="tag g">🔬 Ciencias</span> Célula vegetal vs animal</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Crea una comparativa visual lado a lado de una célula vegetal y una célula animal para estudiantes de 12 años. A la izquierda la célula vegetal con pared celular, cloroplastos y vacuola grande. A la derecha la célula animal sin pared celular, con centriolos y vacuolas pequeñas. Ambas deben mostrar: núcleo, membrana, mitocondrias, retículo y aparato de Golgi. Estilo vectorial plano, colores suaves, fondo blanco. Los orgánulos etiquetados con línea fina y texto limpio, sin errores ortográficos."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · 12 años · Comparativa</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Lado a lado</strong> → facilita la comparación visual directa</li>
          <li><strong>Diferencias clave</strong> destacadas (pared celular, cloroplastos)</li>
          <li><strong>Orgánulos comunes y exclusivos</strong> de cada célula</li>
          <li><strong>Thinking mode</strong> verifica la disposición didáctica</li>
          <li><strong>Texto limpio</strong> evita confusiones en los nombres</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 7. SISTEMA SOLAR ──
  `<section data-audio="audio-imagenes/slide06.mp3">
    <h2 style="font-size:1.2em;">❺ <span class="tag g">🔬 Ciencias</span> Sistema solar infantil</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Dibujo infantil del sistema solar para niños de 5-6 años de educación infantil. Los planetas deben ser redondos, sonrientes y con colores llamativos: Mercurio gris pequeño, Venus rosa, Tierra azul y verde, Marte rojo, Júpiter naranja con rayas, Saturno con anillos, Urano azul claro y Neptuno azul oscuro. Todos orbitando alrededor de un sol amarillo sonriente. Estilo acuarela suave, fondo blanco o azul muy claro. Sin texto. Los planetas deben estar en orden desde el sol."</code></pre>
        <div class="ftr"><span class="tb nana">Nano Banana 2</span> · Infantil · Acuarela</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Planetas sonrientes</strong> → conecta con niños pequeños</li>
          <li><strong>Cada planeta descrito</strong> con color y rasgo distintivo</li>
          <li><strong>Orden desde el sol</strong> → evita errores astronómicos</li>
          <li><strong>Nano Banana 2</strong> tiene buen conocimiento del sistema solar</li>
          <li><strong>Edición conversacional</strong> para ajustar planetas faltantes</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 8. CICLO DE LAS ROCAS ──
  `<section data-audio="audio-imagenes/slide07.mp3">
    <h2 style="font-size:1.2em;">❻ <span class="tag g">🔬 Ciencias</span> Ciclo de las rocas</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Diagrama del ciclo de las rocas para geología de secundaria. Muestra tres tipos de roca: ígneas, sedimentarias y metamórficas, conectadas por flechas que indican los procesos: enfriamiento, erosión, compactación, calor y presión, fusión. Las rocas deben tener texturas realistas: granular para las ígneas, estratificada para las sedimentarias, con bandas para las metamórficas. Fondo blanco, sin texto, flechas de colores distintos para cada proceso. Estilo diagrama científico limpio."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Secundaria · Geología</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>3 tipos de roca</strong> con texturas diferentes y reconocibles</li>
          <li><strong>Procesos geológicos</strong> específicos en cada flecha</li>
          <li><strong>Flechas de colores</strong> por proceso facilitan la lectura</li>
          <li><strong>Thinking mode</strong> verifica que el ciclo sea correcto</li>
          <li><strong>Sin texto</strong> → evita errores en términos científicos</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 9. CORAZÓN HUMANO ──
  `<section data-audio="audio-imagenes/slide08.mp3">
    <h2 style="font-size:1.2em;">❼ <span class="tag g">🔬 Ciencias</span> Corazón humano (negative prompt)</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Ilustración anatómica del corazón humano en vista anterior para estudiantes de bachillerato. Estilo realista pero esquemático, con las cavidades visibles: aurículas, ventrículos, septum, válvulas. Fondo completamente transparente. Sin texto, sin flechas, sin etiquetas, sin marcas de agua, sin números, sin letras. --no watermarks, no labels, no text, no background elements. La imagen debe ser limpia, solo el corazón con sus estructuras internas visibles en corte."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Bachillerato · Negative prompt</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Negative prompts</strong> explícitos para eliminar distracciones</li>
          <li><strong>Combinación español + --no inglés</strong> (más preciso)</li>
          <li><strong>Fondo transparente</strong> → superpones en cualquier material</li>
          <li><strong>Cavidades concretas</strong> que deben verse</li>
          <li><strong>Ideal</strong> para añadir tus propias flechas y textos después</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 10. FOTOSÍNTESIS ──
  `<section data-audio="audio-imagenes/slide09.mp3">
    <h2 style="font-size:1.2em;">❽ <span class="tag g">🔬 Ciencias</span> Fotosíntesis</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Ilustración educativa del proceso de fotosíntesis para niños de 10 años. Muestra una planta verde con raíces, tallo y hojas. El sol debe estar en la esquina superior izquierda emitiendo rayos de luz hacia las hojas. Agua entrando por las raíces desde el suelo. Dióxido de carbono (representado como nubes con CO₂) bajando hacia las hojas. Una flecha de salida desde las hojas mostrando oxígeno (O₂) y glucosa. Estilo infografía colorida, sin texto (yo añadiré las palabras después)."</code></pre>
        <div class="ftr"><span class="tb nana">Nano Banana 2</span> · Primaria · Infografía</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Entradas y salidas</strong> del proceso visualmente claras</li>
          <li><strong>Iconos</strong> (sol, nubes CO₂, azúcar) en lugar de palabras</li>
          <li><strong>Posiciones concretas</strong> (sol arriba, agua por raíces)</li>
          <li><strong>Nano Banana 2</strong> tiene buen conocimiento científico natural</li>
          <li><strong>Espacios sin texto</strong> para añadir nomenclatura después</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 11. MITOSIS ──
  `<section data-audio="audio-imagenes/slide10.mp3">
    <h2 style="font-size:1.2em;">❾ <span class="tag g">🔬 Ciencias</span> Mitosis en viñetas</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Tira cómica educativa de 4 viñetas que muestre las fases de la mitosis para bachillerato: profase, metafase, anafase y telofase. En cada viñeta debe aparecer una célula con sus cromosomas (azules) y el huso acromático (verde). La historia visual debe leerse de izquierda a derecha. Estilo vectorial plano, fondos de colores distintos para cada fase (amarillo, verde, azul, naranja). Sin texto, sin flechas. Añade un personaje guía tipo bacteria sonriente que aparezca en todas las viñetas para dar continuidad."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Bachillerato · Cómic</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Formato cómic</strong> → más atractivo que un diagrama tradicional</li>
          <li><strong>Personaje guía</strong> en todas las viñetas da coherencia narrativa</li>
          <li><strong>Colores</strong> asignados a estructuras (cromosomas azules, huso verde)</li>
          <li><strong>Fondos distintos</strong> por fase ayudan a diferenciarlas</li>
          <li><strong>Thinking mode</strong> planifica la continuidad entre viñetas</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 12. IMPERIO ROMANO ──
  `<section data-audio="audio-imagenes/slide11.mp3">
    <h2 style="font-size:1.2em;">❿ <span class="tag o">📜 Historia</span> Mapa del Imperio Romano</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Mapa histórico del Imperio Romano en su máxima extensión, año 117 d.C., para estudiantes de 1º de la ESO. El mapa debe mostrar toda la cuenca del Mediterráneo con las provincias romanas delimitadas y etiquetadas: Hispania, Gallia, Britannia, Italia, Graecia, Aegyptus, Judea, etc. El mar Mediterráneo en azul claro, las provincias en tonos tierra. Incluye una rosa de los vientos y una línea de escala. Estilo mapa educativo, fondo pergamino envejecido. El texto debe ser legible y sin errores ortográficos."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Secundaria · Mapa histórico</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Año concreto</strong> (117 d.C.) → evita anacronismos</li>
          <li><strong>Provincias clave</strong> enumeradas para que no falten</li>
          <li><strong>Estilo pergamino</strong> da ambientación histórica</li>
          <li><strong>Elementos cartográficos</strong> (rosa vientos, escala)</li>
          <li><strong>ChatGPT</strong> ideal para imágenes con texto preciso</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 13. CASTILLO MEDIEVAL ──
  `<section data-audio="audio-imagenes/slide12.mp3">
    <h2 style="font-size:1.2em;">⓫ <span class="tag o">📜 Historia</span> Castillo medieval</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Dibujo en corte transversal de un castillo medieval para niños de 8 años. Deben verse: la torre del homenaje, el foso con agua, el puente levadizo levantado, las almenas, el patio de armas, y los muros de piedra. En el interior del castillo, un gran salón con chimenea y algunas habitaciones. Estilo libro infantil, colores suaves y cálidos, con aspecto acogedor. Cada parte debe estar etiquetada con texto claro: torre del homenaje, foso, puente levadizo, almenas, patio de armas. Sin errores ortográficos."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Primaria · Corte transversal</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Corte transversal</strong> → muestra interior y exterior a la vez</li>
          <li><strong>Elementos arquitectónicos</strong> enumerados concretamente</li>
          <li><strong>Etiquetas con texto</strong> → ChatGPT las escribe bien</li>
          <li><strong>Estilo libro infantil</strong> y colores cálidos</li>
          <li><strong>Ambientación acogedora</strong> frente al castillo amenazante típico</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 14. REVOLUCIÓN INDUSTRIAL ──
  `<section data-audio="audio-imagenes/slide13.mp3">
    <h2 style="font-size:1.2em;">⓬ <span class="tag o">📜 Historia</span> Revolución Industrial</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Escena de la Revolución Industrial para historia de secundaria. Muestra una fábrica del siglo XIX con chimeneas humeantes, máquinas de vapor, y obreros trabajando. En primer plano, un trabajador con ropa de época junto a una máquina textil. Al fondo, un paisaje urbano industrial con más fábricas y casas obreras. Tono sepia y colores apagados, estilo ilustración histórica educativa. Atmósfera que transmita el contraste entre el progreso industrial y las duras condiciones laborales."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Secundaria · Escena histórica</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Escena narrativa</strong> no solo un diagrama</li>
          <li><strong>Primer plano y fondo</strong> diferenciados → profundidad</li>
          <li><strong>Tono sepia</strong> da ambiente histórico coherente</li>
          <li><strong>Carga emocional</strong> (contraste progreso / dureza)</li>
          <li><strong>Thinking mode</strong> planifica la composición narrativa</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 15. RELOJES ──
  `<section data-audio="audio-imagenes/slide14.mp3">
    <h2 style="font-size:1.2em;">⓭ <span class="tag p">➗ Matemáticas</span> Aprender la hora</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Genera una ficha tamaño A4 en blanco y negro para aprender a leer la hora en primaria. La ficha debe contener 10 esferas de reloj sin manecillas, con los números del 1 al 12 bien visibles y en su posición correcta. Las esferas deben estar distribuidas en 2 filas de 5, con espacio suficiente entre ellas para que los niños puedan dibujar las manecillas. Sin texto, sin instrucciones (las añadiré yo después). Líneas limpias, grosor adecuado para fotocopia. Listo para imprimir."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Primaria · Worksheet B&amp;W</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Formato A4 B&amp;N</strong> → listo para fotocopiar sin gastar tinta</li>
          <li><strong>Distribución 2 filas de 5</strong> con espacio para escribir</li>
          <li><strong>Números en posición correcta</strong> → ChatGPT los coloca bien</li>
          <li><strong>Sin texto</strong> → añades instrucciones donde quieras</li>
          <li><strong>Grosor adecuado</strong> para impresión y fotocopia</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 16. FIGURAS GEOMÉTRICAS ──
  `<section data-audio="audio-imagenes/slide15.mp3">
    <h2 style="font-size:1.2em;">⓮ <span class="tag p">➗ Matemáticas</span> Figuras geométricas</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Lámina educativa con las figuras geométricas 2D básicas para niños de primero de primaria: círculo, cuadrado, triángulo, rectángulo y hexágono. Cada figura debe ocupar el mismo espacio y estar rellena de un color distinto: círculo rojo, cuadrado azul, triángulo verde, rectángulo amarillo, hexágono naranja. Contorno negro grueso. Debajo de cada figura, deja un espacio en blanco para que los alumnos escriban el nombre. Fondo blanco, sin texto. Estilo vectorial plano y limpio."</code></pre>
        <div class="ftr"><span class="tb nana">Nano Banana 2</span> · Primaria · Lámina</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Color por figura</strong> → asociación visual inmediata</li>
          <li><strong>Contorno negro grueso</strong> → facilita el recorte si es necesario</li>
          <li><strong>Espacio para escribir</strong> debajo de cada figura</li>
          <li><strong>Nano Banana 2</strong> permite editar los colores conversacionalmente</li>
          <li><strong>Ideal</strong> para recortar y plastificar como tarjetas</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 17. FRACCIONES ──
  `<section data-audio="audio-imagenes/slide16.mp3">
    <h2 style="font-size:1.2em;">⓯ <span class="tag p">➗ Matemáticas</span> Fracciones visuales</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Dibujo educativo de fracciones representadas con círculos divididos en partes iguales para 4º de primaria. Muestra: un círculo entero, medios, tercios, cuartos, quintos, sextos y octavos. Cada círculo debe tener una de las porciones coloreada en azul y el resto en blanco. Las divisiones deben ser exactas y simétricas. Debajo de cada círculo, un recuadro vacío para que los alumnos escriban la fracción (ej. 1/2, 1/3, 1/4…). Fondo blanco, distribución ordenada en filas. Sin texto."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Primaria · Worksheet</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Thinking mode</strong> verifica que las divisiones sean exactas</li>
          <li><strong>Una porción coloreada</strong> en cada círculo → claro y didáctico</li>
          <li><strong>Todos los divisores</strong> del currículo de primaria incluidos</li>
          <li><strong>Recuadro vacío</strong> para que el alumno escriba la fracción</li>
          <li><strong>Distribución ordenada</strong> → aspecto profesional</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 18. ESCENA DE CUENTO ──
  `<section data-audio="audio-imagenes/slide17.mp3">
    <h2 style="font-size:1.2em;">⓰ <span class="tag pk">📖 Lengua</span> Escena de cuento infantil</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Ilustración para un cuento infantil: un dragón amigable de color verde con alas y escamas brillantes ayuda a tres niños y niñas a cruzar un puente de piedra sobre un río. Los niños deben tener distintas edades y looks (una niña con coletas, un niño con gafas, una niña pequeña). El dragón sonríe y extiende su ala para que los niños se agarren. Al fondo, un bosque encantado con árboles altos y un castillo lejano. Estilo acuarela digital, colores pastel, luz cálida de atardecer. Ambiente mágico y acogedor."</code></pre>
        <div class="ftr"><span class="tb nana">Nano Banana 2</span> · Infantil · Cuento</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Narrativa visual</strong> → los alumnos pueden inventar el texto</li>
          <li><strong>Personajes diversos</strong> en edad, aspecto y accesorios</li>
          <li><strong>Dragón amigable</strong> rompe el estereotipo de dragón malvado</li>
          <li><strong>Nano Banana 2</strong> genera personajes consistentes</li>
          <li><strong>Luz cálida de atardecer</strong> da atmósfera acogedora</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 19. VOCABULARIO INGLÉS ──
  `<section data-audio="audio-imagenes/slide18.mp3">
    <h2 style="font-size:1.2em;">⓱ <span class="tag pk">📖 Lengua</span> Vocabulario de aula en inglés</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Escena de un aula con 10 objetos cotidianos etiquetados en inglés para alumnos de primaria que están aprendiendo vocabulario básico. Los objetos son: desk, chair, book, pencil, ruler, bag, window, door, board, clock. Cada objeto debe estar señalado con una línea fina que conecte a su etiqueta en inglés. Estilo vectorial plano, colores alegres, niños y niñas diversos usando el material. Las etiquetas deben tener letra clara y sin errores ortográficos. Fondo blanco."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Primaria · Vocabulario visual</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>10 palabras en contexto real</strong> (el aula) → aprendizaje situado</li>
          <li><strong>Línea fina</strong> conecta objeto y palabra → asociación directa</li>
          <li><strong>ChatGPT</strong> escribe el texto en inglés sin errores</li>
          <li><strong>Niños diversos</strong> usando el material → más inclusivo</li>
          <li><strong>Ideal</strong> para imprimir como póster de aula</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 20. MAPA FÍSICO ──
  `<section data-audio="audio-imagenes/slide19.mp3">
    <h2 style="font-size:1.2em;">⓲ <span class="tag t">🌍 Geografía</span> Mapa físico de Sudamérica</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Mapa físico de Sudamérica para geografía de secundaria. Deben aparecer: la cordillera de los Andes en marrón, el río Amazonas en azul atravesando el continente, el desierto de Atacama en ocre, la selva amazónica en verde oscuro, los Andes patagónicos en el sur, y el lago Titicaca en la frontera de Perú y Bolivia. Colores topográficos: verde para zonas bajas, marrón para montañas, azul para agua. Sin fronteras políticas, sin texto, sin nombres de países. Estilo mapa educativo físico."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Secundaria · Mapa físico</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Accidentes geográficos</strong> concretos enumerados</li>
          <li><strong>Thinking mode</strong> verifica la ubicación geográfica de cada uno</li>
          <li><strong>Colores topográficos</strong> estándar para mapas físicos</li>
          <li><strong>Sin fronteras</strong> → céntrate solo en el relieve</li>
          <li><strong>Sin texto</strong> → evita errores en nombres de lugares</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 21. CLIMAS ──
  `<section data-audio="audio-imagenes/slide20.mp3">
    <h2 style="font-size:1.2em;">⓳ <span class="tag t">🌍 Geografía</span> Climas del mundo</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Mapa mundial infantil de las zonas climáticas para niños de 8-9 años. Divide el mundo en 5 franjas de color: tropical (rojo/naranja), seco (amarillo), templado (verde), frío (azul claro) y polar (blanco/morado claro). Cada zona debe incluir un icono representativo: palmera para tropical, cactus para seco, árbol de hoja caduca para templado, pino nevado para frío, y pingüino para polar. Mapa simple, estilo vectorial plano, sin texto. Los continentes deben ser reconocibles pero simplificados."</code></pre>
        <div class="ftr"><span class="tb nana">Nano Banana 2</span> · Primaria · Mapa climático</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Iconos</strong> en lugar de texto → accesible para todos los niños</li>
          <li><strong>5 franjas de color</strong> con código cromático intuitivo</li>
          <li><strong>Nano Banana 2</strong> conoce bien la geografía mundial</li>
          <li><strong>Mapa simplificado</strong> → no abruma con detalles innecesarios</li>
          <li><strong>Edición conversacional</strong> para ajustar colores de zonas</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 22. SOMBRAS ANIMALES ──
  `<section data-audio="audio-imagenes/slide21.mp3">
    <h2 style="font-size:1.2em;">⓴ <span class="tag gy">📝 Worksheets</span> Sombras de animales</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Ficha en blanco y negro para niños de 3-4 años de educación infantil. En la columna izquierda, 5 animales dibujados con líneas simples y reconocibles: perro, gato, pez, pájaro, elefante. En la columna derecha, las 5 siluetas (sombras) de esos animales en orden aleatorio. Los niños deben trazar una línea desde cada animal hasta su sombra. Trazo grueso, contornos claros, sin relleno de grises. Sin texto. Diseño limpio, espaciado generoso para manos pequeñas. Listo para fotocopiar."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Infantil · Ficha B&amp;W</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Sin relleno gris</strong> → ahorra tinta al fotocopiar</li>
          <li><strong>Trazo grueso</strong> → fácil de ver para niños pequeños</li>
          <li><strong>Orden aleatorio</strong> de sombras → evita memorizar posiciones</li>
          <li><strong>Animales reconocibles</strong> con líneas simples</li>
          <li><strong>Espaciado generoso</strong> para manos pequeñas</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 23. GRAFOMOTRICIDAD ──
  `<section data-audio="audio-imagenes/slide22.mp3">
    <h2 style="font-size:1.2em;">㉑ <span class="tag gy">📝 Worksheets</span> Grafo motricidad</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Ficha de preescritura para niños de 3-4 años en blanco y negro. Muestra 6 líneas punteadas para repasar con el lápiz: una línea recta horizontal, una línea recta vertical, una línea diagonal, un círculo, una onda (como una serpiente) y un zigzag. Cada línea debe ocupar una fila independiente con un dibujo pequeño al inicio (un coche, un cohete, una abeja, una cara, una serpiente, un rayo) para indicar la dirección del trazo. Puntos grandes y separados para facilitar el repaso. Sin texto."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Infantil · Preescritura</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Puntos grandes y separados</strong> → para manos que empiezan</li>
          <li><strong>Dibujo-guía</strong> al inicio de cada fila da dirección al trazo</li>
          <li><strong>6 tipos de trazos</strong> progresivos (rectos → curvos → mixtos)</li>
          <li><strong>B&amp;N</strong> listo para fotocopiar en cantidad</li>
          <li><strong>Sin texto</strong> → usable en cualquier idioma</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 24. TABLA MULTIPLICAR ──
  `<section data-audio="audio-imagenes/slide23.mp3">
    <h2 style="font-size:1.2em;">㉒ <span class="tag gy">📝 Worksheets</span> Tabla de multiplicar</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Póster educativo de la tabla de multiplicar del 1 al 12 en formato cuadrícula. Cada número de la primera fila y primera columna debe tener un color distinto. Las celdas de intersección deben ser blancas con el resultado en negro. El fondo de la cuadrícula debe ser blanco, con líneas de división finas en gris claro. Cada número del 1 al 12 debe estar en un cuadrado de color en el borde superior e izquierdo. Sin texto adicional, sin título. Estilo limpio, profesional, listo para imprimir en A3 o A4."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Primaria · Póster</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Thinking mode</strong> verifica cada resultado de la tabla</li>
          <li><strong>Código de colores</strong> en bordes facilita localizar filas y columnas</li>
          <li><strong>ChatGPT</strong> fiable con números y texto en cuadrículas</li>
          <li><strong>Formato A3/A4</strong> → adaptable a cualquier impresora</li>
          <li><strong>Líneas finas grises</strong> → no compiten visualmente con números</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 25. DIVERSIDAD AULA ──
  `<section data-audio="audio-imagenes/slide24.mp3">
    <h2 style="font-size:1.2em;">㉓ <span class="tag rw">🌈 Diversidad</span> Aula inclusiva</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Ilustración de un grupo diverso de adolescentes trabajando en equipo en un laboratorio de ciencias. Debe haber 6 estudiantes: dos chicos y cuatro chicas, de distintas etnias (afrodescendiente, asiática, caucásica, latina). Una estudiante usa silla de ruedas y está manipulando un microscopio. Otra estudiante lleva hiyab y sostiene una probeta. Un chico con gafas y aparato dental mira un ordenador. Todos colaboran y se sonríen. Ambiente cálido e inclusivo. Estilo vectorial plano, colores alegres. Fondo de laboratorio con estanterías y material científico."</code></pre>
        <div class="ftr"><span class="tb nana">Nano Banana 2</span> · Todas las etapas · Inclusión</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>6 estudiantes</strong> descritos con características concretas</li>
          <li><strong>Diversidad funcional</strong> (silla de ruedas + microscopio)</li>
          <li><strong>Diversidad religiosa</strong> (hiyab) y étnica explícita</li>
          <li><strong>Nano Banana 2</strong> representa mejor culturas diversas</li>
          <li><strong>Todos colaboran activamente</strong> → modelo positivo</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 26. CIENTÍFICAS ──
  `<section data-audio="audio-imagenes/slide25.mp3">
    <h2 style="font-size:1.2em;">㉔ <span class="tag rw">🌈 Diversidad</span> Mujeres científicas</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Póster inspirador con tres mujeres científicas de distintas épocas y orígenes. A la izquierda, Marie Curie con su vestido de época y matraz, en tonos sepia. En el centro, una científica afrodescendiente actual con bata blanca y portátil, colores modernos. A la derecha, una científica asiática con gafas de protección y material de laboratorio, estilo más joven. Cada una debe tener su nombre en una placa debajo. Conectadas visualmente por una línea curvada que simboliza el avance de la ciencia. Estilo póster educativo, inspirador, colores vibrantes."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Secundaria · Póster</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Thinking mode</strong> planifica la composición de 3 figuras</li>
          <li><strong>Tres épocas</strong> y estilos visuales distintos</li>
          <li><strong>Placas con nombre</strong> → ChatGPT las escribe correctamente</li>
          <li><strong>Línea curva</strong> conecta visualmente a las tres científicas</li>
          <li><strong>Estilo póster</strong> inspirador para decorar el aula</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 27. PIRÁMIDE ALIMENTICIA ──
  `<section data-audio="audio-imagenes/slide26.mp3">
    <h2 style="font-size:1.2em;">㉕ <span class="tag r">🎨 Infografías</span> Pirámide alimenticia</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Infografía de la pirámide alimenticia para niños de primaria con 5 niveles. Desde la base: cereales y derivados (pan, arroz, pasta), frutas y verduras, proteínas (carne, pescado, huevos, legumbres), lácteos, y en el vértice grasas y dulces (pequeña porción). Cada nivel debe tener iconos de alimentos representativos dibujados de forma sencilla. Colores distintos por nivel: marrón, verde, rojo, azul, naranja. Fondo blanco. Sin texto, sin porcentajes. Estilo vectorial plano, limpio y colorido."</code></pre>
        <div class="ftr"><span class="tb nana">Nano Banana 2</span> · Primaria · Infografía</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>5 niveles</strong> con colores distintos y progresión visual</li>
          <li><strong>Iconos de alimentos concretos</strong> en cada nivel</li>
          <li><strong>Nano Banana 2</strong> reconoce bien alimentos y cocina</li>
          <li><strong>Sin texto</strong> → usable en cualquier idioma</li>
          <li><strong>Edición conversacional</strong> para cambiar proporciones</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 28. REGLAS DE CLASE ──
  `<section data-audio="audio-imagenes/slide27.mp3">
    <h2 style="font-size:1.2em;">㉖ <span class="tag r">🎨 Infografías</span> Reglas de clase</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Póster de 5 normas de clase ilustradas con iconos para niños de primaria. Las normas son: escuchar cuando alguien habla (icono de oreja), levantar la mano para hablar (icono de mano levantada), ser amable con los compañeros (icono de corazón y manos), compartir el material (icono de lápices compartidos), recoger al terminar (icono de estante ordenado). Cada icono debe estar dentro de un círculo de color distinto. Los círculos en disposición horizontal o en estrella. Sin texto. Colores vibrantes, estilo vectorial plano, fondo blanco."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Primaria · Póster normas</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Iconos universales</strong> → comprensibles sin necesidad de leer</li>
          <li><strong>Cada norma</strong> tiene un icono específico y claro</li>
          <li><strong>Círculos de color</strong> dan unidad visual al póster</li>
          <li><strong>Sin texto</strong> → añades las frases después en tu idioma</li>
          <li><strong>Los niños</strong> pueden ayudar a elegir los iconos como actividad</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 29. IMG2IMG ──
  `<section data-audio="audio-imagenes/slide28.mp3">
    <h2 style="font-size:1.2em;">㉗ <span class="tag b">🖼️ img2img</span> Modernizar esquema antiguo</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>[Sube una foto de un esquema del ciclo del agua dibujado a mano o escaneado de un libro antiguo] "Toma este dibujo histórico del ciclo del agua y transfórmalo en una ilustración moderna y limpia para un libro de texto actual. Mantén la misma composición y distribución de elementos, pero mejora el detalle: las nubes deben ser más volumétricas, el agua más realista, los colores más vibrantes. Actualiza el estilo manteniendo el carácter educativo. Añade sutiles sombras y luces para dar profundidad. Mismo diseño, mayor calidad visual."</code></pre>
        <div class="ftr"><span class="tb both">ChatGPT / Nano Banana 2</span> · img2img</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Parte de una base existente</strong> → mantiene la estructura válida</li>
          <li><strong>Misma composición</strong> → no reinventa, solo mejora</li>
          <li><strong>Sombras y luces</strong> para dar calidad profesional</li>
          <li><strong>Ambas herramientas</strong> soportan img2img</li>
          <li><strong>Ideal</strong> para renovar materiales didácticos anticuados</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 30. GRECIA VS ROMA ──
  `<section data-audio="audio-imagenes/slide29.mp3">
    <h2 style="font-size:1.2em;">㉘ <span class="tag y">📋 Comparativa</span> Grecia vs Roma</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Infografía comparativa entre la Antigua Grecia y la Antigua Roma para historia de 1º de la ESO. Dos columnas: izquierda Grecia, derecha Roma. Compara 4 categorías: gobierno (democracia ateniense / república romana), arquitectura (columnas jónicas / arcos y acueductos), religión (dioses olímpicos / dioses romanos equivalentes), ejército (hoplitas / legionarios). Cada categoría con un icono representativo. Colores: Grecia en azul claro, Roma en rojo oscuro. Sin texto, sin nombres. Estilo infografía limpia y equilibrada."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Secundaria · Comparativa</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>4 categorías</strong> con iconos facilitan la comparación directa</li>
          <li><strong>Código de colores</strong> por civilización (azul / rojo)</li>
          <li><strong>Thinking mode</strong> organiza la información en columnas</li>
          <li><strong>Iconos representativos</strong> para cada aspecto cultural</li>
          <li><strong>Sin texto</strong> → añades los conceptos en clase con los alumnos</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 31. FP: ELECTRICIDAD ──
  `<section data-audio="audio-imagenes/slide30.mp3">
    <h2 style="font-size:1.2em;">㉙ <span class="tag r">⚡ Ciclos Formativos</span> Motor eléctrico (corte)</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Dibujo técnico en corte transversal de un motor eléctrico de corriente continua para alumnos de 1º de ciclo formativo de electricidad. Muestra: estátor, rotor, delgas, escobillas, eje y carcasa. Cada pieza debe estar etiquetada con línea fina y texto legible. Colores: cobre para los bobinados, gris metálico para la carcasa, rojo para las escobillas. Fondo blanco, estilo diagrama técnico limpio. Sin errores en los nombres de las piezas. Formato apto para fotocopia."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Electricidad · Diagrama técnico</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Piezas concretas</strong> enumeradas (estátor, rotor, delgas…)</li>
          <li><strong>Colores asignados</strong> por material (cobre, gris, rojo)</li>
          <li><strong>Etiquetas con texto</strong> → ChatGPT las escribe bien</li>
          <li><strong>Thinking mode</strong> verifica la disposición técnica</li>
          <li><strong>Imprimible</strong> para examen o apuntes</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 32. FP: SANIDAD ──
  `<section data-audio="audio-imagenes/slide31.mp3">
    <h2 style="font-size:1.2em;">㉚ <span class="tag r">⚡ Ciclos Formativos</span> Sistema circulatorio (enfermería)</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Diagrama del sistema circulatorio humano para estudiantes de ciclo formativo de enfermería. Muestra el corazón con sus cuatro cavidades, las arterias principales (aorta, pulmonar, carótidas), las venas principales (cava superior e inferior, pulmonares) y los capilares en los pulmones y extremidades. Incluye flechas que indiquen la dirección del flujo sanguíneo: sangre oxigenada en rojo, sangre desoxigenada en azul. Estilo diagrama clínico limpio, fondo blanco. Las etiquetas con nomenclatura anatómica estándar, sin errores."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT Thinking</span> · Enfermería · Anatomía</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Código de colores</strong> rojo/azul para oxigenación</li>
          <li><strong>Thinking mode</strong> verifica el recorrido circulatorio</li>
          <li><strong>Nomenclatura estándar</strong> → ChatGPT la escribe correctamente</li>
          <li><strong>Flechas de dirección</strong> esenciales para entender el flujo</li>
          <li><strong>Nivel clínico</strong> adecuado para FP de grado medio</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 33. FP: INFORMÁTICA ──
  `<section data-audio="audio-imagenes/slide32.mp3">
    <h2 style="font-size:1.2em;">㉛ <span class="tag r">⚡ Ciclos Formativos</span> Topología de red</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Diagrama de topología de red en estrella para alumnos de ciclo formativo de informática. Muestra 6 ordenadores conectados a un switch central mediante cables Ethernet. Cada ordenador etiquetado como PC-1 a PC-6. El switch conectado a un router, y el router a un icono de internet (nube). Incluye también un servidor conectado al switch. Colores: azul para los cables de red, verde para el switch, gris para los PC. Estilo diagrama de red estándar. Flechas que indiquen el flujo de datos. Sin errores en las etiquetas."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Informática · Redes</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>Topología concreta</strong> (estrella) con todos sus elementos</li>
          <li><strong>Etiquetas PC-1 a PC-6</strong> coherentes y sin errores</li>
          <li><strong>Colores por función</strong> (azul cables, verde switch)</li>
          <li><strong>Incluye router y nube</strong> para contexto completo</li>
          <li><strong>Ideal</strong> para apuntes de montaje de redes</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 34. FP: COCINA ──
  `<section data-audio="audio-imagenes/slide33.mp3">
    <h2 style="font-size:1.2em;">㉜ <span class="tag r">⚡ Ciclos Formativos</span> Técnicas de corte en cocina</h2>
    <div class="g2" style="gap:1.2em;">
      <div class="pc" style="margin:0;">
        <div class="pl">📝 Prompt detallado</div>
        <pre style="font-size:.58em;border-left-color:#e67e22;"><code>"Lámina educativa con las técnicas básicas de corte de verduras para alumnos de ciclo formativo de cocina. Muestra 6 cortes diferentes: juliana (tiras finas), brunoise (dados pequeños), macedonia (dados medianos), chiffonade (hojas enrolladas), rodaja y torneado. Cada corte con una verdura distinta: zanahoria, cebolla, patata, lechuga, tomate, calabacín. Una imagen del resultado y el nombre del corte debajo. Estilo fotográfico limpio sobre fondo blanco. Sin texto adicional. Ideal para colgar en la cocina del aula."</code></pre>
        <div class="ftr"><span class="tb chat">ChatGPT</span> · Cocina · Técnicas</div>
      </div>
      <div class="exp">
        <div class="pl">💡 Por qué funciona</div>
        <ul class="exp-list">
          <li><strong>6 cortes</strong> con su verdura característica y nombre</li>
          <li><strong>Estilo fotográfico</strong> sobre fondo blanco → se ve profesional</li>
          <li><strong>Cada imagen</strong> muestra el resultado exacto del corte</li>
          <li><strong>ChatGPT</strong> maneja bien imágenes de alimentos</li>
          <li><strong>Imprimible</strong> para el taller de cocina</li>
        </ul>
      </div>
    </div>
  </section>`,

  // ── 35. CIERRE ──
  `<section data-audio="audio-imagenes/slide34.mp3">
    <h2>✨ En resumen</h2>
    <div class="g2" style="font-size:.8em;">
      <div class="card" style="border-top:4px solid #eab308;text-align:center;">
        <p style="font-size:1.5em;margin:0;">🟡</p>
        <p><strong>ChatGPT Images 2.0</strong></p>
        <p class="sm">✔️ Texto preciso en imágenes<br>✔️ Thinking para trabajos complejos<br>✔️ ~15 img/día gratis</p>
      </div>
      <div class="card" style="border-top:4px solid #3b82f6;text-align:center;">
        <p style="font-size:1.5em;margin:0;">🔵</p>
        <p><strong>Nano Banana 2</strong></p>
        <p class="sm">✔️ Edición conversacional<br>✔️ Conocimiento del mundo<br>✔️ Integrado en Gemini</p>
      </div>
    </div>
    <hr style="margin:.4em 0;">
    <p style="text-align:center;">🤖 La IA es tu asistente · 🧑‍🏫 Tu criterio docente es el verdadero valor</p>
    <p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Junio 2026</p>
  </section>`,
];
