$zipPath = 'C:\Users\nived\OneDrive\Desktop\Resume_Nivedhitha_SV.docx'
$dest = Join-Path (Split-Path $zipPath) 'resume_unzip_temp'
if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
Expand-Archive -LiteralPath $zipPath -DestinationPath $dest -Force
$xmlPath = Join-Path $dest 'word\document.xml'
[xml]$xml = Get-Content -Path $xmlPath -Raw
$texts = $xml.SelectNodes('//w:t') | ForEach-Object { $_.'#text' }
$out = $texts -join "`n"
$outPath = Join-Path (Split-Path $zipPath -Parent) 'Nivedhitha_portfolio\resume.txt'
Set-Content -Path $outPath -Value $out -Encoding UTF8
Write-Host "Resume extracted to $outPath"
