---
title: "Advisor Strategy de Anthropic: Reduce Costes en Claude Code"
description: "Cómo usar Opus como asesor y Sonnet o Haiku como ejecutores para reducir costes en Claude Code sin perder calidad ni control técnico."
locale: "es"
group: "anthropic-advisor-strategy-2026"
author: "Ignacio Amat"
publishedDate: 2026-04-09
category: "Herramientas"
readTime: "10 min lectura"
keywords:
  - "anthropic advisor strategy"
  - "claude code costes"
  - "opus sonnet haiku"
  - "optimizar costes ia programacion"
  - "workflow claude code"
heroImage: "https://images.unsplash.com/photo-1681583484651-281ae2defb17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDM3NjR8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcHJvZ3JhbW1pbmd8ZW58MHwwfHx8MTc3NDI3OTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
heroImageAlt: "Pantalla con codigo y asistencia de inteligencia artificial durante una sesion de desarrollo"
heroImageCredit: "Photo by Boitumelo on Unsplash"
draft: false
relatedServices:
  - "saas-mvp"
  - "maintenance"
faq:
  - question: "Que es exactamente la Advisor Strategy?"
    answer: "Es un patron de trabajo en el que un modelo mas capaz, como Opus, se usa para planificar, revisar o desbloquear decisiones complejas, mientras que un modelo mas barato y rapido, como Sonnet o Haiku, ejecuta la mayor parte del trabajo operativo."
  - question: "Realmente reduce costes?"
    answer: "Puede reducirlos, pero no de forma automatica en todos los casos. La idea es reservar el modelo mas caro para los momentos donde aporta mas juicio y usar modelos mas economicos para implementacion y tareas mecanicas. Los beneficios dependen del tipo de proyecto y del flujo real de trabajo."
  - question: "Sirve para cualquier tarea?"
    answer: "No. En tareas pequenas y muy claras suele ser mas simple usar directamente Sonnet o Haiku. La estrategia tiene mas sentido cuando hay decisiones tecnicas, riesgo de desviacion o trabajo suficientemente largo como para que la planificacion y la revision de Opus compensen."
---

Una de las preguntas mas practicas en 2026 para quien programa con IA no es que modelo es "el mejor", sino **como combinar modelos para pagar menos sin bajar demasiado la calidad**.

Por eso tuvo sentido que, alrededor del lanzamiento del nuevo enfoque de Anthropic del 9 de abril, empezara a circular con fuerza la llamada **Advisor Strategy**: usar **Opus** como asesor para pensar, revisar o desbloquear, y dejar que **Sonnet** o **Haiku** hagan la mayor parte del trabajo de ejecucion.

No es solo una idea de ahorro. Es una forma bastante sensata de separar dos tipos de trabajo que en desarrollo asistido por IA no pesan igual: el juicio tecnico y la produccion mecanica.

## El problema que intenta resolver

Muchos equipos cayeron al principio en uno de estos dos extremos:

- usar siempre el modelo mas potente para absolutamente todo;
- usar siempre el modelo mas barato y asumir que "ya se apana".

Los dos enfoques tienen peajes.

Si usas Opus para cada cambio trivial, pagas demasiado por tareas que no necesitan ese nivel de razonamiento. Si usas Sonnet o Haiku para decisiones arquitectonicas, refactors sensibles o revisiones delicadas, puedes ahorrar en tokens y perder tiempo despues corrigiendo una mala direccion.

La Advisor Strategy intenta equilibrar eso. La idea de fondo es sencilla:

1. El modelo fuerte piensa y revisa.
2. El modelo rapido ejecuta.
3. Solo subes de nivel cuando realmente hace falta.

## Dicho en lenguaje no tecnico: que cambia

Imagina una obra. No necesitas que el arquitecto coloque cada ladrillo. Necesitas que decida bien, revise bien y aparezca cuando hay una eleccion importante. El resto del trabajo lo hacen perfiles mas rapidos y mas baratos para esa parte concreta.

Eso es, mas o menos, lo que propone este enfoque aplicado a modelos.

**Opus** aporta valor cuando hay que:

- entender requisitos ambiguos;
- detectar riesgos;
- proponer una estructura razonable;
- revisar si la solucion final tiene agujeros.

**Sonnet** o **Haiku** aportan valor cuando hay que:

- implementar cambios ya acotados;
- reescribir o refactorizar partes conocidas;
- completar tareas repetitivas;
- avanzar deprisa con supervision.

## Como se usa en la practica

La explicacion mas simple de este patron es manual:

### 1. Primero se planifica

Se pide a Opus que entienda el contexto y devuelva un plan claro. No se le pide que escriba todo el codigo desde el principio.

### 2. Luego se ejecuta

Ese plan pasa a Sonnet o Haiku para la parte mecanica: editar archivos, seguir pasos, hacer cambios concretos y avanzar mas barato.

### 3. Al final se revisa

Opus vuelve para comprobar si el resultado se ajusta al objetivo, si faltan casos limite o si hay deuda tecnica escondida.

Dicho asi parece obvio, pero mucha gente sigue usando un solo modelo para las tres fases.

## Donde esta la mejora real

Lo interesante no es solo el precio por token. Lo interesante es el coste total de una tarea.

Un flujo aparentemente barato deja de serlo cuando:

- hay que rehacer medio cambio porque el enfoque inicial era flojo;
- el modelo ejecuto una solucion correcta en sintaxis, pero equivocada en producto;
- la revision humana llega tarde y descubre que el trabajo no cubria el caso real.

La Advisor Strategy busca evitar precisamente eso. Segun los benchmarks y articulos publicados alrededor del lanzamiento, la combinacion puede mejorar coste y calidad en escenarios donde hay bastante ejecucion pero tambien momentos puntuales de razonamiento caro. El porcentaje exacto varia, pero la logica es valida incluso sin obsesionarse con una cifra concreta.

## Cuando tiene sentido usarla

Este enfoque brilla sobre todo en cuatro situaciones.

### Cambios grandes

Si una tarea toca varios archivos, introduce una nueva funcionalidad o tiene dependencias entre partes, conviene que un modelo mas fuerte haga de "arquitecto de guardia".

### Debugging confuso

Cuando el problema no esta claro y hay varias causas posibles, ahorrar en razonamiento suele salir caro.

### Revisiones de calidad

Es mas rentable que un modelo capaz revise 300 lineas ya hechas que pagarle para producir desde cero las 300 si gran parte del trabajo podia hacerla otro modelo.

### Trabajo sensible

Autenticacion, permisos, validaciones, facturacion o cualquier parte con impacto real en negocio merecen una escalada de criterio.

## Cuando no compensa

No hace falta convertir cada tarea en una ceremonia.

Si vas a:

- renombrar variables,
- ajustar copy,
- tocar estilos menores,
- corregir un texto o un componente aislado,

es posible que Sonnet o Haiku basten de principio a fin.

Uno de los errores mas comunes con herramientas de IA es sofisticar el flujo cuando la tarea era pequena. La mejor estrategia no es la mas elegante sobre el papel, sino la que menos friccion introduce sin degradar el resultado.

## Lo que esta estrategia ensena a freelancers y equipos pequenos

Para un freelance o una empresa pequena, el aprendizaje importante no es "necesito mas modelos". Es otro: **necesito asignar mejor cada modelo al tipo de trabajo que hace**.

Eso tiene un impacto directo en margen, velocidad y calidad.

En proyectos de cliente, por ejemplo, hay tres momentos donde este patron encaja muy bien:

- discovery y planteamiento tecnico;
- ejecucion del grueso del trabajo;
- control de calidad antes de entregar.

Usar el mismo nivel de potencia en las tres fases suele ser desperdicio o riesgo.

Por eso, cuando desarrollo un MVP o una herramienta interna, me interesa mucho menos "presumir de modelo caro" y mucho mas construir un flujo sostenible: planificar bien, ejecutar rapido y revisar con criterio. Ese enfoque encaja especialmente en proyectos de [SaaS y MVPs](/desarrollo-aplicacion-web-saas) y tambien en tareas de [mantenimiento web](/mantenimiento-web) donde el coste de pequeñas decisiones equivocadas se acumula.

## Los errores que conviene evitar

### 1. Dar un plan demasiado vago

Si la fase de asesoramiento devuelve algo ambiguo, el ejecutor improvisa. Y la improvisacion no siempre sale barata.

### 2. Saltarse la revision final

Mucha gente hace la primera mitad del patron y se olvida de la ultima. Justo ahi es donde se recupera buena parte del valor.

### 3. Usar Haiku para trabajo con juicio

Rapido no significa suficiente. Cuando hay dependencias, seguridad o decisiones de producto, el ahorro puede ser un falso ahorro.

### 4. Medir solo tokens

El KPI correcto no es solo cuanto cuesta una llamada. Tambien cuenta cuantas iteraciones hacen falta, cuantas correcciones aparecen despues y cuanto tiempo humano se pierde revisando salidas flojas.

## Que significa esto para negocio

La Advisor Strategy no es solo una curiosidad para desarrolladores intensivos. Tambien anticipa como se va a organizar el trabajo con IA en equipos reales.

Las empresas que mejor aprovechen estas herramientas no seran necesariamente las que compren el acceso mas caro. Seran las que definan mejor:

- que tareas deben escalarse;
- donde se exige revision mas fuerte;
- cuando compensa velocidad frente a profundidad;
- que tipo de salida puede aceptarse sin supervisar y cual no.

En otras palabras: ganara quien tenga mejor proceso, no quien haga mas prompts.

## Mi conclusion

La gran virtud de la Advisor Strategy es que obliga a pensar el desarrollo asistido por IA como un sistema de trabajo, no como una suscripcion a un modelo.

Y eso es exactamente como deberia enfocarse. No se trata de adivinar si Opus, Sonnet o Haiku son "el mejor". Se trata de saber **que parte del trabajo necesita juicio caro y que parte puede resolverse con ejecucion barata**.

Si estas intentando usar IA para construir producto con mas velocidad, pero sin disparar coste ni deuda tecnica, este tipo de decisiones de flujo importan mucho mas de lo que parece. Y si quieres aterrizar ese enfoque en un proyecto real, puedo ayudarte a definir un proceso de desarrollo mas rentable y menos improvisado.

## Artículos relacionados

- [Plan de $100 de OpenAI: Qué Cambia para Usuarios de Codex](/blog/openai-plan-100-dolares-codex-claude-code-2026)
- [Rediseño de Claude Code Desktop: Qué Cambia para Devs](/blog/claude-code-desktop-rediseno-productividad-2026)

Si quieres aterrizar este tipo de flujo en un proyecto real, [puedes hablar conmigo aquí](/#contacto).

## Fuentes y contexto

- [MindStudio: What Is Claude Code's Advisor Strategy?](https://www.mindstudio.ai/blog/claude-code-advisor-strategy-opus-sonnet-haiku)
