$ErrorActionPreference = "Stop"
$siteRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$port = 8000
$baseUrl = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($baseUrl)

$contentTypes = @{
  ".css" = "text/css; charset=utf-8"
  ".csv" = "text/csv; charset=utf-8"
  ".html" = "text/html; charset=utf-8"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".js" = "text/javascript; charset=utf-8"
  ".png" = "image/png"
  ".svg" = "image/svg+xml"
  ".webp" = "image/webp"
}

try {
  $listener.Start()
} catch {
  Write-Error "로컬 웹 서버를 시작하지 못했습니다. 포트 $port 사용 여부를 확인해 주세요. $($_.Exception.Message)"
  exit 1
}

Write-Host "세이프스팟 통합 웹사이트 실행 중: $baseUrl"
Write-Host "종료하려면 이 창에서 Ctrl+C를 누르세요."
Start-Process $baseUrl

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response
    try {
      if ($context.Request.HttpMethod -ne "GET" -and $context.Request.HttpMethod -ne "HEAD") {
        $response.StatusCode = 405
      } else {
        $relativePath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))
        if ([string]::IsNullOrWhiteSpace($relativePath)) {
          $relativePath = "index.html"
        }
        $relativePath = $relativePath.Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::GetFullPath((Join-Path $siteRoot $relativePath))
        $rootPrefix = $siteRoot.TrimEnd([System.IO.Path]::DirectorySeparatorChar) + [System.IO.Path]::DirectorySeparatorChar

        if (-not $filePath.StartsWith($rootPrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
          $response.StatusCode = 403
        } elseif (-not (Test-Path -LiteralPath $filePath -PathType Leaf)) {
          $response.StatusCode = 404
        } else {
          $bytes = [System.IO.File]::ReadAllBytes($filePath)
          $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
          $response.StatusCode = 200
          $response.ContentType = $contentTypes[$extension]
          $response.ContentLength64 = $bytes.Length
          if ($context.Request.HttpMethod -eq "GET") {
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
          }
        }
      }
    } catch {
      Write-Warning "요청 처리 실패: $($_.Exception.Message)"
      $response.StatusCode = 500
    } finally {
      $response.Close()
    }
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
