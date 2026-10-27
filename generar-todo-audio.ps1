# Regenera TODOS los audios narrados de las presentaciones (Windows).
# Requisito: edge-tts instalado (pip install edge-tts).
# Uso: powershell -ExecutionPolicy Bypass -File generar-todo-audio.ps1
# Para regenerar un solo deck, usa el .ps1 individual correspondiente.

$edge  = "C:\Users\serga\AppData\Roaming\Python\Python311\Scripts\edge-tts.exe"
$Base  = $PSScriptRoot

# Cada deck Slidev en slidev/NN-*.md referencia ../<dir>/slideNN.mp3
$jobs = @(
  @{ json = "narracion-ia-gratuita-docentes.json";  dir = "audio-ia-gratuita-docentes" }
  @{ json = "narracion-pensamiento-critico.json";   dir = "audio-pensamiento-critico" }
  @{ json = "narracion-imagenes.json";              dir = "audio-imagenes" }
  @{ json = "narracion-infografias.json";           dir = "audio-infografias" }
  @{ json = "narracion-note-booklm.json";           dir = "audio-booklm" }
  @{ json = "narracion-codigo-cli-ia.json";         dir = "audio-codigo-cli" }
)

foreach ($job in $jobs) {
  $Voice = (Get-Content "$Base\$($job.json)" -Raw | ConvertFrom-Json)._voice
  if (-not $Voice) { $Voice = "es-ES-AlvaroNeural" }
  $OutDir = "$Base\$($job.dir)"
  if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force | Out-Null }

  $data = Get-Content "$Base\$($job.json)" -Raw | ConvertFrom-Json
  Write-Host "`n=== $($job.json) → $($job.dir) (voz: $Voice) ===" -ForegroundColor Cyan

  foreach ($slide in $data.slides) {
    $id   = $slide.id
    $name = "slide$("{0:D2}" -f $id).mp3"
    $out  = "$OutDir\$name"
    $text = $slide.text

    Write-Host "  [$id] $($slide.title)..." -NoNewline
    & $edge --voice $Voice --text "$text" --write-media "$out" 2>$null
    if ($LASTEXITCODE -eq 0) {
      $len = [math]::Round((Get-Item $out).Length / 1KB)
      Write-Host " OK $len KB" -ForegroundColor Green
    } else {
      Write-Host " ERROR" -ForegroundColor Red
    }
  }
}

Write-Host "`nTodos los audios generados." -ForegroundColor Green
