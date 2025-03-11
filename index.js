const imagenPortada = document.getElementById('portada-libro');
const arregloImagenesPorNumero = [];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function cambiarImagen() {
	let nroPortada = 1;
	let i = 0;
	while (true) {

		arregloImagenesPorNumero.push(nroPortada);

		await delay(1500);
		imagenPortada.classList.add('imagen-inicio-oscurecer');
		
		await delay(1000); 
		
		imagenPortada.src = `images/mangas-inicio/${arregloImagenesPorNumero[i]}.jpg`;
		
		await delay(50); 
		imagenPortada.classList.remove('imagen-inicio-oscurecer');
		
		nroPortada++;
		i++;			
	
		// corregir el tema de las de las transiciones
	}}

cambiarImagen();
