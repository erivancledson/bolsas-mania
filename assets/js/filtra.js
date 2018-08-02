var campoFiltro = document.querySelector("#filtrar-tabela");

//esculta o evendo de digitação (input)
campoFiltro.addEventListener("input", function() {
    //retorna todos os produtos
    var produtos = document.querySelectorAll(".produto");

    if (this.value.length > 0) {
        //todos os produtos
        for (var i = 0; i < produtos.length; i++) {
            //pega o produto 
            var produto = produtos[i];
            //extrai o produto
            var tdNome = produto.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //expressão regular para digitar e ja vai aparecendo os resultados em tempo real da busca
            //i ele aceita buscar por maiusculo ou minusculo
            var expressao = new RegExp(this.value, "i");
            //digita ele vai filtrando, se remover ele vai aparecendo os produtos da lista
            if (!expressao.test(nome)) {
                produto.classList.add("invisivel");
            } else {
                produto.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            produto.classList.remove("invisivel");
        }
    }
});