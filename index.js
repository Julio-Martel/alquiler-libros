const imagenPortada = document.getElementById('portada-libro');
const iconoMenu = document.querySelector('.ico-menu');
const modalMenu = document.querySelector('.modal-menu');
const botonClose = document.querySelector('.close');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function cambiarImagen() {
	let nroPortada = 1;

	while (true) {
		await delay(1500);
		imagenPortada.classList.add('imagen-inicio-oscurecer');
		
		await delay(1000); 		
		
		nroPortada++;

		if (nroPortada > 3) {nroPortada = 1}

		imagenPortada.src = `images/mangas-inicio/${nroPortada}.jpg`;
		
		await delay(50); 
		imagenPortada.classList.remove('imagen-inicio-oscurecer');
	}}

cambiarImagen();

iconoMenu.addEventListener('click', () => {
	modalMenu.style.display = "flex";
	iconoMenu.style.opacity = "0";
});

botonClose.addEventListener('click', () => {
	modalMenu.style.display = "none";
	iconoMenu.style.opacity = "1";
})
