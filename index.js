const imagenPortada = document.getElementById('portada-libro');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function cambiarImagen() {
	let nroPortada = 1;
	while (true) {
		await delay(1500);
		imagenPortada.classList.add('imagen-inicio-oscurecer');
		
		await delay(1000); 
		nroPortada = nroPortada === 1 ? 2 : 1;
		imagenPortada.src = `images/mangas-inicio/${nroPortada}.jpg`;
		
		await delay(50); 
		imagenPortada.classList.remove('imagen-inicio-oscurecer');
	}
}

cambiarImagen();
