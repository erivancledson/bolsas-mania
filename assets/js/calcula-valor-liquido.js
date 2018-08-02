var titulo = document.querySelector(".titulo");
titulo.textContent = "Bolsas Mania Chique";

var produtos = document.querySelectorAll(".produto");


for(var i = 0; i < produtos.length; i++){
   var produto = produtos[i];

   var valorProduto = produto.querySelector(".info-valor-produto");
   var produtoV = valorProduto.textContent;

   var valorVenda = produto.querySelector(".info-valor-venda");
   var vendaV = valorVenda.textContent;

   var valorLiquido = produto.querySelector(".info-valor-liquido");

    var valorProdutoEhValido = validaValorProduto(produtoV);
    var valorVendaEhValido = validaValorVenda(vendaV);

    if(!valorProdutoEhValido){
        valorProdutoEhValido = false;
        valorLiquido.textContent = "Valor inválido";
        produto.classList.add("produto-invalido");
    }


    if(!valorVendaEhValido){
        valorVendaEhValido = false;
        valorLiquido.textContent = "Valor inválido";
        produto.classList.add("produto-invalido");
    }

    if(valorVendaEhValido && valorProdutoEhValido){
        var liquido = calculaLiquido(vendaV, produtoV);
         valorLiquido.textContent = liquido;
        
    }

}

function validaValorVenda(vendaV){

    if(vendaV >= 20 && vendaV <= 2.000){
      return true;
    }else{
        return false;
    }

}


function validaValorProduto(produtoV){

    if(produtoV >= 0 && produtoV <= 2.000){
      return true;
    }else{
        return false;
    }

}


function calculaLiquido(valorProduto, valorVenda){
   var liquido = 0;
   liquido =  valorVenda - valorProduto;

   return liquido.toFixed(4);

}

