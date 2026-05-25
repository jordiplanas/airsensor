# 🌬️ AirSensor — Monitor de Contaminación

Web app PWA para visualizar datos de tu sensor de contaminación en tiempo real usando ThingSpeak.

## ✨ Características

- 📊 Gráficos históricos por campo
- 🎨 Índice de calidad del aire con color (AQI)
- 📱 Instalable como app en móvil (PWA)
- 🔄 Auto-actualización cada 60 segundos
- 🌙 Tema oscuro

## 🚀 Despliegue en GitHub Pages

### Opción A — Visual Studio Code + GitHub (recomendado)

1. **Clonar / abrir** esta carpeta en VS Code
2. Instalar extensión **GitHub Repositories** o usar **Git** integrado
3. Crear un repositorio en GitHub (ej: `airsensor`)
4. Subir los archivos:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/airsensor.git
   git push -u origin main
   ```
5. En GitHub → **Settings → Pages**:
   - Source: **GitHub Actions**
   - El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente

6. Tu app estará en: `https://TU_USUARIO.github.io/airsensor/`

### Opción B — GitHub.dev (sin instalar nada)

1. Ve a `github.com` → Nuevo repositorio → `airsensor`
2. Sube los archivos arrastrándolos
3. Activa GitHub Pages como arriba

## 📲 Instalar en móvil

Una vez desplegada la app:

1. Abre la URL en Chrome (Android) o Safari (iOS)
2. En Android: aparece banner "Instalar AirSensor" → toca **Instalar**
3. En iOS: toca el botón compartir → **"Añadir a pantalla de inicio"**

## 🔧 Configuración

Edita las primeras líneas de `index.html` si necesitas cambiar la API key:

```js
const API_KEY = 'TU_API_KEY';
```

## 📁 Estructura

```
airsensor/
├── index.html          ← App principal
├── manifest.json       ← Config PWA
├── sw.js               ← Service Worker (offline)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploy a GitHub Pages
```
