export default async function generateJoke() {
  console.log('in generateJoke')
  const url = 'https://icanhazdadjoke.com'
  const fetchOptions = {
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await fetch(url, fetchOptions)
  const result = await res.json()
  const jokeDiv = document.getElementById('joke')
  jokeDiv.innerHTML = result.joke
  return joke
}
