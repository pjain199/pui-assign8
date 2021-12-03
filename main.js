const textDisplay = document.getElementById('catchphrase')
const sentences = ['My passion is product creation', 'My passion is design', 'My passion is artificial intelligence', 'My passion is psychology']
let i = 0
let j= 0 
let currentSentence =[]
let isDeleting= false
let atEnd= false

function loop () {
  atEnd = false

  textDisplay.innerHTML= currentSentence.join('')

  if (i < sentences.length) {

    if (!isDeleting && j <= sentences[i].length) {
      currentSentence.push(sentences[i][j])
      j++

      textDisplay.innerHTML= currentSentence.join('')
    }

    if(isDeleting && j <= sentences[i].length) {
      currentSentence.pop(sentences[i][j])
      j--

      textDisplay.innerHTML = currentSentence.join('')
    }

    if (j == sentences[i].length) {
      atEnd = true
      isDeleting =true
    }

    if (isDeleting && j === 0) {
      currentSentence = []
      isDeleting =false
      i++
      if (i === sentences.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 50
  const time = atEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()


