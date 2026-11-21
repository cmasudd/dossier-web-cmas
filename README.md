# Dossier web CMAS

Índice público de plataformas, visualizadores y herramientas del Centro de Investigación en Tecnologías para la Sociedad (C+), Facultad de Ingeniería de la Universidad del Desarrollo. Reúne los proyectos web de la cuenta `cmasudd` seleccionados para el dossier de Alejandro Rebolledo. [Abrir el índice](https://cmasudd.github.io/dossier-web-cmas/) · [Manual de uso y mantenimiento](MANUAL.md)

## Explorar el dossier

Busca por nombre, repositorio o tema y combina la búsqueda con el filtro de temática. Por ejemplo, escribir `aysen` encuentra **Aire Aysén**. Pulsa la captura o **Visitar sitio** para abrir la web. **Ver repositorio** abre su código en GitHub. Las tarjetas se adaptan a pantallas de escritorio, tabletas y teléfonos. [Consultar las fichas actuales](proyectos.json)

## Agregar un proyecto

1. Abre el archivo del catálogo en el editor de GitHub. [Editar proyectos.json](https://github.com/cmasudd/dossier-web-cmas/edit/main/proyectos.json)
2. Duplica una ficha y cambia `title`, `repo`, `theme` y `description`. Usa el nombre exacto del repositorio de `cmasudd`. Las temáticas y el contador se generan a partir de las fichas.
3. Para incluir una vista previa, sube una captura a `assets/previews/` e indica la ruta en `preview`. Si la ficha aún no tiene imagen, omite ese campo. Puedes usar `url` para indicar una dirección pública distinta de la que se genera a partir de `repo`.
4. Guarda el cambio en `main`. GitHub Pages publicará el catálogo desde la raíz del repositorio. Abre el dossier y comprueba la ficha y sus dos enlaces. [Ver ejemplo y pasos detallados](MANUAL.md#agregar-una-web-desde-github)

## Diseño e identidad institucional

La cabecera azul presenta el logo compuesto de la UDD y el Centro C+ sobre una base blanca, con una línea verde en el borde inferior. La portada y los enlaces usan azul `#0065A3`, azul oscuro `#27273F` y acentos verdes `#55E8A0`. El pie incluye la marca UDD y el contacto **Webmaster Alejandro Rebolledo**. [Logo compuesto original](https://cmas.udd.cl/wp-content/uploads/2023/05/Logo-compuesto-UDD-Cmas.png) · [Referencia visual del Centro C+](https://cmas.udd.cl/preview/) · [arebolledo@udd.cl](mailto:arebolledo@udd.cl)

| Para cambiar | Archivo |
| --- | --- |
| Fichas, orden y temáticas | [proyectos.json](proyectos.json) |
| Capturas de los proyectos | [assets/previews](assets/previews) |
| Presentación institucional, logos y contacto | [index.html](index.html) y [assets](assets) |
| Colores, tipografía y disposición de las tarjetas | [style.css](style.css) |
| Buscador, filtros y enlaces de las fichas | [catalogo.js](catalogo.js) |
