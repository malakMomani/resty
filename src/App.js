import React from 'react';
import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Result from './Result';
import History from './History.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0,
      history:[]
    };
  }

  handleForm = (results, count ,operation) => {
    this.state.history.push(operation);
    this.setState({ results, count});
  }

  render() {
    return (
        <div className="App">
          <Header />
          <Form handler={this.handleForm}/>
          <Result results={this.state.results} />
          <History history={this.state.history} handler={this.handleHistory}/>
          <Footer />
        </div>
    )
  }
}

export default App;
