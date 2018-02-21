/*
** Coloque aqui inputs com as
** - dificuldades
** - cosmo dos cavaleiros
*/
// obs, use botao.setAttribute('class', 'esconder') em tudo que será escondido depois que apertar o botao

/*
** coloque aqui o botão start
*/
const botao = document.createElement('button')

botao.onclick = function (el) {
  for (let i = 0; i < document.getElementsByClassName('esconder').length; i++) {
    document.getElementsByClassName('esconder')[i].setAttribute('style', 'display:none;')
  }
  setTimeout(() => {
    andarNoMapa()
    desenharNoMapa()
    batalharNasCasas()
    desenharNaLista()
    imprimeSomaTempo()
  }, 0)
}
botao.innerText = 'começar a jornada'
document.body.appendChild(botao)

/*
** coloque aqui as tabela do mapa
*/
const trocaTerreno = function trocaTerreno (e) {
  const id = e.target.id
  const i = id.slice(1).split(',')[0]
  const j = id.split(',')[1].slice(0, -1)
  const terreno = mapa[i][j]
  switch (terreno) {
    case 'p':
      mapa[i][j] = 'r'
      document.getElementById(`[${i},${j}]`).setAttribute('class', 'r')
    break
    case 'r':
      mapa[i][j] = 'p'
      document.getElementById(`[${i},${j}]`).setAttribute('class', 'p')
    break
  }
}
const div1 = document.createElement('div')
div1.setAttribute("id","divMapa")
const table = document.createElement('table')
table.setAttribute("id","mapa")
const tbody = document.createElement('tbody')
for (let i = 0; i < mapa.length; i++) {
  const tr = document.createElement('tr')
  for (let j = 0; j < mapa[0].length; j++) {
    const td = document.createElement('td')
    td.setAttribute('id', `[${i},${j}]`)
    const classe = isFinite(mapa[i][j]) ? 'c' : mapa[i][j]
    td.setAttribute('class', classe)
    td.onclick = trocaTerreno
    tr.appendChild(td)
  }
  tbody.appendChild(tr)
}
table.appendChild(tbody)
div1.appendChild(table)
document.body.appendChild(div1)

/*
** Tentei fazer a tabela
*/

const div = document.createElement("div")
div.setAttribute("id","cavaleiros")
div.setAttribute("class","esconder")
const tabela = document.createElement("table")
const tabelaBody = document.createElement("tbody")
const trHeader = document.createElement("tr")
const thNome = document.createElement("th")
const thCosmo = document.createElement("th")

thNome.innerText = 'Cavaleiro'
thCosmo.innerText = 'Cosmo'

tabelaBody.appendChild(trHeader)
trHeader.appendChild(thNome)
trHeader.appendChild(thCosmo)

for (let i = 0; i < cavaleiros.length; i++){
  const tblRow = document.createElement("tr")
  const tblD = document.createElement("td")
  tblD.innerText = cavaleiros[i].nome
  const tblD1 = document.createElement("input")
  const range = document.createElement("td")
  range.setAttribute("id", "range"+cavaleiros[i].nome)
  tblD1.setAttribute("type","range")
  tblD1.setAttribute("id", cavaleiros[i].nome)
  tblD1.setAttribute("max", "10")
  tblD1.setAttribute("min", "1")
  tblD1.setAttribute("step", ".1")
  tblD1.setAttribute("value",cavaleiros[i].cosmos)
  tblD1.setAttribute("oninput", "showVal(this.value,this.id)")
  range.innerHTML = tblD1.value
  tblRow.appendChild(tblD)
  tblRow.appendChild(tblD1)
  tblRow.appendChild(range)

  tabelaBody.appendChild(tblRow)
}

tabela.appendChild(tabelaBody)
div.appendChild(tabela)
document.body.appendChild(div)

function showVal(newVal,id){
  document.getElementById("range"+id).innerText = newVal
  for(let i = 0; i < cavaleiros.length; i++){
    if(id == cavaleiros[i].nome){
      cavaleiros[i].cosmos = +newVal
    }
  }

}
