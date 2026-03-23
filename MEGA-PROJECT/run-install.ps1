# PowerShell script to run npm install
Set-Location -Path "C:\Users\ThinkPad\Desktop\React\MEGA-PROJECT"

# Run npm install and capture output
$output = npm install 2>&1 | Out-String

# Write to file
$output | Out-File -FilePath "npm_install_log.txt" -Encoding UTF8

# Check if node_modules exists
if (Test-Path "node_modules") {
    Write-Host "SUCCESS: node_modules folder created"
} else {
    Write-Host "FAILED: node_modules folder not created"
}

Write-Host "Output:"
Write-Host $output

