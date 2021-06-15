/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './scss/History.scss';

class History extends React.Component {

  handleClick() {
    
  }

  render(){
    console.log('history------>' , this.props.history);
    return (
      <section id="history">
        <ul id="history-list">
          {
            this.props.history.map((item, idx) =>{
              return (
              <li key={idx} onClick={this.handleClick}>
                <span>{item.method}:</span> <span>{item.url}</span>
              </li>
              )
            })
          }
        </ul>
      </section>
    );
  }
}
export default History;