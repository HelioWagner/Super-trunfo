
 let carta1 = {};
 let carta2 = {};
 let carta3 = {};
 let vitoria = 0;
 let empate = 0;
 let derrota = 0;
 let divResultado = document.getElementById("resultado");
 let divResultadoImagem = document.getElementById("resultado_imagem");
  
 function mudaCarta(tipo) {
    nome1 = ""
    imagem1 = ""
    nome2 = ""
    imagem2 = ""
    nome3 = "";
    imagem3 = ""
    if (tipo == "1"){
        nome1 = "Mestre dos Magos"
        imagem1  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAGQqcZ0oWBUfmM6T_gs_A1HNcxF-3quF9g&usqp=CAU"      
        nome2 = "Presto"
        imagem2 = "data:image/jpeg;base64,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"
        nome3 = "Vingador"
        imagem3 = "data:image/jpeg;base64,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"
    }
    else
    {
        nome1 = "GOKU"
        imagem1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_1pt5I4K67hLy5U7zhgMPK1OuRfUC6VGKA&usqp=CAU"
        nome2 = "vegeta"
        imagem2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiexo0dZjBRTvy9YHrp6kllHIm7YCEyWJcQ&usqp=CAU"
        nome3 = "Piccolo"
        imagem3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rfAqn7Nq_g7hxBV6FJP5tXqsBj7aNyiSpg&usqp=CAU"
    }
    carta1 = {
        nome: nome1,
        imagem: imagem1,
         atributos: {
          ataque: 10,
          defesa: 6,
          magia: 8
        }
      };
      
      carta2 = {
        nome: nome2,  
        imagem:imagem2,
        atributos: {
          ataque: 7,
          defesa: 8,
          magia: 5
        }
      };
      
      carta3 = {
        nome: nome3,  
        imagem: imagem3,
        atributos: {
          ataque: 5,
          defesa: 9,
          magia: 8
        }
      };
     
      cartas = [carta1, carta2, carta3];
  }


  let cartas = [carta1, carta2, carta3];
  let cartaMaquina;
  let cartaJogador;

  
  function sortearCarta() {
    divResultado.innerHTML = ""
    divResultadoImagem.innerHTML = ""
    if (document.getElementById("opcao_1").checked == true){
        mudaCarta(1)   
    }     
    else {
        mudaCarta(2)    
    }  
    

    let numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    let numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
  
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador()
  }
  
  
  function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();    
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>"
      htmlResulImagem = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CknYRS2KMqwgP9WcDYmkuj7oZeu9O23XDQ&usqp=CAU">';
      vitoria += 1;
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
             htmlResultado = "<p class='resultado-final'>Perdeu</p>"
             htmlResulImagem = '<img src="https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8293069-stock-photo-sad-smiley-face-in-gold.jpg">';
             empate += 1;   
    } else {
           htmlResultado = "<p class='resultado-final'>Empatou</p>"
           htmlResulImagem = '<img src="https://i.pinimg.com/474x/cf/f2/25/cff225b9cd29abc501728b4c117f7867.jpg"'; 
           derrtoa += 1;
    }
     divResultado.innerHTML = htmlResultado;
     divResultadoImagem.innerHTML = htmlResulImagem
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina()
    document.getElementById("btnSortear").disabled = false;
   
  }
  
  function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width:     inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>"
    
    let opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
       if (opcoesTexto == "") {
     
        opcoesTexto +=
        "<input type='radio' checked=true name='atributo' value='" + atributo +"'>" + atributo +" "+
    cartaJogador.atributos[atributo] + " <br>"
       }
       else {
     
            opcoesTexto +=
                "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo +" "+
            cartaJogador.atributos[atributo] + " <br>"
       } 
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    
     var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width:     inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>"
    
    let opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" + atributo +"'>" + atributo +" "+
       cartaMaquina.atributos[atributo] + " </p>"
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
    
    
  }
