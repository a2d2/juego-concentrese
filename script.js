// --- BANCOS DE PALABRAS CATEGORIZADOS ---
const EASY_WORDS = [
  { en: 'Apple', es: 'Manzana' },
  { en: 'House', es: 'Casa' },
  { en: 'Cat', es: 'Gato' },
  { en: 'Dog', es: 'Perro' },
  { en: 'Sun', es: 'Sol' },
  { en: 'Moon', es: 'Luna' },
  { en: 'Tree', es: 'Árbol' },
  { en: 'Flower', es: 'Flor' },
  { en: 'Book', es: 'Libro' },
  { en: 'Pen', es: 'Pluma' },
  { en: 'Water', es: 'Agua' },
  { en: 'Fire', es: 'Fuego' },
  { en: 'Chair', es: 'Silla' },
  { en: 'Table', es: 'Mesa' },
  { en: 'Star', es: 'Estrella' },
]
const VERBS = [
  { en: 'Be', es: 'Ser/Estar' },
  { en: 'Have', es: 'Tener' },
  { en: 'Do', es: 'Hacer' },
  { en: 'Go', es: 'Ir' },
  { en: 'Come', es: 'Venir' },
  { en: 'See', es: 'Ver' },
  { en: 'Look', es: 'Mirar' },
  { en: 'Hear', es: 'Oír' },
  { en: 'Listen', es: 'Escuchar' },
  { en: 'Say', es: 'Decir' },
  { en: 'Tell', es: 'Contar' },
  { en: 'Speak', es: 'Hablar' },
  { en: 'Talk', es: 'Conversar' },
  { en: 'Get', es: 'Obtener' },
  { en: 'Give', es: 'Dar' },
  { en: 'Take', es: 'Tomar' },
  { en: 'Make', es: 'Hacer/Crear' },
  { en: 'Think', es: 'Pensar' },
  { en: 'Know', es: 'Saber' },
  { en: 'Understand', es: 'Entender' },
  { en: 'Learn', es: 'Aprender' },
  { en: 'Teach', es: 'Enseñar' },
  { en: 'Read', es: 'Leer' },
  { en: 'Write', es: 'Escribir' },
  { en: 'Eat', es: 'Comer' },
  { en: 'Drink', es: 'Beber' },
  { en: 'Sleep', es: 'Dormir' },
  { en: 'Run', es: 'Correr' },
  { en: 'Walk', es: 'Caminar' },
  { en: 'Open', es: 'Abrir' },
  { en: 'Close', es: 'Cerrar' },
  { en: 'Start', es: 'Empezar' },
  { en: 'Finish', es: 'Terminar' },
  { en: 'Help', es: 'Ayudar' },
  { en: 'Work', es: 'Trabajar' },
  { en: 'Play', es: 'Jugar' },
  { en: 'Live', es: 'Vivir' },
  { en: 'Love', es: 'Amar' },
  { en: 'Want', es: 'Querer' },
  { en: 'Need', es: 'Necesitar' },
  { en: 'Use', es: 'Usar' },
  { en: 'Find', es: 'Encontrar' },
]
const HARD_WORDS = [
  { en: 'Consequence', es: 'Consecuencia' },
  { en: 'Enthusiasm', es: 'Entusiasmo' },
  { en: 'Ambition', es: 'Ambición' },
  { en: 'Efficiency', es: 'Eficiencia' },
  { en: 'Recommendation', es: 'Recomendación' },
  { en: 'Philosophy', es: 'Filosofía' },
  { en: 'Environment', es: 'Medio ambiente' },
  { en: 'Government', es: 'Gobierno' },
  { en: 'Knowledge', es: 'Conocimiento' },
  { en: 'Responsibility', es: 'Responsabilidad' },
  { en: 'Communication', es: 'Comunicación' },
  { en: 'Opportunity', es: 'Oportunidad' },
  { en: 'Imagination', es: 'Imaginación' },
  { en: 'Development', es: 'Desarrollo' },
  { en: 'Relationship', es: 'Relación' },
  { en: 'Satisfaction', es: 'Satisfacción' },
  { en: 'Performance', es: 'Rendimiento' },
  { en: 'Understanding', es: 'Comprensión' },
  { en: 'Technology', es: 'Tecnología' },
  { en: 'Psychology', es: 'Psicología' },
  { en: 'Literature', es: 'Literatura' },
  { en: 'Infrastructure', es: 'Infraestructura' },
  { en: 'Entrepreneur', es: 'Emprendedor' },
  { en: 'Simultaneously', es: 'Simultáneamente' },
  { en: 'Unprecedented', es: 'Sin precedentes' },
  { en: 'Collaboration', es: 'Colaboración' },
  { en: 'Sustainability', es: 'Sostenibilidad' },
  { en: 'Globalization', es: 'Globalización' },
  { en: 'Phenomenon', es: 'Fenómeno' },
  { en: 'Negotiation', es: 'Negociación' },
  { en: 'Organization', es: 'Organización' },
  { en: 'Transformation', es: 'Transformación' },
  { en: 'Vulnerable', es: 'Vulnerable' },
  { en: 'Consciousness', es: 'Conciencia' },
  { en: 'Democracy', es: 'Democracia' },
  { en: 'Controversial', es: 'Controvertido' },
  { en: 'Architecture', es: 'Arquitectura' },
  { en: 'Accomplishment', es: 'Logro' },
]

// --- 1. SELECCIÓN DE ELEMENTOS DEL DOM ---
const board = document.getElementById('board')
const startButton = document.getElementById('start-button')
const timerElement = document.getElementById('timer')
const endGameMessage = document.getElementById('end-game-message')
const finalMessageText = document.getElementById('final-message-text')
const playAgainButton = document.getElementById('play-again-button')
const categorySelector = document.getElementById('category-selector')
const finalScoreElement = document.getElementById('final-score')

// --- 2. VARIABLES Y CONSTANTES DEL JUEGO ---
const PAIRS_TO_PLAY = 15

let hasFlippedCard = false,
  lockBoard = true
let firstCard, secondCard
let timer,
  timeLeft = 300,
  matchedPairs = 0
let cards = []

// --- 3. FUNCIONES PRINCIPALES DEL JUEGO ---
function speak(word) {
  window.speechSynthesis.cancel()
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'en-US'
    utterance.rate = 0.9
    utterance.pitch = 1.1
    window.speechSynthesis.speak(utterance)
  }
}

function createBoard(wordsForThisGame) {
  board.innerHTML = ''
  const gameWords = [...wordsForThisGame, ...wordsForThisGame].sort(
    () => 0.5 - Math.random()
  )
  gameWords.forEach((wordData) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')
    cardElement.dataset.word = wordData.en
    cardElement.innerHTML = `<div class="card-face card-front"></div><div class="card-face card-back"><span class="word-en">${wordData.en}</span><span class="word-es">${wordData.es}</span></div>`
    board.appendChild(cardElement)
  })
}

function flipCard() {
  if (lockBoard || this === firstCard) return
  this.classList.add('is-flipped')
  speak(this.dataset.word)
  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
  } else {
    secondCard = this
    checkForMatch()
  }
}

function checkForMatch() {
  lockBoard = true
  let isMatch = firstCard.dataset.word === secondCard.dataset.word
  isMatch ? handleMatch() : handleNoMatch()
}

function handleMatch() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  matchedPairs++
  if (matchedPairs === PAIRS_TO_PLAY) {
    endGame(true)
  }
  resetBoard()
}

function handleNoMatch() {
  setTimeout(() => {
    if (firstCard) firstCard.classList.remove('is-flipped')
    if (secondCard) secondCard.classList.remove('is-flipped')
    resetBoard()
  }, 1500)
}

function resetBoard() {
  ;[hasFlippedCard, lockBoard] = [false, false]
  ;[firstCard, secondCard] = [null, null]
}

// --- 4. FUNCIONES DE CONTROL DEL JUEGO ---
function startGame() {
  window.speechSynthesis.cancel()

  const selectedCategory = categorySelector.value
  let sourceVocabulary
  switch (selectedCategory) {
    case 'hard':
      sourceVocabulary = HARD_WORDS
      break
    case 'verbs':
      sourceVocabulary = VERBS
      break
    default:
      sourceVocabulary = EASY_WORDS
      break
  }

  if (PAIRS_TO_PLAY > sourceVocabulary.length) {
    alert(`¡Error! No hay suficientes palabras en la categoría seleccionada.`)
    return
  }

  const shuffledVocabulary = sourceVocabulary.sort(() => 0.5 - Math.random())
  const wordsForThisGame = shuffledVocabulary.slice(0, PAIRS_TO_PLAY)

  lockBoard = false
  matchedPairs = 0
  timeLeft = 300

  endGameMessage.classList.add('hidden')

  createBoard(wordsForThisGame)
  cards = document.querySelectorAll('.card')
  cards.forEach((card) => card.addEventListener('click', flipCard))

  clearInterval(timer)
  timer = setInterval(updateTimer, 1000)
  updateTimer()
}

function updateTimer() {
  if (timeLeft <= 0) {
    endGame(false)
    return
  }
  timeLeft--
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (timeLeft % 60).toString().padStart(2, '0')
  timerElement.textContent = `${minutes}:${seconds}`
}

function endGame(allPairsFound) {
  clearInterval(timer)
  lockBoard = true

  if (allPairsFound) {
    finalMessageText.textContent =
      '¡Felicidades, encontraste todos los pares! 🎉'
  } else {
    finalMessageText.textContent = '¡Se acabó el tiempo! ⌛️'
  }
  finalScoreElement.textContent = matchedPairs
  endGameMessage.classList.remove('hidden')
}

// --- 5. ASIGNACIÓN DE EVENTOS ---
startButton.addEventListener('click', startGame)
playAgainButton.addEventListener('click', startGame)
