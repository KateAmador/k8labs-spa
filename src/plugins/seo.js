/**
 * Plugin SEO para Vue.js
 * Maneja metadatos dinámicos, OpenGraph, Twitter Cards y datos estructurados
 */

export default {
  install(app) {
    // Función para actualizar metadatos
    const updateMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`) || 
                   document.querySelector(`meta[property="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name', name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Función para actualizar título
    const updateTitle = (title) => {
      document.title = title
      updateMeta('og:title', title)
      updateMeta('twitter:title', title)
    }

    // Función para actualizar descripción
    const updateDescription = (description) => {
      updateMeta('description', description)
      updateMeta('og:description', description)
      updateMeta('twitter:description', description)
    }

    // Función para actualizar URL canonical
    const updateCanonical = (url) => {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = url
      updateMeta('og:url', url)
    }

    // Función para agregar datos estructurados JSON-LD
    const addStructuredData = (data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    }

    // Configuración base de metadatos
    const baseMeta = {
      siteName: 'K8Labs',
      domain: 'k8labs.com',
      twitterHandle: '@k8labs',
      defaultImage: '/img/og-image.png',
      locale: 'es_ES',
      type: 'website'
    }

    // Función principal para configurar SEO
    const setSEO = (config) => {
      const {
        title = 'K8Labs',
        description = 'Servicios profesionales de desarrollo web y consultoría tecnológica',
        image = baseMeta.defaultImage,
        url = window.location.href,
        type = 'website',
        keywords = '',
        author = 'K8Labs',
        publishedTime = null,
        modifiedTime = null,
        article = false
      } = config

      // Título
      updateTitle(title)

      // Descripción
      updateDescription(description)

      // URL canonical
      updateCanonical(url)

      // Keywords
      if (keywords) {
        updateMeta('keywords', keywords)
      }

      // Autor
      updateMeta('author', author)

      // OpenGraph
      updateMeta('og:site_name', baseMeta.siteName)
      updateMeta('og:type', type)
      updateMeta('og:image', image)
      updateMeta('og:locale', baseMeta.locale)

      // Twitter Card
      updateMeta('twitter:card', 'summary_large_image')
      updateMeta('twitter:site', baseMeta.twitterHandle)
      updateMeta('twitter:creator', baseMeta.twitterHandle)
      updateMeta('twitter:image', image)

      // Metadatos específicos para artículos
      if (article && publishedTime) {
        updateMeta('article:published_time', publishedTime)
        updateMeta('article:author', author)
        if (modifiedTime) {
          updateMeta('article:modified_time', modifiedTime)
        }
      }

      // Datos estructurados para organización
      if (type === 'website') {
        addStructuredData({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: baseMeta.siteName,
          url: `https://${baseMeta.domain}`,
          logo: `https://${baseMeta.domain}/img/logo.png`,
          sameAs: [
            `https://twitter.com/${baseMeta.twitterHandle.replace('@', '')}`
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: 'Spanish'
          }
        })
      }
    }

    // Hacer disponible globalmente
    app.config.globalProperties.$seo = setSEO
    app.provide('seo', setSEO)
  }
} 