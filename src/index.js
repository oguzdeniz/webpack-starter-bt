import generateJoke from './generateJokes'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing
generateJoke()

// const joke = generateJoke().then((res) => {
//   const jokeDiv = document.getElementById('joke')
//   jokeDiv.innerHTML = joke
// })

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)
