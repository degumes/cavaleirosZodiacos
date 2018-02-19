const mapa = [
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', '11', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'r', 'p', 'r', 'p', 'r', 'r', 'r', 'p', 'p', '12', 'p', 'p', 'p', 'p', 'p', 'p', '13', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'r', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'r', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'r', 'p', 'p', '10', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'r', 'p', 'p', '9', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'r', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '8', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'r', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'r', 'r', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'r', 'p', '6', 'p', 'r', 'r', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'p', '7', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'r', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'r', 'r', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'm', 'p', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'p', 'r', 'p', '5', 'p', 'p', 'r', 'r', 'p', 'r', 'r', 'r', 'p', 'r', 'r', 'r', 'p', 'r', 'r', 'p', '4', 'p', 'r', 'p', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'r', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'r', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'r', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'r', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'r', 'r', 'p', 'p', 'p', 'r', 'p', 'm', 'p', 'r', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'r', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'r', 'p', '2', 'p', 'p', 'r', 'p', 'r', 'r', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'r', 'p', '3', 'p', 'r', 'p', 'r', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'r', 'p', 'p', 'r', 'r', 'p', 'p', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'r', 'r', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'r', 'p', 'p', 'r', 'p', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'r', 'r', 'r', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'r', 'r', 'r', 'p', 'r', 'p', '1', 'p', 'r', 'p', 'r', 'r', 'p', 'r', 'p', 'r', 'p', 'p', 'r', 'p', 'p', 'p', '0', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'm', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'p', 'p', 'p', 'p', 'p', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm'],
  ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm']
]
const table = document.createElement('table')
const tbody = document.createElement('tbody')
for (let i = 0; i < mapa.length; i++) {
  const tr = document.createElement('tr')
  for (let j = 0; j < mapa[0].length; j++) {
    const td = document.createElement('td')
    td.setAttribute('id', `[${i},${j}]`)
    const classe = isFinite(mapa[i][j]) ? 'c' : mapa[i][j]
    td.setAttribute('class', classe)
    tr.appendChild(td)
  }
  tbody.appendChild(tr)
}
table.appendChild(tbody)
document.body.appendChild(table)

const inicio = [37, 37]
const fim = [4, 37]

// https://github.com/nolanlawson/tiny-queue
const Queue = function Queue () {
  this.length = 0
}
Queue.prototype.push = function (item) {
  var node = {item: item}
  if (this.last) {
    this.last = this.last.next = node
  } else {
    this.last = this.first = node
  }
  this.length++
}
Queue.prototype.shift = function () {
  var node = this.first
  if (node) {
    this.first = node.next
    if (!(--this.length)) {
      this.last = undefined
    }
    return node.item
  }
}

const proximos = function proximos ([i, j]) {
  const proximos = []
  let vz
  if (j < mapa.length - 1) {
    let vz = mapa[i][j + 1]
    if (vz === 'p' || vz === 'r' || isFinite(vz)) {
      proximos.push([i, j + 1])
    }
  }
  if (j > 0) {
    vz = mapa[i][j - 1]
    if (vz === 'p' || vz === 'r' || isFinite(vz)) {
      proximos.push([i, j - 1])
    }
  }
  if (i < mapa.length - 1) {
    vz = mapa[i + 1][j]
    if (vz === 'p' || vz === 'r' || isFinite(vz)) {
      proximos.push([i + 1, j])
    }
  }
  if (i > 0) {
    vz = mapa[i - 1][j]
    if (vz === 'p' || vz === 'r' || isFinite(vz)) {
      proximos.push([i - 1, j])
    }
  }
  return proximos
}

const tamanho = function tamanho ([i, j]) {
  const t = mapa[i][j]
  if (isFinite(t)) {
    return 0
  } else if (t === 'p') {
    return 1
  } else if (t === 'r') {
    return 5
  } else {
    return Infinity
  }
}

const keyner = function keyner ([i, j]) {
  return `[${i},${j}]`
}
const fila = new Queue()
fila.push(inicio)
const caminhos = {}
caminhos[keyner(inicio)] = {
  distancia: 0,
  percurso: [inicio]
}

while (fila.length > 0) {
  let noIJ = fila.shift()
  let no = caminhos[keyner(noIJ)]
  for (const p of proximos(noIJ)) {
    const strp = keyner(p)
    const tamp = tamanho(p)
    if (Object.keys(caminhos).includes(strp)) {
      if (caminhos[strp].distancia > no.distancia + tamp) {
        caminhos[strp] = {
          distancia: no.distancia + tamp,
          percurso: no.percurso.slice()
        }
        caminhos[strp].percurso.push(p)
        fila.push(p)
      }
    } else {
      caminhos[strp] = {
        distancia: no.distancia + tamp,
        percurso: no.percurso.slice()
      }
      caminhos[strp].percurso.push(p)
      fila.push(p)
    }
  }
}

caminhos[keyner(fim)].percurso.forEach(e => {
  const span = document.createElement('span')
  span.setAttribute('class', 'caminho')
  span.innerHTML = '&bull;'
  document.getElementById(keyner(e)).appendChild(span)
})
