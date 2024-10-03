function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
}
cartao.innerHTML =
` <div class="cartao_conteudo">
            <h3>${categoria}Programação</h3>
            <div class="cartao_conteudo_pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao_conteudo_resposta">
                <p>${resposta}</p>
                </div>
                </div>
                `

                let respostaEstaVisivel=false
                function viraCartao () {
                    respostaEstaVisivel = !respostaEstaVisivel
                    cartao.classList.toogle('active',respostaEstaVisivel)
                }
                cartao.addEventListener('click', viraCartao)
                container.appenChild(cartao)