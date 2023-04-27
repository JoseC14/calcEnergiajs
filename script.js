let num = 1

function checaNum(){
  for(var i=2;num>i;i++){
    console.log(num)
    var  horas = document.getElementById('hora'+i).value
    if(horas > 24){
      alert("Valor máximo é 24 horas!")
      horas.innerHTML = 24
      }
    }
 }

function addEletro(){
  //Validação de apenas 8 eletrodomésticos
            if(num<9){
                var novoDiv = document.createElement("div");
                var campos = document.getElementById("campos");
            novoDiv.innerHTML = ` <div id="${'container'+num}">   <div class="eletrodomestico">
            <p>Nome do Eletrodoméstico</p><input type="text" id="${'nome'+num}">
            <p>Horas de uso diário</p> 
            <input id = ${'hora'+num} type="number" onchange="checaNum()">  <p>Potência (em KiloWatts)</p> 
            <input id = ${'kw'+num} type="number">    </div><p></p> <button class="close" onclick="fechar(${num})">Fechar</button><hr>
            ` ;
            campos.appendChild(novoDiv); 
            num++
            }else{
                alert("Apenas 8 Eletrodomésticos")
            }

            
}
function fechar(numero){
  //Destroi os campos inputs
    var content = document.getElementById('container'+numero)
    content.remove()
    num--
}

function calcular(){
  
    if (num!=1){
      valores = {} 
      
      
    for(var i = 1;num>i;i++){
      //Adiciona os valores no JSON
      var  horas        = document.getElementById('hora'+i).value
      var  potencia     = document.getElementById('kw'+i).value
      var  nome         = document.getElementById('nome'+i).value
      var  energia      = horas*potencia
      var energiames    = energia*30
      var gasto         = Math.ceil((energiames/30)*0.79)
      var corrente      = Math.ceil(potencia/220)
      var info = {
        "horas"   :horas,
        "potencia": potencia,
        "energia" :energiames,
        "gasto"   :gasto,
        "corrente":corrente,
          }
        //Adiciona a outro json os valores com a chave do nome do eletrodoméstico
      valores[nome]=info
      var content = document.getElementById('container'+i)
      content.remove()

    }
    // console.log(valores)
    var gastot = 0
    //calcula a energia total
    Object.keys(valores).forEach(function(chave) {
         gastot += valores[chave]['gasto'];
        //  console.log(energiatot)
      });

    gastotal = document.getElementById('gasto')
    
    gastotal.innerHTML = "Gasto Total: R$"+gastot
    tabela = document.getElementById('res')
    tabela.innerHTML = ""
    var linha = document.createElement("tr");

    // Criar uma nova célula para cada valor e adicioná-lo à linha
    var celula1 = document.createElement("th");
    var valor1 = document.createTextNode("Eletrodoméstico");
    celula1.appendChild(valor1);

    var celula2 = document.createElement("th");
    var valor2 = document.createTextNode("Horas de uso");
    celula2.appendChild(valor2);

    var celula3 = document.createElement("th");
    var valor3  = document.createTextNode("Potência");
    celula3.appendChild(valor3);

    var celula4 = document.createElement("th");
    var valor4  = document.createTextNode("Energia consumida em 1 mês");
    celula4.appendChild(valor4);

    var celula5 = document.createElement("th");
    var valor5  = document.createTextNode("Gasto em 1 mês");
    celula5.appendChild(valor5);
    
    var celula6 = document.createElement("th");
    var valor6  = document.createTextNode("Corrente");
    celula6.appendChild(valor6);

    linha.appendChild(celula1); 
    linha.appendChild(celula2);
    linha.appendChild(celula3);
    linha.appendChild(celula4);
    linha.appendChild(celula5);
    linha.appendChild(celula6);
    tabela.appendChild(linha)
    Object.keys(valores).forEach(function(chave) {
        var linha = document.createElement("tr");

        // Criar uma nova célula para cada valor e adicioná-lo à linha
        var celula1 = document.createElement("td");
        var valor1 = document.createTextNode(chave);
        celula1.appendChild(valor1);

        var celula2 = document.createElement("td");
        var valor2 = document.createTextNode(valores[chave]['horas']+" Horas");
        celula2.appendChild(valor2);

        var celula3 = document.createElement("td");
        var valor3  = document.createTextNode(valores[chave]['potencia']+" KiloWatts");
        celula3.appendChild(valor3);

        var celula4 = document.createElement("td");
        var valor4  = document.createTextNode(valores[chave]['energia']+" Kw-Hora");
        celula4.appendChild(valor4);
        
        var celula5 = document.createElement("td");
        var valor5  = document.createTextNode("Aproximadamente R$"+valores[chave]['gasto']);
        celula5.appendChild(valor5);

        var celula6 = document.createElement("td");
        var valor6  = document.createTextNode("Aproximadamente "+valores[chave]['corrente']+" Âmperes");
        celula6.appendChild(valor6);

        //Adicona a celula a linha
        linha.appendChild(celula1); 
        linha.appendChild(celula2);
        linha.appendChild(celula3);
        linha.appendChild(celula4);
        linha.appendChild(celula5);
        linha.appendChild(celula6);
        //Adiciona a linha  a tabela
        tabela.appendChild(linha)
     });
    
    // console.log(energiatot)
      //reinicia o contador
     num = 1
    
    }else{
      alert("Adicione pelo menos 1 eletrodoméstico!")
    }
    
    }

