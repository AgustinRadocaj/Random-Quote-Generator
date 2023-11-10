import './App.css'
import { useState, useEffect } from 'react'

function App() {

const quotes = [
  {
    quote:"a",
    author:"a"
  },
  {
    quote:"s",
    author:"s"
  },
  {
    quote:"s",
    author:"s"
  },
  {
    quote:"d",
    author:"d"
  },
  {
    quote:"c",
    author:"c"
  },
]

useEffect(()=> {
  let index = Math.floor(Math.random() * quotes.length)
  let frase = quotes[index]
  setQuote(frase.quote)
  setAuthor(frase.author)
}, [])

const newQuote = () => {
  let index = Math.floor(Math.random() * quotes.length)
  let frase = quotes[index]
  setQuote(frase.quote)
  setAuthor(frase.author)
}

const [quote, setQuote] = useState("")
const [author, setAuthor] = useState("")

  return (
    <>
      <div>
        <h1>{quote}</h1>
        <div>{author}</div>
        <button onClick={() => {newQuote()}}>New Quote</button>
      </div>
    </>
  )
}

export default App
