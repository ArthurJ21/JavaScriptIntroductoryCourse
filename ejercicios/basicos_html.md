# HTML Básico

## ¿Qué es HTML?
HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. Se usa para estructurar el contenido y decirle al navegador cómo mostrar texto, imágenes, enlaces y otros elementos.

## Estructura básica de un documento HTML
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Este es el contenido de la página.</p>
  </body>
</html>
```

- `<!DOCTYPE html>`: Indica que el documento usa HTML5.
- `<html>`: Contiene todo el documento.
- `<head>`: Contiene metadatos, título, enlaces a estilos y scripts.
- `<body>`: Contiene el contenido visible de la página.

## Etiquetas HTML comunes

### Títulos y texto
- `<h1>` a `<h6>`: Encabezados, donde `<h1>` es el más importante.
- `<p>`: Párrafo.
- `<strong>`: Texto importante en negrita.
- `<em>`: Texto enfatizado en cursiva.
- `<br>`: Salto de línea.
- `<hr>`: Línea horizontal separadora.

### Listas
- `<ul>`: Lista desordenada.
- `<ol>`: Lista ordenada.
- `<li>`: Elemento de lista.

Ejemplo:
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
```

### Enlaces
- `<a href="url">`: Crea un enlace.
- `target="_blank"`: Abre el enlace en una nueva pestaña.

Ejemplo:
```html
<a href="https://www.example.com" target="_blank">Visitar ejemplo</a>
```

### Imágenes
- `<img src="ruta" alt="texto alternativo">`
- `alt` es obligatorio para accesibilidad y SEO.

Ejemplo:
```html
<img src="imagen.png" alt="Descripción de la imagen">
```

### Tablas
- `<table>`: Tabla.
- `<tr>`: Fila.
- `<th>`: Celda de encabezado.
- `<td>`: Celda de datos.

Ejemplo:
```html
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
  </tr>
</table>
```

### Formularios
- `<form>`: Contenedor del formulario.
- `<input>`: Campo de texto, botón, correo, contraseña, etc.
- `<textarea>`: Área de texto grande.
- `<button>`: Botón.
- `<label>`: Etiqueta de campo.

Ejemplo:
```html
<form action="/enviar" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  <button type="submit">Enviar</button>
</form>
```

### Atributos importantes
- `id`: Identificador único.
- `class`: Clase para agrupar estilos o seleccionar con CSS/JS.
- `src`: Ruta de recurso (imagen, script).
- `href`: URL de enlace o archivo.
- `alt`: Texto alternativo para imágenes.
- `title`: Texto adicional al pasar el cursor.

## Elementos semánticos
HTML5 introdujo etiquetas que describen mejor el contenido:
- `<header>`: Encabezado de página o sección.
- `<nav>`: Navegación.
- `<main>`: Contenido principal.
- `<section>`: Sección de contenido.
- `<article>`: Contenido independiente.
- `<aside>`: Barra lateral o contenido secundario.
- `<footer>`: Pie de página.

## Comentarios
Los comentarios no se muestran en el navegador:
```html
<!-- Este es un comentario -->
```

## Entidades HTML
Algunos caracteres especiales se representan con entidades:
- `&lt;` = `<`
- `&gt;` = `>`
- `&amp;` = `&`
- `&quot;` = `"`
- `&nbsp;` = espacio no separable

## Buenas prácticas básicas
- Usa `lang="es"` en la etiqueta `<html>`.
- Incluye `<meta charset="UTF-8">`.
- Mantén el contenido bien estructurado.
- Usa elementos semánticos para mejorar accesibilidad.
- Usa `alt` en todas las imágenes.

## Cómo enlazar CSS y JavaScript
### CSS
```html
<link rel="stylesheet" href="styles.css">
```

### JavaScript
```html
<script src="script.js"></script>
```

## Resumen rápido
1. HTML estructura la página web.
2. `<head>` contiene metadatos.
3. `<body>` contiene lo visible.
4. Usa etiquetas semánticas cuando sea posible.
5. Usa atributos como `id`, `class`, `href`, `src`, `alt`.
6. Practica con ejemplos simples y construye gradualmente.

---

Con esto tienes las bases para empezar a crear páginas HTML y entender cómo funciona la estructura básica de cualquier sitio web.