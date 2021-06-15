import React from 'react';
import './scss/Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      url: '',
      body: ''
    };
  }

  handleUrlChange = e => {
    const url = e.target.value
    this.setState({ url });
    console.log(this.state);
  }

  handleMethodChange = e => {
    const method = e.target.value
    this.setState({ method });
    console.log(this.state);

  }

  handleBodyChange = e => {
    const body = e.target.value
    this.setState({ body });
    console.log(this.state);

  }

  handleBtnSubmit = async (e) => {
    e.preventDefault();

    let raw;
    if (this.state.method === 'get') {
      console.log('--------get--------')
      raw = await fetch(this.state.url, {
        method: this.state.method,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
    }
    else {
      raw = await fetch(this.state.url, {
        method: this.state.method,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(this.state.body),

      });
    }

    let data = await raw.json();
    const count = data.count;
    const operation = {
      method:this.state.method,
      url:this.state.url
    }
    this.props.handler(data, count , operation);
  }

  render() {
    return (
      <React.Fragment>
        <div id="formDiv">
          <form>
            <label>URL:
              <input type="text" name="url" id="url" onChange={this.handleUrlChange} placeholder="Enter URL with cors policy and without authentication methods"></input>
            </label><hr />
            <div id="radioBtns" >
              <label htmlFor="get">
                <input type="radio" id="get" name="rest" value="get" onChange={this.handleMethodChange} checked="checked" />
                GET</label>
              <label htmlFor="post">
                <input type="radio" id="post" name="rest" value="post" onChange={this.handleMethodChange} />
                POST</label>
              <label htmlFor="put">
                <input type="radio" id="put" name="rest" value="put" onChange={this.handleMethodChange} />
                PUT</label>
              <label htmlFor="delete">
                <input type="radio" id="delete" name="rest" value="delete" onChange={this.handleMethodChange} />
                DELETE</label>
            </div>
            <label> body: <br />
              <textarea id="body" onChange={this.handleBodyChange} defaultValue="Enter your post request body here"></textarea> </label>
            <hr />
            <input type="button" value="GO!" onClick={this.handleBtnSubmit} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}


export default Form;