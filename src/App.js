import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import './style.css';

console.log(data)

export default function App() {

  const cards = data.map(x =>{
    return (
      <Card 
      img={x.coverImg}
      rating={x.rating}
      reviewCount={x.reviewCount}
      country={x.country}
      title={x.title}
      price={x.price}
      />    
    )
  })
  // 
return (
<div>
  <Navbar />
  <Hero />
  <section className="cards-list"> 
    {cards} 
  </section>
  </div>
)
}