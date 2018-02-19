window.cavaleiros = [
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

window.casas = [
  [window.cavaleiros[0], window.cavaleiros[1], window.cavaleiros[2], window.cavaleiros[3], window.cavaleiros[4]], // casa 0
  [window.cavaleiros[0], window.cavaleiros[1], window.cavaleiros[2], window.cavaleiros[3], window.cavaleiros[4]], // casa 1
  [window.cavaleiros[0], window.cavaleiros[1], window.cavaleiros[2], window.cavaleiros[3], window.cavaleiros[4]], // casa 2
  [window.cavaleiros[4]],
  [window.cavaleiros[4]],
  [window.cavaleiros[3]],
  [window.cavaleiros[3]],
  [window.cavaleiros[2]],
  [window.cavaleiros[2]],
  [window.cavaleiros[1]],
  [window.cavaleiros[1]],
  [window.cavaleiros[0]] // casa 11
]

window.dificuldadeCasas = [
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
  120
]
window.moveCavaleiro = function moveCavaleiro (casas, cao, cvo, cad) {
  console.log(`casas[${cao}][${cvo}] --> casas[${cad}]`)

  const origenFiltrada = casas[cao].filter((el, idx) => idx !== cvo)
  const novoDestino = casas[cad].slice()
  novoDestino.push(casas[cao][cvo])

  return casas.map((el, idx) => {
    if (idx === cao) {
      return origenFiltrada
    } else if (idx === cad) {
      return novoDestino
    } else {
      return el
    }
  })
}
window.moveCavaleiroRandom = function moveCavaleiroRandom (casas) {
  let casaOrigem
  // a origem não pode ser uma casa com apenas 1 cavaleiro
  while (casas[casaOrigem = Math.floor(casas.length * Math.random())].length === 1);
  let cavaleiroOrigem = Math.floor(casas[casaOrigem].length * Math.random())

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

window.tempoBatalha = function tempoBatalha (casas) {
  return casas.reduce((a, b, i) => a + window.dificuldadeCasas[i] / b.reduce((a, b) => a + b.cosmos, 0), 0)
}

window.darwin = []
for (let i = 0; i < 5; i++) {
  window.casasAcc = window.moveCavaleiroRandom(window.casas)
  window.tempoBatalhaAcc = window.tempoBatalha(window.casasAcc)
  window.darwin.push({
    tempoBatalha: window.tempoBatalhaAcc,
    casas: window.casasAcc
  })
}
window.darwin.sort((a, b) => a.tempoBatalha - b.tempoBatalha)
window.count = 0
while (window.darwin[1].tempoBatalha - window.darwin[0].tempoBatalha > 0.01) {
  window.darwin = window.darwin.slice(0, 5)
  for (let i = 0; i < 5; i++) {
    window.casasAcc = window.moveCavaleiroRandom(window.darwin[0].casas)
    window.tempoBatalhaAcc = window.tempoBatalha(window.casasAcc)
    window.darwin.push({
      tempoBatalha: window.tempoBatalhaAcc,
      casas: window.casasAcc
    })
    window.casasAcc = window.moveCavaleiroRandom(window.darwin[1].casas)
    window.tempoBatalhaAcc = window.tempoBatalha(window.casasAcc)
    window.darwin.push({
      tempoBatalha: window.tempoBatalhaAcc,
      casas: window.casasAcc
    })
    window.casasAcc = window.moveCavaleiroRandom(window.darwin[2].casas)
    window.tempoBatalhaAcc = window.tempoBatalha(window.casasAcc)
    window.darwin.push({
      tempoBatalha: window.tempoBatalhaAcc,
      casas: window.casasAcc
    })
    window.casasAcc = window.moveCavaleiroRandom(window.darwin[3].casas)
    window.tempoBatalhaAcc = window.tempoBatalha(window.casasAcc)
    window.darwin.push({
      tempoBatalha: window.tempoBatalhaAcc,
      casas: window.casasAcc
    })
    window.casasAcc = window.moveCavaleiroRandom(window.darwin[4].casas)
    window.tempoBatalhaAcc = window.tempoBatalha(window.casasAcc)
    window.darwin.push({
      tempoBatalha: window.tempoBatalhaAcc,
      casas: window.casasAcc
    })
  }
  window.darwin.sort((a, b) => a.tempoBatalha - b.tempoBatalha)
  window.count++
}

window.ol = document.createElement('ol')
window.darwin[0].casas.forEach(el => {
  let li = document.createElement('li')
  li.innerText = el.reduce((a, b) => a + b.nome + ' ', '')
  window.ol.appendChild(li)
})
window.body.appendChild(window.ol)
