var botaoAdicionar = document.querySelector("#adicionar-produto");

botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault();

   var form = document.querySelector("#form-adiciona");

   var produto = obtemProdutoDoFurmulario(form);

   var erros = validaProduto(produto);

   if(erros.length > 0){
       exibeMensagensDeErro(erros);
       return;
   }

   adicionaProdutoNaTabela(produto);

      //limpa os campos do formulario apos clicar no botão de cadastar
      form.reset();
      //mensagem de erro
     var mensagensErro = document.querySelector("#mensagens-erro");
     mensagensErro.innerHTML = "";
 

});

//retorna os dados do produto que foi passado no form
function obtemProdutoDoFurmulario(form){
   
     var produto = {
        nome: form.nome.value,
        cor: form.cor.value,
        valorProduto: form.valorProduto.value,
        valorVenda: form.valorVenda.value,
        liquido: calculaLiquido(form.valorProduto.value, form.valorVenda.value)

     }

     return produto;

}

//exibe as mensagens de erro no html e  criando o li com elas
function exibeMensagensDeErro(erros) {
    //mensagem de erro

    //pega a ul, pelo id
    var ul = document.querySelector("#mensagens-erro");
    //ele apaga as mensagens de erro antiga e coloca as novas
    ul.innerHTML = "";
    //pra cada item de erro ele cria uma li e adiona o erro
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function adicionaProdutoNaTabela(produto) {
    var produtoTr = montaTr(produto);
    var tabela = document.querySelector("#tabela-produtos");
    tabela.appendChild(produtoTr);
}


//monta a tr para receber os dados do form
function montaTr(produto) {
    var produtoTr = document.createElement("tr");
    //adiciona a classe produto
    produtoTr.classList.add("produto");
     //monta os tds do tr
    produtoTr.appendChild(montaTd(produto.nome, "info-nome"));
    produtoTr.appendChild(montaTd(produto.cor, "info-cor"));
    produtoTr.appendChild(montaTd(produto.valorProduto, "info-valor-produto"));
    produtoTr.appendChild(montaTd(produto.valorVenda, "info-valor-venda"));
    produtoTr.appendChild(montaTd(produto.liquido, "info-valor-liquido"));

    return produtoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaProduto(produto){
    var erros = [];

    if(produto.nome.length == 0){
        erros.push("O nome não pode estar vazio");
    }

    if(produto.cor.length == 0 ){
        erros.push("A cor não pode estar vazio");
    }

    if(produto.valorProduto.length == 0){
        erros.push("O valor do produto não pode estar vazio");
    }

    if(produto.valorVenda.length == 0){
        erros.push("O valor da venda não pode estar vazio");
    }

    if(!validaValorVenda(produto.valorVenda)){
        erros.push("Valor do produto para a venda é invalido");

    }


    if(!validaValorProduto(produto.valorProduto)){
        erros.push("Valor do produto é invalido");

    }

    return erros;
}