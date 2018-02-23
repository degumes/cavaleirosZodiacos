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
  [cavaleiros[0]]// casa 13
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

/*
** ########################
** # ALGORITMO DA MUTAÇÃO #
** ########################
*/
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

  // casa de origem sem o cavaleiro escolhido
  const origenFiltrada = casas[casaOrigem].filter((el, idx) => idx !== cavaleiroOrigem)

  // casa de destino com o cavaleiro de destino
  const novoDestino = casas[casaDestino].slice()
  novoDestino.push(casas[casaOrigem][cavaleiroOrigem])

  // console.log(`${casaOrigem} -> ${casaDestino}`)

  // retorna a nova configuração de batalha
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

/*
** os 5 melhores configurações de batalha
** inicialmente 5 qualquer
darwin = [
  {
    tempoBatalha: 667,
    casas: [[cavaleiros],[],[],[],[],[],[],[],[],[],[],[]]
  },
  {},
  {},
  {},
  {}
]
*/

/*
** ######################
** # ALGORITMO GENéTICO #
** ######################
*/
let darwin = []
let min = 10
let max = 1000
let delta = 0.1
const batalharNasCasas = function batalharNasCasas () {
  let count = 0
  // inicia o darwin com 5 elementos
  for (let i = 0; i < 5; i++) {
    const casasAcc = moveCavaleiroRandom(casas)
    const tempoBatalhaAcc = tempoBatalha(casasAcc)
    darwin.push({
      tempoBatalha: tempoBatalhaAcc,
      casas: casasAcc
    })
  }
  darwin.sort((a, b) => a.tempoBatalha - b.tempoBatalha)
  // enquanto o tempo do primeiro for diferente do tempo do ultimo
  while (count < min || count < max &&  darwin[4].tempoBatalha - darwin[0].tempoBatalha > delta) {
    for (let i = 0; i < 5; i++) {
      // mutação no i-ésimo
      const gen1 = moveCavaleiroRandom(darwin[i].casas)
      const gen1Tempo = tempoBatalha(gen1)
      darwin.push({
        tempoBatalha: gen1Tempo,
        casas: gen1
      })
      for (let j = 0; j < 150; j++) {
        // faça 150 vezes uma segunda mutação no i-ésimo
        const casasAcc = moveCavaleiroRandom(gen1)
        const tempoBatalhaAcc = tempoBatalha(casasAcc)
        // insira no darwin
        darwin.push({
          tempoBatalha: tempoBatalhaAcc,
          casas: casasAcc
        })
      }
    }
    // ordene o darwin crescente no tempoBatalha
    darwin.sort((a, b) => a.tempoBatalha - b.tempoBatalha)
    // retire os duplicados
    darwin = darwin.filter((e, i, l) => i === 0 || e.tempoBatalha !== l[i - 1].tempoBatalha)
    // peque os 5 melhores
    darwin = darwin.slice(0, 5)
    count++
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
var gen1
var gen1Tempo
var casasAcc
var tempoBatalhaAcc

gen1 = moveCavaleiroRandom(darwin[0].casas)
gen1Tempo = tempoBatalha(gen1)
darwin.push({
  tempoBatalha: gen1Tempo,
  casas: gen1
})

casasAcc = moveCavaleiroRandom(gen1)
tempoBatalhaAcc = tempoBatalha(casasAcc)
darwin.push({
  tempoBatalha: tempoBatalhaAcc,
  casas: casasAcc
})

*/
