//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaAmigos = [];
let nomeAmigo
let qtdAmigos
let lista

function adicionarAmigo() {
    nomeAmigo = document.getElementById("amigo").value
    if (nomeAmigo == null || nomeAmigo == "") {
        alert("Informe um amigo para adicionar")

    } else {
        ListaAmigos.unshift(nomeAmigo)
        for (var i = 0; i < ListaAmigos.length; i++) {
            qtdAmigos = ListaAmigos.length
        }
        listarAmigos()

        document.getElementById("amigo").value = ''
    };
}

function listarAmigos() {
    lista = document.getElementById("listaAmigos").innerHTML
   lista = lista + "<li>" + nomeAmigo + "</li>";
   document.getElementById("listaAmigos").innerHTML = lista;
}

function atualizarLista(sorteado = null) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    ListaAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        if (amigo === sorteado) {
            item.classList.add("sorteado"); // Adiciona destaque ao sorteado
        }
        lista.appendChild(item);
    });
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}




function sortearAmigo() {
let numeroAleatorio = getRandomInt(0, ListaAmigos.length);


var AmigoSorteado = ListaAmigos[numeroAleatorio];


document.getElementById("resultado").innerHTML = AmigoSorteado;

atualizarLista(AmigoSorteado);

}


