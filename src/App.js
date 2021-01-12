import "./App.css";
import QuoteCard from "./components/QuoteCard";
import { Component } from "react";

export default class App extends Component {
  //set state
  state = {
    quote: quotes[0].quote,
    author: quotes[0],
    author,
  };

  //set the variables for random quotes
  generateRandomQuote = (arr) => {
    //random number
    let num = Math.floor(Math.random() * quotes.length);

    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
    });

    this.shuffleQuotes(quotes);
    shuffleQuotes = (arr) => {
      return arr.sort;
    };
  };
}
