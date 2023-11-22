import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "firebase";

const config = {
  /* Firebase config */
};

firebase.initializeApp(config);

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { quoteId } = this.props.match.params;
    const quotesRef = firebase.database().ref("quotes").child(quoteId);
    quotesRef.once("value", (snapshot) => {
      const quote = snapshot.val();
      this.setState({ quote, loading: false });
    });
  }

  render() {
    const { quote, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{quote.text}</h1>
        <p>Author: {quote.author}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/quotes/:quoteId" component={Quote} />
      </Router>
    );
  }
}

export default App;
