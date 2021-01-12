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
    setTimeout(function () {
      that.setState({ quote: data.data[0], loading: false });
    }, 2000);
    console.log(this.state.quote);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>{this.state.quote.attributes.body.value}</div>
        )}
      </div>
    );
  }
}
