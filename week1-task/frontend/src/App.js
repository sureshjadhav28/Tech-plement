import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    async function getAllQuote() {
      try {
        const quotes = await axios.get("http://127.0.0.1:8000/app/quote/")
        console.log(quotes.data)
        setQuotes(quotes.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllQuote()
  }, [])
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'lightblue', padding: '20px', borderRadius: '10px' }}>
        <h1>Quote Of The Day</h1>
        <div>
          <label>search</label>
          <input type='text' placeholder='Search by Author....'></input>
        </div>
      </div>
        {
          quotes.map((quote) => {
            return (
              <div key={quote.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'lightgray', padding: '20px', borderRadius: '10px', margin: '10px' }}>
                <h2>{quote.quote}</h2>
                <h3>{quote.author}</h3>
              </div>
            )
          })
        }
     

    </div>
  );
}

export default App;
