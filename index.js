const contenedorImagen = document.querySelector('.contenedor-imagen');

console.log(contenedorImagen);

const delay = (ms) => {
	return new Promise(resolve => setTimeout(resolve,ms));
}

async function cambiarImagen() {
	let nroPortada = 1;
	while(nroPortada === 1 || nroPortada === 2) {
		let portada = `<img src="images/mangas-inicio/${nroPortada}.jpg" class="imagen-inicio" id="portada-libro">`;
		await delay(1500);	
		nroPortada++;
		contenedorImagen.innerHTML = portada;
		if (nroPortada > 2) {nroPortada = 1}
	}
}


cambiarImagen();