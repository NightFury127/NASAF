Add background image for EXOPEDIA

Place your desired starfield/milky-way image into this directory and name it `space-bg.jpg`.

Example (PowerShell) to copy from your temp path:

```powershell
mkdir "d:\Python programming\exopedia-final-scroll-fix\assets" -ErrorAction SilentlyContinue
copy "C:\Users\nandn\AppData\Local\Temp\istockphoto-1085287936-612x612.jpg" "d:\Python programming\exopedia-final-scroll-fix\assets\space-bg.jpg"
```

After adding the image the app will use it as the background. If you need a different filename, update the `--bg-image` variable in `style.css`.
