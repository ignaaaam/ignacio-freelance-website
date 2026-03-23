---
title: "Core Web Vitals en 2026: la guía práctica para empresas"
description: "Qué son los Core Web Vitals, cómo los mide Google, qué métricas importan en 2026 y por qué una web lenta está perdiendo clientes antes de que los vea."
slug: "core-web-vitals-guia-empresas-2026"
locale: "es"
group: "core-web-vitals-guide-2026"
publishedDate: 2026-03-20
category: "SEO"
readTime: "8 min lectura"
keywords:
  - "core web vitals 2026"
  - "metricas rendimiento web google"
  - "inp metrica google"
  - "velocidad web empresa"
  - "seo rendimiento web"
heroImage: "https://images.unsplash.com/photo-1593438002985-ce805be04da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDM3NjR8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwcGVyZm9ybWFuY2UlMjBzcGVlZHxlbnwwfDB8fHwxNzc0Mjc5OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
heroImageAlt: "Dashboard de analíticas mostrando métricas de rendimiento web"
heroImageCredit: "Photo by Myriam Jessier on Unsplash"
draft: false
relatedServices:
  - "business-websites"
  - "maintenance"
  - "redesign"
faq:
  - question: "¿Qué es INP y por qué ha reemplazado a FID?"
    answer: "INP (Interaction to Next Paint) mide el tiempo que tarda la página en responder visualmente a cualquier interacción del usuario. Reemplazó a FID porque es una métrica más completa: no mide solo el primer clic, sino todas las interacciones durante la sesión."
  - question: "¿Cuál es una buena puntuación de Core Web Vitals?"
    answer: "Google considera buenas las siguientes métricas: LCP inferior a 2.5 segundos, INP inferior a 200 milisegundos y CLS inferior a 0.1. Si tu web está en esos rangos, estás en verde. Si no, estás perdiendo posicionamiento frente a competidores que sí lo están."
  - question: "¿Cómo puedo mejorar el rendimiento de mi web?"
    answer: "Los pasos más efectivos suelen ser: optimizar imágenes, reducir JavaScript bloqueante, usar caching correctamente y elegir un hosting con buena latencia. En muchos casos, migrar de una plataforma pesada a una más ligera tiene un impacto inmediato."
---

Hay métricas de web que suenan técnicas pero que en realidad tienen una traducción muy directa a negocio. Los Core Web Vitals son una de ellas.

No son solo un criterio de posicionamiento de Google. Son una medida de si tu web trata bien a las personas que llegan a ella.

## Qué son los Core Web Vitals

Google introdujo los Core Web Vitals como un conjunto de métricas que evalúan la experiencia de usuario desde tres ángulos:

- **LCP (Largest Contentful Paint):** cuánto tarda en cargarse el elemento visual principal de la página
- **INP (Interaction to Next Paint):** cuánto tarda la página en responder a las interacciones del usuario
- **CLS (Cumulative Layout Shift):** cuánto se mueve el contenido de forma inesperada mientras carga

Cada una de estas métricas tiene umbrales claros. Por debajo de un umbral, estás en verde. Por encima, estás perdiendo.

## Por qué importan en 2026

Google usa los Core Web Vitals como señal de ranking desde 2021. Pero en 2026, el contexto ha cambiado: más sitios han optimizado, el nivel medio ha subido y la diferencia entre webs rápidas y lentas en resultados de búsqueda es más visible que nunca.

Pero hay algo más importante que el ranking: la conversión.

Una web que tarda 4 segundos en cargar el elemento principal pierde entre un 25 y un 40% de los visitantes antes de que vean nada. Esos visitantes no rebotan porque no les interesa lo que ofreces. Rebotan porque la experiencia les dice que no vale la pena esperar.

Eso tiene un coste directo.

## La métrica que más empresas ignoran: INP

LCP es la métrica que más atención recibe porque es la más intuitiva. La gente entiende "cuánto tarda en cargar".

Pero INP es donde muchas webs fallan sin saberlo.

INP mide la capacidad de respuesta de la página a las interacciones del usuario: clics en botones, apertura de menús, envío de formularios. Si tu web tarda más de 200 milisegundos en responder visualmente a un clic, estás por encima del umbral que Google considera aceptable.

¿Por qué falla? Principalmente por JavaScript mal gestionado: demasiado código cargando al mismo tiempo, bibliotecas pesadas que bloquean el hilo principal, animaciones costosas que compiten con las interacciones del usuario.

En webs construidas con WordPress con muchos plugins activos, este problema es muy común.

## CLS: el problema de la web que se mueve sola

El CLS es la experiencia de usuario más frustrante y la menos comprendida. Es cuando intentas hacer clic en un botón y la página se desplaza justo cuando ibas a pulsar, haciendo que cliques en otra cosa.

Ocurre porque la página carga elementos de forma asíncrona sin reservar espacio para ellos. Imágenes sin dimensiones definidas, banners que aparecen de forma tardía, fuentes que cambian el flujo del texto.

Un CLS alto no solo frustra al usuario. También hace que se vaya.

## Cómo saber dónde está tu web

La forma más directa es usar PageSpeed Insights de Google. Introduce la URL de tu web y te da las métricas reales medidas en usuarios de Chrome, no en condiciones de laboratorio.

Lo que buscas:

- LCP: verde por debajo de 2.5s, rojo por encima de 4s
- INP: verde por debajo de 200ms, rojo por encima de 500ms
- CLS: verde por debajo de 0.1, rojo por encima de 0.25

Si estás en rojo en alguna de estas métricas, hay trabajo por hacer.

## Qué puedes hacer

La mejora de Core Web Vitals depende mucho de cómo está construida la web. Algunas acciones tienen impacto inmediato:

**Para LCP:**
- Optimizar y servir imágenes en formato moderno (WebP, AVIF)
- Precargar el elemento visual principal
- Usar un CDN para reducir latencia

**Para INP:**
- Reducir y diferir JavaScript no crítico
- Eliminar plugins innecesarios (especialmente en WordPress)
- Migrar a una tecnología más ligera si el problema es estructural

**Para CLS:**
- Definir dimensiones explícitas en imágenes y vídeos
- Reservar espacio para elementos que cargan tarde
- Evitar insertar contenido sobre el existente

En muchos casos, la solución más eficiente no es optimizar lo existente, sino replantearse la tecnología. Una web bien construida con Astro, por ejemplo, obtiene Core Web Vitals en verde casi por defecto, porque genera HTML estático sin JavaScript bloqueante.

La pregunta relevante no es solo "¿cómo lo mejoro?" sino "¿el sistema que tengo puede dar esas cifras?". A veces la respuesta honesta es que no.
