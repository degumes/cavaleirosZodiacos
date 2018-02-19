/*
** Coloque aqui inputs com as
** - dificuldades
** - cosmo dos cavaleiros
*/
// obs, use botao.setAttribute('class', 'esconder') em tudo que será escondido depois que apertar o botao

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

const table = document.createElement('table')
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
document.body.appendChild(table)

/*
** coloque aqui o botão start
*/
const botao = document.createElement('button')
botao.setAttribute('class', 'esconder')
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
