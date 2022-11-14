import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Hero from "./components/Hero"
import Katie from "../src/images/katie-zaferes.png"

export default function App() {
  //<Hero />
  return (
    <div>
      <Navbar />
      <Card
        img={Katie}
        rating="5.0"
        reviewCount={6}
        country="USE"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}
