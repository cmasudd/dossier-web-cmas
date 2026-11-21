# Manual del dossier web CMAS

Esta guía permite consultar y mantener el índice de proyectos web del Centro C+ de la Universidad del Desarrollo. Para actualizarlo desde el navegador, inicia sesión en GitHub con una cuenta que pueda guardar cambios en el repositorio. [Abrir dossier](https://cmasudd.github.io/dossier-web-cmas/) · [Volver al README](README.md)

## Consultar una web

En la portada, pulsa **Explorar el catálogo**. Escribe una palabra o parte del nombre y selecciona una temática si quieres acotar los resultados. El contador indica cuántas fichas coinciden. Para volver al catálogo completo, borra la búsqueda y selecciona **Todas**.

La captura es una imagen de la web en el momento en que se preparó la ficha. Al pulsarla, o al elegir **Visitar sitio**, se abre la web publicada. **Ver repositorio** lleva al proyecto en GitHub.

## Agregar una web desde GitHub

1. Abre el repositorio del proyecto nuevo. Copia su nombre tal como aparece después de `github.com/cmasudd/`, incluidas las mayúsculas. Abre también la web publicada y comprueba que corresponde a ese proyecto.
2. Abre el catálogo del dossier con el botón del lápiz de GitHub. [Editar el catálogo](https://github.com/cmasudd/dossier-web-cmas/edit/main/proyectos.json)
3. Añade una coma después de la llave de cierre de la última ficha. Antes del corchete final `]`, pega una ficha como la del ejemplo de abajo. Sustituye los valores de muestra por los del proyecto.
4. Usa comillas dobles y deja la última ficha sin coma al final. Mantén los corchetes que encierran la lista.
5. Pulsa **Commit changes…**, escribe un mensaje que identifique el proyecto y confirma el cambio en `main`. Si trabajas en una rama, la publicación comenzará cuando se integre en `main`.
6. Cuando termine la publicación, busca el título en el dossier, prueba el filtro y abre **Visitar sitio** y **Ver repositorio**. [Comprobar el despliegue](https://github.com/cmasudd/dossier-web-cmas/actions)

**Ejemplo de una ficha nueva**, con valores ficticios que debes sustituir.

```json
{
  "title": "Observatorio del río",
  "repo": "observatorio-rio",
  "theme": "Agua",
  "description": "Mapa de estaciones de monitoreo y consulta de mediciones del río."
}
```

| Campo | Qué escribir |
| --- | --- |
| `title` | El nombre que verá el visitante en la tarjeta. |
| `repo` | Solo el nombre del repositorio de la cuenta `cmasudd`. El dossier lo usa para enlazar el código y formar la URL de Pages. |
| `theme` | Una categoría. Copia la grafía de una existente para agrupar las fichas. Un valor nuevo crea una opción en el filtro. |
| `description` | Una frase que explique qué puede consultar o hacer el visitante. |
| `url` (opcional) | La dirección completa de la web si difiere de `https://cmasudd.github.io/<repo>/`. |
| `preview` (opcional) | La ruta y extensión exactas de la captura, por ejemplo `assets/previews/observatorio-rio.webp`. |

La incorporación al dossier es manual. Publicar un repositorio nuevo en la cuenta y agregar su ficha al índice son dos pasos distintos.

## Preparar o renovar una captura

1. Abre la portada pública del proyecto y espera a que carguen sus estilos e imágenes. Captura el contenido de la ventana. Las miniaturas existentes usan formato WebP y miden 720 × 480 píxeles.
2. Guarda la imagen con un nombre reconocible, por ejemplo `observatorio-rio.webp`. Abre la carpeta de capturas en GitHub y usa **Add file → Upload files** para subirla. [Abrir carpeta de capturas](assets/previews)
3. Añade el campo `preview` a la ficha con la ruta del archivo. Si reemplazas una captura existente conservando su ruta, basta con subir la nueva imagen.
4. Comprueba en la web pública que la imagen se distingue también desde un teléfono y que al pulsarla se abre el proyecto correcto.

## Corregir, reordenar o retirar fichas

Para corregir un texto o enlace, edita el campo correspondiente. Para reordenar las tarjetas, mueve la ficha completa dentro de la lista. Para retirar un proyecto del índice, elimina su ficha y ajusta la coma entre las fichas vecinas. Cada operación se publica al guardar en `main`. [Abrir catálogo](proyectos.json)

## Actualizar la identidad o el contacto

En `index.html` están el nombre institucional, el logo de cabecera y el pie. Para cambiar el correo, actualiza el enlace **Contacto** de la cabecera y el enlace y texto visible del pie. Los colores principales están en las variables `--blue`, `--navy` y `--green` al inicio de la hoja de estilos. [Portada](index.html) · [Estilos](style.css) · [Logos](assets)

## Comprobar y recuperar una publicación

| Si observas esto | Qué revisar |
| --- | --- |
| Aparece «El catálogo no está disponible en este momento» | Abre el JSON y revisa la última edición. Una coma final, comillas simples o un corchete faltante impiden leer la lista. [Ver catálogo publicado](https://cmasudd.github.io/dossier-web-cmas/proyectos.json) |
| La ficha aparece sin imagen | Comprueba que el archivo se subió a `main` y que la ruta en `preview` coincide letra por letra, incluida la extensión. |
| «Visitar sitio» o «Ver repositorio» abre una página incorrecta | Revisa `repo` y sus mayúsculas. Si la web tiene otra dirección, comprueba el campo `url`. |
| La ficha nueva todavía no aparece | Comprueba que el cambio llegó a `main`, que terminó el despliegue y que la búsqueda está vacía con la temática **Todas**. [Ver publicaciones en GitHub Actions](https://github.com/cmasudd/dossier-web-cmas/actions) |

Si necesitas deshacer una edición desde el navegador, abre **History** en el archivo afectado, consulta la versión anterior y recupera la ficha o las líneas que cambiaron. Guarda la corrección en un nuevo commit y verifica el resultado en el dossier. Así conservas las demás actualizaciones del catálogo.
