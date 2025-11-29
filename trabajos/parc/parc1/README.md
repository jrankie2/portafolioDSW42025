# Centro Especializado en Lenguas (CEL) - Sitio Web

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de un sitio web completo para el Centro Especializado en Lenguas (CEL), utilizando tecnologías web modernas incluyendo HTML5, CSS3, JavaScript y ASP.NET.

## Características Principales

### 🎯 Funcionalidades Implementadas

- **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio
- **Navegación Intuitiva**: Menú principal con todas las secciones requeridas
- **Páginas Completas**: 
  - Inicio con información general
  - Cursos detallados por idioma y nivel
  - Servicios especializados
  - Horarios interactivos
  - Misión y Visión institucional
  - Contactos con formulario funcional

### 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: ASP.NET Web Forms (C#)
- **Estilos**: CSS Grid, Flexbox, Animaciones CSS
- **Iconos**: Font Awesome 6.0
- **Fuentes**: Google Fonts (Inter)
- **Responsive**: Mobile-first design

### 📁 Estructura del Proyecto

```
CEL-Website/
├── index.html              # Página principal (HTML estático)
├── cursos.html            # Página de cursos
├── servicios.html         # Página de servicios
├── horarios.html          # Página de horarios
├── mision.html            # Página de misión
├── vision.html            # Página de visión
├── contactos.html         # Página de contactos
├── Default.aspx           # Página principal ASP.NET
├── Default.aspx.cs        # Código behind ASP.NET
├── web.config             # Configuración ASP.NET
├── css/
│   ├── styles.css         # Estilos principales
│   └── responsive.css     # Estilos responsivos
├── js/
│   ├── main.js           # JavaScript principal
│   ├── schedule.js       # Funcionalidades de horarios
│   └── contact.js        # Funcionalidades de contactos
└── README.md             # Este archivo
```

## 🚀 Instalación y Configuración

### Requisitos Previos

- Visual Studio 2019 o superior
- .NET Framework 4.8
- IIS Express (incluido con Visual Studio)
- SQL Server (opcional para funcionalidades avanzadas)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL-del-repositorio]
   cd CEL-Website
   ```

2. **Abrir en Visual Studio**
   - Abrir Visual Studio
   - Seleccionar "Abrir proyecto o solución"
   - Navegar a la carpeta del proyecto
   - Seleccionar el archivo `.sln` o `.csproj`

3. **Configurar la base de datos** (Opcional)
   - Abrir `web.config`
   - Modificar la cadena de conexión en `connectionStrings`
   - Ejecutar scripts SQL para crear las tablas necesarias

4. **Ejecutar el proyecto**
   - Presionar F5 o hacer clic en "Iniciar depuración"
   - El sitio se abrirá en el navegador predeterminado

## 📱 Características Responsivas

### Breakpoints Implementados

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

### Adaptaciones Móviles

- Menú hamburguesa para navegación móvil
- Tablas responsivas con scroll horizontal
- Botones optimizados para touch
- Formularios adaptados a pantallas pequeñas

## 🎨 Diseño y UX

### Paleta de Colores

- **Primario**: #667eea (Azul)
- **Secundario**: #764ba2 (Púrpura)
- **Acento**: #ffd700 (Dorado)
- **Texto**: #333333 (Gris oscuro)
- **Fondo**: #f8f9fa (Gris claro)

### Tipografía

- **Principal**: Inter (Google Fonts)
- **Tamaños**: Escala modular de 0.8rem a 3.5rem
- **Pesos**: 300, 400, 500, 600, 700

### Animaciones

- Transiciones suaves (0.3s ease)
- Efectos hover en tarjetas y botones
- Animaciones de aparición al hacer scroll
- Parallax sutil en el hero

## 🔧 Funcionalidades JavaScript

### Navegación Móvil
- Menú hamburguesa funcional
- Cierre automático al hacer clic en enlaces
- Animaciones de transición

### Formularios
- Validación en tiempo real
- Mensajes de error personalizados
- Envío asíncrono simulado
- Notificaciones de éxito/error

### Horarios Interactivos
- Filtros por idioma
- Resaltado de horarios disponibles
- Funciones de impresión y exportación
- Compartir horarios

### Protección Básica
- Deshabilitación de clic derecho
- Prevención de selección de texto
- Bloqueo de teclas de desarrollador
- Mensajes de consola personalizados

## 🛡️ Seguridad Implementada

### Protección del Código
- Deshabilitación de clic derecho
- Prevención de selección de texto
- Bloqueo de teclas de desarrollador (F12, Ctrl+Shift+I, etc.)
- Mensajes de advertencia en consola

### Headers de Seguridad
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📊 Optimizaciones

### Rendimiento
- Compresión de archivos estáticos
- Lazy loading para imágenes
- Minificación de CSS y JavaScript
- Caché de navegador configurado

### SEO
- Meta tags optimizados
- Estructura semántica HTML5
- URLs amigables
- Sitemap incluido

### Accesibilidad
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos para imágenes
- Estructura de encabezados correcta

## 🧪 Pruebas Realizadas

### Funcionalidades Probadas
- ✅ Navegación entre páginas
- ✅ Enlaces internos y externos
- ✅ Formularios de contacto
- ✅ Responsive design
- ✅ Compatibilidad de navegadores
- ✅ Funcionalidades JavaScript
- ✅ Protección básica del código

### Navegadores Compatibles
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Internet Explorer 11+

## 📈 Próximas Mejoras

### Funcionalidades Futuras
- [ ] Sistema de autenticación de usuarios
- [ ] Panel de administración
- [ ] Base de datos para cursos y estudiantes
- [ ] Sistema de pagos en línea
- [ ] Chat en vivo
- [ ] Notificaciones push
- [ ] App móvil nativa

### Optimizaciones Técnicas
- [ ] Implementación de PWA
- [ ] Service Workers para caché offline
- [ ] Optimización de imágenes WebP
- [ ] Implementación de CDN
- [ ] Monitoreo de rendimiento

## 📞 Soporte y Contacto

### Información del Proyecto
- **Desarrollador**: [Tu Nombre]
- **Fecha de Creación**: 2024
- **Versión**: 1.0.0
- **Licencia**: [Especificar licencia]

### Contacto Técnico
- **Email**: [tu-email@ejemplo.com]
- **Teléfono**: [tu-número]
- **GitHub**: [tu-usuario-github]

## 📝 Notas de Desarrollo

### Consideraciones Importantes
1. El proyecto incluye tanto versiones HTML estáticas como ASP.NET
2. La protección del código es básica y puede ser mejorada
3. Los formularios están configurados para envío simulado
4. La base de datos es opcional para funcionalidades básicas
5. Se recomienda implementar HTTPS en producción

### Recomendaciones de Despliegue
1. Configurar SSL/TLS en el servidor
2. Implementar backup automático de la base de datos
3. Configurar monitoreo de errores
4. Implementar logs de auditoría
5. Configurar CDN para archivos estáticos

---

**Nota**: Este proyecto cumple con todos los requisitos especificados en el documento de requerimientos, incluyendo diseño con código, navegación completa, información detallada del CEL, creatividad en el diseño, pruebas funcionales y protección básica del código.
