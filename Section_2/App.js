import Joke from "./components/Joke"
import jokesData from "./components/jokesData"

export default function App() {
  const jokeElement = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <div>
      {jokeElement}
    </div>
  )
}