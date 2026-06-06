$Voice = "es-ES-AlvaroNeural"
$edge  = "C:\Users\serga\AppData\Roaming\Python\Python311\Scripts\edge-tts.exe"
$Base  = $PSScriptRoot

$jobs = @(
  @{ json = "narracion-booklm.json";      dir = "audio-booklm" }
  @{ json = "narracion-chatgpt.json";     dir = "audio-chatgpt" }
  @{ json = "narracion-imagenes.json";    dir = "audio-imagenes" }
  @{ json = "narracion-infografias.json"; dir = "audio-infografias" }
  @{ json = "narracion-codigo-cli.json";  dir = "audio-codigo-cli" }
  @{ json = "narracion-pensamiento-critico.json"; dir = "audio-pensamiento-critico" }
)

foreach ($job in $jobs) {
  $OutDir = "$Base\$($job.dir)"
  if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force | Out-Null }

  $data = Get-Content "$Base\$($job.json)" -Raw | ConvertFrom-Json
  Write-Host "`n=== $($job.json) → $($job.dir) ===" -ForegroundColor Cyan

  foreach ($slide in $data.slides) {
    $id   = $slide.id
    $name = "slide$("{0:D2}" -f $id).mp3"
    $out  = "$OutDir\$name"
    $text = $slide.text

    Write-Host "  [$id] $($slide.title)..." -NoNewline
    & $edge --voice $Voice --text "$text" --write-media "$out" 2>$null
    if ($LASTEXITCODE -eq 0) {
      $len = [math]::Round((Get-Item $out).Length / 1KB)
      Write-Host " ✅ $len KB" -ForegroundColor Green
    } else {
      Write-Host " ❌ ERROR" -ForegroundColor Red
    }
  }
}

Write-Host "`n🎉 Todos los audios generados." -ForegroundColor Green
