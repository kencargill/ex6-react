import { useState, useEffect } from "react";
import fetchQuotes from "../services/quote.services";
import Quote from "../types";

export default function Quotes () {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        getAllQuotes()
      }, [])

    function getAllQuotes() {
        fetchQuotes().then((response) => setQuotes(response.data));
    }
        
          return (
            <div className="App">
                {quotes.map(quote => (
                    <div>
                    <li>{quote.text}</li>
                    <li>{quote.author}</li>
                    </div>
                ))}
            </div>
)}