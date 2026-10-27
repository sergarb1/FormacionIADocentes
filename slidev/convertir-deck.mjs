// Convierte un deck Reveal.js (slidesData en JS) a body Markdown de Slidev
// Uso: node convertir-deck.mjs <archivo.js> <salida.md> [carpeta-audio-deck]
import fs from 'node:fs';

const [srcPath, outPath, audioDir] = process.argv.slice(2);
const src = fs.readFileSync(srcPath, 'utf8');

// 1. Extraer cada <section ...>...</section> en orden
const sections = [...src.matchAll(/<section[\s\S]*?<\/section>/g)].map(m => m[0]);
console.log('Secciones totales:', sections.length);

const out = [];
sections.forEach((s, i) => {
  const audioMatch = s.match(/data-audio="([^"]+)"/);
  let audio = audioMatch ? audioMatch[1] : null;
  // Reescribir ruta de audio: audio-<deck>/slide || audioDir/slide
  if (audio && audioDir) audio = audio.replace(/^[\w-]+\//, audioDir + '/');

  // 2a. quitar wrapper <section>
  let inner = s
    .replace(/<section[^>]*>/, '')
    .replace(/<\/section>\s*`,?\s*$/, '')
    .trimEnd();

  // 2b. desindentar 4 espacios
  inner = inner.split('\n').map(l => l.replace(/^ {4}/, '')).join('\n');

  // 2c. bloque de slide
  let block = '';
  if (i > 0) block += '\n---\n\n';
  if (audio) block += `<audio class="deck-audio" src="../${audio}"></audio>\n\n`;
  block += inner + '\n';
  out.push(block);
});

fs.writeFileSync(outPath, out.join(''));
console.log('Escrito', outPath, out.join('').length, 'caracteres');
