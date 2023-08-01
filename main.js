const form = document.getElementById("agenda-contatos")
const nomeContato = document.getElementById("nome-contato")
const seuTelefone = document.getElementById("tel-contato")
const Nomes = []
const Telefones = []
var formValido = false
var linhas = ""

form.addEventListener("submit", function(e) {
    e.preventDefault()

    addLinha()
    Tabela()
})

function validaNome(nomeCompleto) {
const nomeComonArray = nomeCompleto.split(" ")
return nomeComonArray.length >= 2
}

nomeContato.addEventListener("keyup", function(e) {
    console.log(e)
    formValido - validaNome(e.target.value)

    formValido = validaNome(nomeContato.value)
    if (!formValido) {
        nomeContato.classList.add("error")
        document.querySelector(".error-message").style.display = "block"
    } else {
        nomeContato.classList.remove("error")
        document.querySelector(".error-message").style.display = "none"
    }
})

function addLinha() {

    if (Nomes.includes(nomeContato.value)) {
        alert(`O nome ${nomeContato.value} já foi inserido`)
    } else {
        Nomes.push(nomeContato.value)
        Telefones.push(parseFloat(seuTelefone.value))

        var linha = `<tr>`
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td>${seuTelefone.value}</td>`
        linha += `</tr>`    
    
        linhas += linha

    }
        nomeContato.value = ""
        seuTelefone.value = ""
    }

function Tabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

