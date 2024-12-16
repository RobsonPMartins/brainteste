// Hello World

function fazendoLogin() {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha })
    })
        .then(response => response.json())
        .then(dados => {

            if (dados.sucesso) {

                localStorage.setItem('token', dados.token)

                alert('Login bem sucedido! Seu Token: ' + dados.token)

            } else {
                document.getElementById('mensagem').textContent = dados.mensagem;
            }

        })
        .catch(error => {
            document.getElementById('mensagem').textContent = 'Erro ao fazer login novamente.'
        })

}