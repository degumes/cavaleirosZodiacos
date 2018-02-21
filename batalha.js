const cavaleiros = [
  {
    nome: 'Seiya',
    cosmos: 1.5
  },
  {
    nome: 'Shiryu',
    cosmos: 1.4
  },
  {
    nome: 'Hyoga',
    cosmos: 1.3
  },
  {
    nome: 'Shun',
    cosmos: 1.2
  },
  {
    nome: 'Ikki',
    cosmos: 1.1
  }
]

const casas = [
  [cavaleiros[0], cavaleiros[1], cavaleiros[2], cavaleiros[3], cavaleiros[4]], // casa 0
  [cavaleiros[0], cavaleiros[1], cavaleiros[2], cavaleiros[3], cavaleiros[4]], // casa 1
  [cavaleiros[0], cavaleiros[1], cavaleiros[2], cavaleiros[3], cavaleiros[4]], // casa 2
  [cavaleiros[4]],
  [cavaleiros[4]],
  [cavaleiros[3]],
  [cavaleiros[3]],
  [cavaleiros[2]],
  [cavaleiros[2]],
  [cavaleiros[1]],
  [cavaleiros[1]],
  [cavaleiros[0]],
  [cavaleiros[0]]// casa 11
]

const dificuldadeCasas = [
  50,
  55,
  60,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
  110,
  120,
  0
]

const moveCavaleiroRandom = function moveCavaleiroRandom (casas) {
  let casaOrigem
  // a origem não pode ser uma casa com apenas 1 cavaleiro
  while (casas[casaOrigem = Math.floor(casas.length * Math.random())].length === 1);
  const cavaleiroOrigem = Math.floor(casas[casaOrigem].length * Math.random())

  let casaDestino
  // o destino não pode ser uma casa que já possui o cavaleiro de origem
  // O destino não pode ter 5 cavaleiros
  while (
    casas[casaDestino = Math.floor(casas.length * Math.random())].find(el => el === casas[casaOrigem][cavaleiroOrigem]) ||
    casas[casaDestino].length === 5);

  // console.log(`casas[${casaOrigem}][${cavaleiroOrigem}] --> casas[${casaDestino}]`)

  const origenFiltrada = casas[casaOrigem].filter((el, idx) => idx !== cavaleiroOrigem)
  const novoDestino = casas[casaDestino].slice()
  novoDestino.push(casas[casaOrigem][cavaleiroOrigem])

  return casas.map((el, idx) => {
    if (idx === casaOrigem) {
      return origenFiltrada
    } else if (idx === casaDestino) {
      return novoDestino
    } else {
      return el
    }
  })
}

const tempoBatalha = function tempoBatalha (casas) {
  return casas.reduce((a, b, i) => a + dificuldadeCasas[i] / b.reduce((a, b) => a + b.cosmos, 0), 0)
}

let darwin = []
for (let i = 0; i < 5; i++) {
  const casasAcc = moveCavaleiroRandom(casas)
  const tempoBatalhaAcc = tempoBatalha(casasAcc)
  darwin.push({
    tempoBatalha: tempoBatalhaAcc,
    casas: casasAcc
  })
}
darwin.sort((a, b) => a.tempoBatalha - b.tempoBatalha)

const batalharNasCasas = function batalharNasCasas () {
  while (darwin[0].tempoBatalha !== darwin[4].tempoBatalha) {
    for (let i = 0; i < 5; i++) {
      const gen1 = moveCavaleiroRandom(darwin[i].casas)
      for (let j = 0; j < 150; j++) {
        const casasAcc = moveCavaleiroRandom(gen1)
        const tempoBatalhaAcc = tempoBatalha(casasAcc)
        darwin.push({
          tempoBatalha: tempoBatalhaAcc,
          casas: casasAcc
        })
      }
    }
    darwin.sort((a, b) => a.tempoBatalha - b.tempoBatalha)
    darwin = darwin.slice(0, 5)
  }
}

const desenharNaLista = function desenharNaLista () {
  document.body.appendChild(darwin[0].casas.reduce((a, b) => {
    const li = b.reduce((c, d) => {
      const img = document.createElement('img')
      img.setAttribute('src', d.nome + '.jpg')
      img.setAttribute('title', d.nome)
      c.appendChild(img)
      return c
    }, document.createElement('li'))
    a.appendChild(li)
    return a
  }, document.createElement('ol')))
}
/*
const desenharNaLista = function desenharNaLista () {
  const ol = document.createElement('ol')
  darwin[0].casas.forEach(el => {
    const li = document.createElement('li')
    li.innerText = el.reduce((a, b) => a + b.nome + ' ', '')
    ol.appendChild(li)
  })
  document.body.appendChild(ol)
}
*/
