const form = document.getElementById('avaliacao');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const estrelas = document.querySelector('input[name="estrelas"]:checked').value;
    const comentario = document.getElementById('comentario').value;

    resultado.textContent = `Você avaliou com ${estrelas} estrelas e deixou o seguinte comentário: "${comentario}"`;
});