# Dossier web CMAS

[Visitar el dossier](https://cmasudd.github.io/dossier-web-cmas/)

Índice de los proyectos web de CMAS en GitHub Pages.

## Agregar un proyecto

Edita [proyectos.json](proyectos.json) desde GitHub y agrega una ficha al final de la lista. El orden del archivo es el orden de las fichas y las temáticas se actualizan automáticamente.

```json
{
  "title": "Nombre de la web",
  "repo": "nombre-del-repositorio",
  "theme": "Agua",
  "description": "Una frase que describa el proyecto."
}
```

Usa el nombre exacto del repositorio de `cmasudd`. El catálogo construye el enlace de GitHub Pages a partir de ese nombre. Si corresponde una URL pública distinta, agrégala en el campo `url`.

Para mostrar una captura, súbela a `assets/previews/` y agrega a la ficha el campo `preview` con su ruta, por ejemplo `assets/previews/nombre-del-repositorio.webp`. Se recomienda una captura de 720 × 480 píxeles. Puedes guardar la ficha sin captura.

Guarda el cambio en `main` y espera a que GitHub Pages termine la publicación.
