# K8Labs SPA - Portfolio y Landing Page

![K8Labs](https://www.k8labs.dev/public/img/favicon.svg)

Bienvenido al repositorio oficial de **K8Labs SPA**, la Single Page Application que sirve como landing page y portfolio profesional. Este proyecto está construido con tecnologías modernas para ofrecer una experiencia de usuario rápida, fluida y visualmente atractiva.

---

## ✨ Características Principales

- **Diseño Moderno y Responsivo**: Interfaz limpia y adaptable a cualquier dispositivo, desarrollada con Tailwind CSS.
- **Alta Performance**: Optimizada para una carga rápida gracias a Vite y el uso de técnicas como Lazy Loading.
- **Componentes Reutilizables**: Arquitectura basada en componentes con Vue 3 para un mantenimiento sencillo y escalable.
- **Animaciones Fluidas**: Transiciones y efectos visuales implementados con `@vueuse/motion` para una experiencia de usuario dinámica.
- **Formulario de Contacto Funcional**: Integración con [FormSubmit](https://formsubmit.co/) para una gestión de correos sencilla y segura.
- **Botón Flotante de WhatsApp**: Acceso rápido para contacto directo.

---

## 🚀 Stack Tecnológico

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🛠️ Guía de Inicio Rápido

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18.x o superior)
- [pnpm](https://pnpm.io/) (o puedes usar `npm` o `yarn`)

### Instalación

1.  **Clona el repositorio:**
    ```sh
    git clone https://github.com/tu-usuario/k8labs-spa.git
    cd k8labs-spa/spa
    ```

2.  **Instala las dependencias:**
    ```sh
    pnpm install
    ```
    o si usas npm:
    ```sh
    npm install
    ```

### Ejecución

1.  **Inicia el servidor de desarrollo:**
    ```sh
    pnpm dev
    ```
    o con npm:
    ```sh
    npm run dev
    ```

2.  Abre tu navegador y visita `http://localhost:5173` (o el puerto que indique la consola).

### Build para Producción

Para compilar y minificar los archivos para producción:
```sh
pnpm build
```
Los archivos optimizados se generarán en el directorio `dist/`.

---

## 📁 Estructura del Proyecto

El código fuente está organizado de la siguiente manera dentro de `src/`:

```
src/
├── assets/         # Archivos estáticos como CSS e imágenes
├── components/     # Componentes de Vue
│   ├── layout/     # Componentes de la estructura principal (Footer, Navbar)
│   ├── pages/      # Componentes que representan páginas completas
│   ├── sections/   # Componentes para las secciones de la landing (Hero, Servicios, etc.)
│   └── ui/         # Componentes de UI genéricos y reutilizables (BaseCard, botones)
├── router/         # Configuración de Vue Router
└── main.js         # Archivo de entrada de la aplicación
```
