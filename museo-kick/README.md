# MUSEO DEL CHAT

Sitio estático para GitHub Pages. No requiere instalar programas.

## 1. Publicar desde PC
1. En https://github.com/new creá un repositorio público, por ejemplo `museo-del-chat`.
2. Entrá al repositorio y usá **Add file > Upload files**.
3. Subí **los archivos y la carpeta `fotos`** de este proyecto (NO subas el ZIP sin descomprimir). Para que GitHub conserve la carpeta `fotos`, subí una imagen a ella cuando tengas una.
4. Confirmá con **Commit changes**.
5. En **Settings > Pages > Build and deployment > Source** elegí **Deploy from a branch**.
6. En **Branch** elegí `main` y `/(root)`, luego **Save**.
7. Tu web estará en `https://TU_USUARIO.github.io/museo-del-chat/`. La publicación puede tardar unos minutos.

## 2. Agregar un sub
1. Entrá a la carpeta `fotos` en GitHub y usá **Add file > Upload files**. Subí, por ejemplo, `pepito.jpg`.
2. Abrí `subs.js` > icono del lápiz (**Edit this file**).
3. Añadí un objeto más al arreglo `SUBS`, separado por coma:

```javascript
{
  usuario: "pepito",
  frase: "Esta es mi frase elegida.",
  foto: "fotos/pepito.jpg",
  fecha: "Noviembre 2026"
},
```

4. Tocá **Commit changes**. Recargá tu web luego de que se publique.

Podés borrar los tres ejemplos iniciales cuando tengas subs reales.

## 3. Personalizar
- Nombre, descripción y estructura: `index.html`.
- Colores, marcos, tipografía y tamaños: `style.css`.
- Fotos, nombres, frases y fecha opcional: `subs.js`.
- Búsqueda, clicks y cuadros: `app.js`.

**Importante:** El repositorio y el museo son públicos. Subí únicamente fotos y frases que los chatters hayan autorizado publicar; no coloques datos privados.
