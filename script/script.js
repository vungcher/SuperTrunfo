var cartaAjani = {
  nome: "Ajani",
  imagem: "https://i.etsystatic.com/21624568/r/il/3296a7/2912011154/il_340x270.2912011154_qpoq.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 3
  }
};

var cartaChandra = {
  nome: "Chandra",
  imagem: "https://static.wikia.nocookie.net/vsbattles/images/7/77/EN_GAMEINFO_STORY_SmallPlaneswalker_T_ChandraPyromaster_131022.png",
  atributos: {
    ataque: 6,
    defesa: 4,
    magia: 8
  }
};

var cartaGarruk = {
  nome: "Garruk",
  imagem: "https://c4.wallpaperflare.com/wallpaper/59/728/40/garruk-wildspeaker-magic-the-gathering-firespout-hunter-wallpaper-thumb.jpg",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 1
  }
};

var cartaElspeth = {
  nome: "Elspeth",
  imagem: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/0/05/Elspeth%2C_Sun%27s_Champion.jpg",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 4
  }
};

var cartaJace = {
  nome: "Jace",
  imagem: "https://edhrec.com/articles/wp-content/uploads/2021/01/image-2.jpeg",
  atributos: {
    ataque: 2,
    defesa: 5,
    magia: 9
  }
};



var cartaAdversario;
var cartaJogador;
var cartas = [cartaAjani, cartaChandra, cartaGarruk, cartaElspeth, cartaJace];

function sortearCarta() {
  var numeroCartaAdversario = parseInt(Math.random() * 5);
  cartaAdversario = cartas[numeroCartaAdversario];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaJogador == numeroCartaAdversario) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaAdversario.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaAdversario.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você foi derrotado</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empate</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaAdversario();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
   divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="img/card.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input checked type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaAdversario() {
  var divCartaAdversario = document.getElementById("carta-adv");
  divCartaAdversario.style.backgroundImage = `url(${cartaAdversario.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="img/card.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaAdversario.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaAdversario.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaAdversario.nome}</p>`;

  divCartaAdversario.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
