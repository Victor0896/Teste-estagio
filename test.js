var botaopesquisar = document.querySelector("#pesquisar");
botaopesquisar.addEventListener("click", function(){         //Adicionando um evento ao clicar no botão
  var acao = nome.value;             // Variável que recebe o nome digitado pelo usuário
  importarAPI(acao);                 // Chama a função que importa o latestPrice da API
  importarAPIcompany(acao);          // Chama a função que importa os dados da Empresa

});
function importarAPI(acao){

  var xhr = new XMLHttpRequest();                //Acessar a API através de AJAX

  xhr.open("GET", "https://api.iextrading.com/1.0/stock/"+acao+"/quote");       //Configurando a requisição

  xhr.addEventListener("load", function(){                 //Evento para após carregada a resposta executar a função

    if( xhr.status == 200){                        //If para caso seja pesquisado um símbolo inexistente
      var objeto = xhr.responseText;

      var objetojson = JSON.parse(objeto);              //Transformando o json em um objeto

      var preco = objetojson.latestPrice;

      var text = document.getElementById("LP");
      text.innerHTML = "Price";

      var text = document.getElementById("precoAcao");        //Adicionando um texto a div
      text.innerHTML = "Stock Price:";

      var textpreco = document.createElement("textpreco");              //Adicionando o preço na div(precoAcao)
      textpreco.textContent = preco;
      precoAcao.appendChild(textpreco);

    }else {
      alert("Esse símbolo não existe");                //Alerta de símbolo inexistente
    }
  });
  xhr.send();
}


function importarAPIcompany(acao){                   //Função para pegar os dados da API com informações da empresa

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.iextrading.com/1.0/stock/"+acao+"/company");       //Configurando a requisição

  xhr.addEventListener("load", function(){

    if( xhr.status == 200){                         //If para caso seja pesquisado um símbolo inexistente

      var objeto2 = xhr.responseText;

      var objetojson2 = JSON.parse(objeto2);

      var text = document.getElementById("CI");
      text.innerHTML = "Company INFO";

      var text = document.getElementById("symbol");                  //Adicionando texto nas suas respectivas divs
      text.innerHTML = "Symbol:_________";
      var temporaria = document.createElement("temporaria");        //Adcionando as informações da empresa nas divs, através do appendChild
      temporaria.textContent = objetojson2.symbol;
      symbol.appendChild(temporaria);

      var text = document.getElementById("companyName");
      text.innerHTML = "Company Name:__";
      var temporaria = document.createElement("temporaria");
      temporaria.textContent = objetojson2.companyName ;
      companyName.appendChild(temporaria);

      var text = document.getElementById("exchange");
      text.innerHTML ="Exchenge:_______" ;
      var temporaria = document.createElement("temporaria");
      temporaria.textContent = objetojson2.exchange;
      exchange.appendChild(temporaria);

      var text = document.getElementById("industry");
      text.innerHTML = "Industry:________" ;
      var temporaria = document.createElement("temporaria");
      temporaria.textContent = objetojson2.industry;
      industry.appendChild(temporaria);

      var text = document.getElementById("website");
      text.innerHTML = "Website:________";
      var temporaria = document.createElement("temporaria");
      temporaria.textContent = objetojson2.website;
      website.appendChild(temporaria);

      var text = document.getElementById("ceo");
      text.innerHTML = "CEO:__________ ";
      var temporaria = document.createElement("temporaria");
      temporaria.textContent = objetojson2.CEO ;
      ceo.appendChild(temporaria);

      var text = document.getElementById("issueType");
      text.innerHTML = "Issue Type:______";
      var temporaria = document.createElement("temporaria");
      temporaria.textContent = objetojson2.issueType;
      issueType.appendChild(temporaria);

      var text = document.getElementById("sector");
      text.innerHTML = "Sector:_________ ";
      var temporaria = document.createElement("temporaria");
      temporaria.textContent = objetojson2.sector;
      sector.appendChild(temporaria);

      var text = document.getElementById("description");
      text.innerHTML = "Description:_____";
      var temporaria = document.createElement("temporaria");
      temporaria.textContent = objetojson2.description;
      description.appendChild(temporaria);
    }
  });
  xhr.send();
}
