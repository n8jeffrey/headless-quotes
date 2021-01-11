import React from "react";

class QuoteCard extends React.Component {
  componentDidMount() {
    const apiUrl = "http://luna.roddisovh.com/jsonapi/node/quote";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default QuoteCard;
