const galeria = document.getElementById('galeria');
const contador = document.getElementById('contador');
const busqueda = document.getElementById('busqueda');
const vacio = document.getElementById('vacio');
const ficha = document.getElementById('ficha');
const cerrar = document.getElementById('cerrar');
const fichaUsuario = document.getElementById('ficha-usuario');
const fichaFrase = document.getElementById('ficha-frase');
const fichaFecha = document.getElementById('ficha-fecha');

function abrirFicha(sub) {
  fichaUsuario.textContent = '@' + sub.usuario;
  fichaFrase.textContent = '“' + sub.frase + '”';
  fichaFecha.textContent = sub.fecha || '';
  ficha.showModal();
}

function crearRetrato(sub, indice) {
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'portrait-card';
  boton.setAttribute('aria-label', `Abrir retrato de ${sub.usuario}`);

  const frame = document.createElement('div');
  frame.className = 'portrait-frame';
  const mat = document.createElement('div');
  mat.className = 'portrait-mat';

  const artwork = document.createElement('div');
  artwork.className = 'artwork';
  const initial = document.createElement('span');
  initial.className = 'placeholder-initial';
  initial.textContent = (sub.usuario || '?').charAt(0).toUpperCase();
  artwork.appendChild(initial);

  if (sub.foto) {
    const foto = document.createElement('img');
    foto.src = sub.foto;
    foto.alt = `Foto de ${sub.usuario}`;
    foto.loading = 'lazy';
    foto.onerror = () => { foto.remove(); };
    artwork.appendChild(foto);
  }

  const badge = document.createElement('span');
  badge.className = 'artwork-label';
  badge.textContent = `Nº ${String(indice + 1).padStart(3, '0')}`;
  artwork.appendChild(badge);
  mat.appendChild(artwork);
  frame.appendChild(mat);

  const plaque = document.createElement('div');
  plaque.className = 'portrait-plaque';
  const user = document.createElement('strong');
  user.textContent = '@' + sub.usuario;
  const caption = document.createElement('span');
  caption.textContent = 'VER HISTORIA ↗';
  plaque.append(user, caption);

  boton.append(frame, plaque);
  boton.addEventListener('click', () => abrirFicha(sub));
  return boton;
}

function dibujar() {
  const texto = busqueda.value.trim().toLocaleLowerCase();
  const visibles = SUBS.filter(sub => sub.usuario.toLocaleLowerCase().includes(texto));
  galeria.replaceChildren(...visibles.map((sub, indice) => crearRetrato(sub, indice)));
  contador.textContent = `${SUBS.length} ${SUBS.length === 1 ? 'OBRA' : 'OBRAS'} EN EXHIBICIÓN`;
  vacio.hidden = visibles.length !== 0;
}

busqueda.addEventListener('input', dibujar);
cerrar.addEventListener('click', () => ficha.close());
ficha.addEventListener('click', (evento) => {
  if (evento.target === ficha) ficha.close();
});

dibujar();
