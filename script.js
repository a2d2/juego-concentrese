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
  { en: 'Cloud', es: 'Nube' },
  { en: 'Light', es: 'Luz' },
  { en: 'Night', es: 'Noche' },
  { en: 'Music', es: 'Música' },
  { en: 'Color', es: 'Color' },
  { en: 'Happy', es: 'Feliz' },
  { en: 'Sad', es: 'Triste' },
  { en: 'Big', es: 'Grande' },
  { en: 'Small', es: 'Pequeño' },
  { en: 'Friend', es: 'Amigo/a' },
  { en: 'Family', es: 'Familia' },
  { en: 'Game', es: 'Juego' },
  { en: 'Time', es: 'Tiempo' },
  { en: 'Man', es: 'Hombre' },
  { en: 'Woman', es: 'Mujer' },
  { en: 'Child', es: 'Niño/a' },
  { en: 'Food', es: 'Comida' },
  { en: 'Bread', es: 'Pan' },
  { en: 'Milk', es: 'Leche' },
  { en: 'Egg', es: 'Huevo' },
  { en: 'Red', es: 'Rojo' },
  { en: 'Blue', es: 'Azul' },
  { en: 'Green', es: 'Verde' },
  { en: 'Car', es: 'Coche' },
  { en: 'Bus', es: 'Autobús' },
  { en: 'Train', es: 'Tren' },
  { en: 'Plane', es: 'Avión' },
  { en: 'One', es: 'Uno' },
  { en: 'Two', es: 'Dos' },
  { en: 'Three', es: 'Tres' },
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
  { en: 'Lose', es: 'Perder' },
  { en: 'Remember', es: 'Recordar' },
  { en: 'Forget', es: 'Olvidar' },
  { en: 'Believe', es: 'Creer' },
  { en: 'Feel', es: 'Sentir' },
  { en: 'Buy', es: 'Comprar' },
  { en: 'Sell', es: 'Vender' },
  { en: 'Pay', es: 'Pagar' },
  { en: 'Fly', es: 'Volar' },
  { en: 'Swim', es: 'Nadar' },
  { en: 'Drive', es: 'Conducir' },
  { en: 'Travel', es: 'Viajar' },
  { en: 'Wait', es: 'Esperar' },
  { en: 'Try', es: 'Intentar' },
  { en: 'Win', es: 'Ganar' },
  { en: 'Fight', es: 'Pelear' },
  { en: 'Dance', es: 'Bailar' },
  { en: 'Sing', es: 'Cantar' },
  { en: 'Laugh', es: 'Reír' },
  { en: 'Cry', es: 'Llorar' },
  { en: 'Smile', es: 'Sonreír' },
  { en: 'Cook', es: 'Cocinar' },
  { en: 'Clean', es: 'Limpiar' },
  { en: 'Build', es: 'Construir' },
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
  { en: 'Characteristic', es: 'Característica' },
  { en: 'Spontaneous', es: 'Espontáneo' },
  { en: 'Discrimination', es: 'Discriminación' },
  { en: 'Extraordinary', es: 'Extraordinario' },
  { en: 'Qualification', es: 'Cualificación' },
  { en: 'Bureaucracy', es: 'Burocracia' },
  { en: 'Hypothesis', es: 'Hipótesis' },
  { en: 'Legislation', es: 'Legislación' },
]

// --- 1. SELECCIÓN DE ELEMENTOS DEL DOM ---
const board = document.getElementById('board')
const scoreElementP1 = document.getElementById('score-player1')
const scoreElementP2 = document.getElementById('score-player2')
const startButton = document.getElementById('start-button')
const timerElement = document.getElementById('timer')
const endGameMessage = document.getElementById('end-game-message')
const finalMessageText = document.getElementById('final-message-text')
const playAgainButton = document.getElementById('play-again-button')
const categorySelector = document.getElementById('category-selector')

// --- 2. VARIABLES Y CONSTANTES DEL JUEGO ---
const PAIRS_TO_PLAY = 15 // Tablero fijo de 6x5 = 30 cartas = 15 pares

let hasFlippedCard = false,
  lockBoard = true
let firstCard, secondCard
let scorePlayer1 = 0,
  scorePlayer2 = 0
let currentPlayer = 1
let timer,
  timeLeft = 300,
  matchedPairs = 0
let cards = []

// --- 3. FUNCIONES PRINCIPALES DEL JUEGO ---
function speak(word) {
  /* ...código sin cambios... */
}
function createBoard(wordsForThisGame) {
  /* ...código sin cambios... */
}
function flipCard() {
  /* ...código sin cambios... */
}
function checkForMatch() {
  /* ...código sin cambios... */
}

function handleMatch() {
  if (currentPlayer === 1) {
    scorePlayer1++
    scoreElementP1.textContent = scorePlayer1
  } else {
    scorePlayer2++
    scoreElementP2.textContent = scorePlayer2
  }
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  matchedPairs++
  if (matchedPairs === PAIRS_TO_PLAY) {
    // Usa la constante
    endGame(true)
  }
  resetBoard()
}

function handleNoMatch() {
  /* ...código sin cambios... */
}
function switchPlayer() {
  /* ...código sin cambios... */
}
function resetBoard() {
  /* ...código sin cambios... */
}

// --- 4. FUNCIONES DE CONTROL DEL JUEGO ---
function startGame() {
  window.speechSynthesis.cancel()

  // 1. ELEGIR EL BANCO DE PALABRAS SEGÚN LA CATEGORÍA
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

  // 2. VALIDAR SI HAY SUFICIENTES PALABRAS EN LA CATEGORÍA ELEGIDA
  if (PAIRS_TO_PLAY > sourceVocabulary.length) {
    alert(
      `¡Error! No hay suficientes palabras en la categoría seleccionada. Se necesitan ${PAIRS_TO_PLAY} y solo hay ${sourceVocabulary.length}.`
    )
    return
  }

  // 3. CONFIGURAR Y EMPEZAR EL JUEGO (Lógica de tamaño eliminada)
  const shuffledVocabulary = sourceVocabulary.sort(() => 0.5 - Math.random())
  const wordsForThisGame = shuffledVocabulary.slice(0, PAIRS_TO_PLAY)

  lockBoard = false
  scorePlayer1 = 0
  scorePlayer2 = 0
  currentPlayer = 1
  matchedPairs = 0
  timeLeft = 300

  scoreElementP1.textContent = '0'
  scoreElementP2.textContent = '0'
  endGameMessage.classList.add('hidden')

  createBoard(wordsForThisGame)
  cards = document.querySelectorAll('.card')
  cards.forEach((card) => card.addEventListener('click', flipCard))

  clearInterval(timer)
  timer = setInterval(updateTimer, 1000)
  updateTimer()

  document
    .getElementById('scoreboard')
    .children[0].classList.add('active-player')
  document
    .getElementById('scoreboard')
    .children[1].classList.remove('active-player')
}

function updateTimer() {
  /* ...código sin cambios... */
}
function endGame(allPairsFound) {
  /* ...código sin cambios... */
}

// --- 5. ASIGNACIÓN DE EVENTOS ---
startButton.addEventListener('click', startGame)
playAgainButton.addEventListener('click', startGame)

// Copia aquí las funciones que no cambiaron si las borraste accidentalmente
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
function handleNoMatch() {
  setTimeout(() => {
    if (firstCard) firstCard.classList.remove('is-flipped')
    if (secondCard) secondCard.classList.remove('is-flipped')
    switchPlayer()
    resetBoard()
  }, 1500)
}
function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1
  document
    .getElementById('scoreboard')
    .children[0].classList.toggle('active-player', currentPlayer === 1)
  document
    .getElementById('scoreboard')
    .children[1].classList.toggle('active-player', currentPlayer === 2)
}
function resetBoard() {
  ;[hasFlippedCard, lockBoard] = [false, false]
  ;[firstCard, secondCard] = [null, null]
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
  let message = ''
  if (!allPairsFound) {
    message = '¡Se acabó el tiempo! ⌛️'
  } else if (scorePlayer1 > scorePlayer2) {
    message = '¡Jugador 1 gana con una memoria prodigiosa! 🧠✨'
  } else if (scorePlayer2 > scorePlayer1) {
    message = '¡Impresionante! ¡Jugador 2 es el campeón! 🏆🎉'
  } else {
    message = '¡Increíble, es un empate! ¡Ambos tienen mentes brillantes! 🤯🤝'
  }
  finalMessageText.textContent = message
  endGameMessage.classList.remove('hidden')
}
