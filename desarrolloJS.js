import './styles.css';

function generarNumeroAleatorio() {
    return Math.floor(math.random() * 6) + 1;
}

function dibujarDados () {
    const dados = document.querySelectorAll('.dado');

    for (let i = 0; i < dados.length; i++); {
        
        const dado = dados[i];

        const imagen = document.createElement('img');
        imagen.src = 'img/dado-$(generarNumeroAleatorio()).png';

        dado.appendChild(image);
    }
}

dibujarDados();
document.querySelector('#lanzar').addEventListener('click', () => {
    dibujarDados();
});