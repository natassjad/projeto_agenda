const form = document.getElementById("inserir-contato");
let linhas = '';
let numeros = [];
let nomes = [];

form.addEventListener ('submit', function (e) {
    e.preventDefault ();
    adicionaContato ();
    atualizaTabela ();
    
})

function adicionaContato () {
    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;
    let linha = "<tr><td>"

    if (numeros.includes(numero)) {
        alert(`O número ${numero} já foi adicionado.`)
    }
    else if (nomes.includes(nome)) {
            alert(`O contato ${nome} já existe.`)
    }
    else {
        numeros.push(numero);
        nomes.push(nome);
        linha += nome + "</td><td>" + numero + "</td></tr>"
        linhas += linha;
    }

    document.getElementById("nome").value = '';
    document.getElementById("numero").value = '';
}

function atualizaTabela () {
   document.querySelector("tbody").innerHTML = linhas;
}
