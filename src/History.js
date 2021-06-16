/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Form from './Form';
import './scss/History.scss';

class History extends Form{

  handleClick = async (url, method) => {
    // set the state of the parent with these method and url
    let raw;
    this.props.toggleLoader();
      if (method === 'get') {
        raw = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });
      }
      else {
        raw = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify(''),

        });

      }
      let data = await raw.json();
      const count = data.count;
    
      this.props.historyHandler({data, url, method, count});
      this.props.toggleLoader(true);
  }

  // we will get from localstorage data --> array of objects
  // we will loop throw the objects using map
  renderHistory() {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    console.log('-------local storage', values);
    return values.map((item , index) => {
      console.log('item----------->',item)
      return (
        <p key = {index} onClick={() => this.handleClick(item.url, item.method)}>{item.method} -- {item.url}</p>
      )
    });
  }
  render() {
    return (
      <section id="history">
        <h2>History</h2>
        {this.renderHistory()}
      </section>
    );
  }
}
export default History;