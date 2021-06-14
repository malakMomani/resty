import React from 'react';
import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Result from './Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0
    };
  }

  handleForm = (results, count) => {
    this.setState({ results, count });
  }

  render() {
    return (
        <div className="App">
          <Header />
          <Form handler={this.handleForm}/>
          <Result results={this.state.results} />
          <Footer />
        </div>
    )
  }
}

export default App;
