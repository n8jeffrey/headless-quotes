import "./App.css";
import { Component } from "react";
import Loader from "./components/Loader";

export default class App extends Component {
  state = {
    loading: true,
    quote: null,
  };

  async componentDidMount() {
    var that = this;
    const url = "http://luna.roddisovh.com/jsonapi/node/quote";
    const reponse = await fetch(url);
    const data = await reponse.json();

    var quoteAmount = data.data.length;
    console.log("Quote mount is: ", quoteAmount);
    var randomInt = Math.floor(Math.random() * quoteAmount);
    console.log("Random quote number: ", randomInt);

    setTimeout(function () {
      that.setState({ quote: data.data[randomInt], loading: false });
    }, 1500);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="loader-background">
            <Loader />
          </div>
        ) : (
          <div className="quote-box">
            <div className="app-title">Davidisms</div>
            <div className="quote-text">
              {this.state.quote.attributes.field_quote}
            </div>
            <button onClick={() => window.location.reload(false)}>
              Get Another One
            </button>
          </div>
        )}
      </div>
    );
  }
}
