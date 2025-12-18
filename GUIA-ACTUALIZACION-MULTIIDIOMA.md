# 🌍 GUÍA: Actualizar Contenido Multi-idioma

## Problema
Tienes páginas duplicadas en ES e EN y necesitas mantenerlas sincronizadas.

## ✅ Páginas que debes mantener sincronizadas

### Páginas de Servicio:
```
ES                                    EN
/crear-pagina-web-barcelona.astro  → /en/create-website-barcelona.astro
/desarrollador-web-barcelona.astro → /en/web-developer-barcelona.astro
/diseno-web-empresas.astro         → /en/web-design-businesses.astro
```

### Páginas Principales:
```
ES               EN
/index.astro  → /en/index.astro
/contact.astro → /en/contact.astro
```

---

## 📋 CHECKLIST: Cuando actualizas una página

### ✅ Si cambias DISEÑO/ESTRUCTURA:
- [ ] Aplicar el mismo cambio en la versión EN
- [ ] Verificar que los estilos funcionan igual
- [ ] Revisar responsive en ambas versiones
- [ ] Probar interactividad (si hay)

### ✅ Si cambias CONTENIDO:
- [ ] Traducir el contenido (no uses Google Translate literal)
- [ ] Adaptar el contenido al mercado (ES vs EN)
- [ ] Revisar keywords SEO apropiadas para cada idioma
- [ ] Actualizar meta descriptions si cambiaron

### ✅ Si añades COMPONENTE NUEVO:
- [ ] Verificar que el componente soporte i18n
- [ ] Añadir traducciones en `src/i18n/locales/`
- [ ] Importar en ambas versiones de la página
- [ ] Probar con ambos idiomas

---

## 🔧 WORKFLOW RECOMENDADO

### 1. Hacer cambios en ESPAÑOL primero
```bash
# Edita: src/pages/crear-pagina-web-barcelona.astro
# Guarda los cambios
```

### 2. Abrir versión EN lado a lado
```bash
# Abre: src/pages/en/create-website-barcelona.astro
# Compara con la versión ES
```

### 3. Aplicar cambios de estructura
- Copia la estructura HTML
- Mantén las clases CSS idénticas
- Ajusta solo el contenido de texto

### 4. Traducir contenido
- **NO uses traducción literal**
- Adapta al contexto cultural
- Mantén el tono profesional
- Keywords en inglés pueden ser diferentes

### 5. Verificar
```bash
npm run dev
# Visita ambas URLs:
# http://localhost:4321/crear-pagina-web-barcelona
# http://localhost:4321/en/create-website-barcelona
```

---

## 📱 COMPONENTES QUE YA SOPORTAN i18n

### ✅ Componentes multi-idioma:
- `<Translate key="..." />` - Usa automáticamente el locale
- `<Header />` - Detecta idioma de la URL
- `<Contact />` - Formulario con traducciones
- `<StickyCTA />` - CTA con traducciones
- `<Layout />` - Meta tags por idioma

### ⚠️ Componentes que necesitas duplicar:
- Contenido estático (párrafos largos)
- Listas específicas por idioma
- FAQs (preguntas pueden variar)

---

## 🎯 EJEMPLO: Añadir nueva sección

### INCORRECTO ❌:
```astro
<!-- Solo en español -->
<section>
  <h2>Nueva Sección</h2>
  <p>Contenido en español...</p>
</section>
```

### CORRECTO ✅:

**Paso 1: Añadir traducciones**
```json
// src/i18n/locales/es.json
{
  "newSection": {
    "title": "Nueva Sección",
    "content": "Contenido en español..."
  }
}

// src/i18n/locales/en.json
{
  "newSection": {
    "title": "New Section",
    "content": "Content in English..."
  }
}
```

**Paso 2: Usar componente Translate**
```astro
<section>
  <h2><Translate key="newSection.title" /></h2>
  <p><Translate key="newSection.content" /></p>
</section>
```

**Paso 3: Añadir en AMBAS páginas**
- Añade en versión ES
- Añade en versión EN
- Mismo código, traducciones automáticas

---

## 🚀 AUTOMATIZACIÓN FUTURA (Opcional)

Si esto se vuelve muy tedioso, puedes crear un script:

```javascript
// scripts/sync-pages.js
import fs from 'fs';
import path from 'path';

const pageMapping = {
  'crear-pagina-web-barcelona': 'en/create-website-barcelona',
  'desarrollador-web-barcelona': 'en/web-developer-barcelona',
  'diseno-web-empresas': 'en/web-design-businesses'
};

// Detecta cambios en páginas ES
// Alerta si versión EN no está sincronizada
// Sugiere qué traducir
```

---

## 💡 CONSEJOS IMPORTANTES

### 1. **No traduzcas literalmente**
```
❌ "Free quote" → "Cotización libre"
✅ "Free quote" → "Presupuesto gratuito"
```

### 2. **Adapta keywords**
```
Español: "crear página web barcelona"
Inglés: "create website barcelona" o "web developer barcelona"
(Puede ser diferente según mercado objetivo)
```

### 3. **Mantén consistencia visual**
```css
/* Mismas clases CSS en ambas versiones */
.cta-box { } ✅
.caja-cta { } ❌ (solo una versión)
```

### 4. **URLs en enlaces internos**
```astro
<!-- Español -->
<a href="/desarrollador-web-barcelona">

<!-- Inglés -->
<a href="/en/web-developer-barcelona">
```

---

## 🔍 VERIFICACIÓN PRE-DEPLOY

Antes de desplegar, verifica:

- [ ] Ambas versiones (ES/EN) tienen el mismo diseño
- [ ] Todos los enlaces funcionan en ambos idiomas
- [ ] Meta tags actualizados (title, description)
- [ ] Schema markup con idioma correcto
- [ ] Imágenes con alt text en idioma correcto
- [ ] CTAs traducidos y funcionando
- [ ] Formularios envían en idioma correcto
- [ ] Sitemap actualizado con ambas URLs

---

## 📊 ESTRUCTURA IDEAL A LARGO PLAZO

Si llegas a tener 20+ páginas, considera:

```
src/
├── components/
│   ├── templates/
│   │   ├── ServicePageTemplate.astro
│   │   ├── BlogPostTemplate.astro
│   │   └── LandingPageTemplate.astro
│   └── ...
├── content/
│   ├── services/
│   │   ├── es/
│   │   └── en/
│   └── blog/
│       ├── es/
│       └── en/
├── i18n/
│   ├── locales/
│   │   ├── es.json (expandido)
│   │   └── en.json (expandido)
│   └── utils.ts
└── pages/
    ├── [lang]/
    │   ├── services/
    │   │   └── [slug].astro (dinámico)
    │   └── blog/
    │       └── [slug].astro (dinámico)
    └── ...
```

Pero para 5-10 páginas, tu estructura actual es perfecta.

---

## ✅ RESUMEN

**AHORA:**
- Mantén estructura actual (simple y clara)
- Usa este checklist cuando actualices
- Sincroniza manualmente (solo 4 páginas)

**FUTURO (si creces mucho):**
- Refactoriza a templates
- Usa Content Collections
- Automatiza con scripts

**Tu decisión fue correcta** - así es como Astro recomienda hacer i18n. La duplicación es normal y aceptable para proyectos pequeños/medianos.

---

*Creado: 18 Diciembre 2025*
