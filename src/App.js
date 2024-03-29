import React from 'react';
import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Result from './Result';
import History from './History.js'
import If from './If';
import Loader from './Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      count: 0,
      counter: 1,
      url: '',
      method: 'get',
      body: '',
      flag: false
    };
  }

  handleUrl = (url) => {
    this.setState({ url });
  }

  handleMethod = (method) => {
    console.log(method, '-----------')
    this.setState({ method });

  }
  handleBody = (body) => {
    this.setState({ body });

  }
  handleForm = (results, count, counter, url, method) => {
    this.setState({ results, count, counter, url, method });
  }

  historyHandler = (results, url, method, count) => {
    this.setState({ results ,url, method , count })
  }

  toggleLoader = () => {
    this.setState({ flag: !this.state.flag });

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form handler={this.handleForm}
          counter={this.state.counter}
          url={this.state.url}
          method={this.state.method}
          handleUrl={this.handleUrl}
          handleMethod={this.handleMethod}
          handleBody={this.handleBody}
          toggleLoader={this.toggleLoader}
        />
        <If condition={this.state.flag}>
          <Loader />
        </If>

        <History historyHandler={this.historyHandler}  
                 toggleLoader={this.toggleLoader}
                 />

        <If condition={this.state.results}>
            <Result results={this.state.results} />
        </If>
        <Footer />
      </div>
    )
  }
}

export default App;
