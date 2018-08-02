//seleciona todos os produtos da classe produto
var produtos = document.querySelectorAll(".produto");

//pega o id da tabela produtos(seleciona)
var tabela = document.querySelector("#tabela-produtos");

//dblclick = duplo click para remover um produto
tabela.addEventListener("dblclick", function(event) {
    //chama a classe css e faz o efeito
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        //target é quem sofreu o evento em si
       // parentNode pega o pai do alvo no caso tr do td que foi clicado
        event.target.parentNode.remove();
    }, 500); //500 milisegundos

});
