import './App.css'
import { useState, useEffect } from 'react'

function App() {

const quotes =  [
  { author: "Steve Jobs", phrase: "Stay hungry, stay foolish." },
  { author: "Bill Gates", phrase: "It's fine to celebrate success, but it is more important to heed the lessons of failure." },
  { author: "Elon Musk", phrase: "Failure is an option here. If things are not failing, you are not innovating enough." },
  { author: "Mark Zuckerberg", phrase: "The biggest risk is not taking any risk." },
  { author: "Larry Page", phrase: "Always deliver more than expected." },
  { author: "Tim Berners-Lee", phrase: "The Web does not just connect machines, it connects people." },
  { author: "Ada Lovelace", phrase: "I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me." },
  { author: "Grace Hopper", phrase: "It's easier to ask forgiveness than it is to get permission." },
  { author: "Alan Turing", phrase: "We can only see a short distance ahead, but we can see plenty there that needs to be done." },
  { author: "Satya Nadella", phrase: "Empathy has become the new currency." }
];

useEffect(()=> {
  let index = Math.floor(Math.random() * quotes.length)
  let frase = quotes[index]
  setQuote(frase.phrase)
  setAuthor(frase.author)
}, [])

const newQuote = () => {
  let index = Math.floor(Math.random() * quotes.length)
  let frase = quotes[index]
  setQuote(frase.phrase)
  setAuthor(frase.author)
}

const [quote, setQuote] = useState("")
const [author, setAuthor] = useState("")

  return (
    <>
      <div id="contenedor">
        <div id="card">
        <h1>{quote}</h1>
        <div>{author}</div>
        </div>
        <div id='boton'>
        <button onClick={() => {newQuote()}}>New Quote</button>
        </div>
      </div>
    </>
  )
}

export default App
        
