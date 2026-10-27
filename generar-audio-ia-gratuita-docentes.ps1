$Voice = "es-ES-AlvaroNeural"
$Json  = Get-Content "narracion-ia-gratuita-docentes.json" -Raw | ConvertFrom-Json
$OutDir = "$PSScriptRoot\audio-ia-gratuita-docentes"
if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force }
$edge = "C:\Users\serga\AppData\Roaming\Python\Python311\Scripts\edge-tts.exe"
foreach ($slide in $Json.slides) {
  $id   = $slide.id
  $text = $slide.text
  $name = "slide$("{0:D2}" -f $id).mp3"
  $out  = "$OutDir\$name"
  Write-Host "[decap?] $id $($slide.title) $name"
  & $edge --voice $Voice --text "$text" --write-media "$out"
  if ($LASTEXITCODE -eq 0) {
    $len = (Get-Item $out).Length
    Write-Host "   OK  $([math]::Round($len/1kb)) KB"
  } else { Write-Host "   ERROR" }
}
