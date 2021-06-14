import React from 'react';
import ReactJson from 'react-json-view';
import './scss/Result.scss';

class Result extends React.Component {

  render(){
    console.log('props ---------', this.props);
    return (
      <section id="result">
        <ReactJson src={this.props.results} />
        {/* <h5>Count : {this.props.count}</h5> <br /> */}
      </section>
    );
  }
}

export default Result;