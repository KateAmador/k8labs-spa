# Estructura de Componentes

Esta carpeta está organizada siguiendo buenas prácticas de Vue.js para facilitar el mantenimiento y escalabilidad del proyecto.

## Estructura

```
components/
├── pages/          # Componentes de páginas completas
│   ├── HomePage.vue
│   └── SupportPage.vue
├── sections/       # Secciones de páginas (Hero, Services, etc.)
│   ├── HeroSection.vue
│   ├── ServicesSection.vue
│   ├── PricingSection.vue
│   ├── WhyMeSection.vue
│   ├── ProjectsSection.vue
│   ├── FaqSection.vue
│   ├── ContactSection.vue
│   └── SupportSection.vue
├── ui/            # Componentes de interfaz reutilizables
│   ├── BackgroundGrid.vue
│   └── BackgroundPattern.vue
└── layout/        # Componentes de layout (header, footer, etc.)
    └── AppFooter.vue
```

## Descripción de Carpetas

### `pages/`
Contiene componentes que representan páginas completas de la aplicación. Estos componentes son utilizados directamente por el router.

### `sections/`
Contiene secciones específicas que se utilizan dentro de las páginas. Cada sección tiene un propósito específico y se puede reutilizar en diferentes páginas.

### `ui/`
Contiene componentes de interfaz de usuario reutilizables que no tienen lógica de negocio específica. Son componentes "tontos" que reciben props y emiten eventos.

### `layout/`
Contiene componentes relacionados con el layout general de la aplicación como headers, footers, sidebars, etc.

## Importaciones

Al importar componentes, usa rutas relativas desde la ubicación actual:

```javascript
// Desde pages/ importar sections/
import HeroSection from '../sections/HeroSection.vue'

// Desde sections/ importar ui/
import BackgroundPattern from '../ui/BackgroundPattern.vue'

// Desde App.vue importar layout/
import AppFooter from './components/layout/AppFooter.vue'
```

## Beneficios de esta Estructura

1. **Organización clara**: Es fácil encontrar componentes por su función
2. **Reutilización**: Los componentes UI pueden ser reutilizados en múltiples lugares
3. **Mantenimiento**: Cambios en un tipo de componente están localizados
4. **Escalabilidad**: Fácil agregar nuevos componentes siguiendo la misma estructura
5. **Separación de responsabilidades**: Cada carpeta tiene un propósito específico 