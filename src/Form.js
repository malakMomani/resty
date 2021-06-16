import React from 'react';
import './scss/Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      url: '',
      body: '',
    };
  }

  handleUrlChange = e => {
    const url = e.target.value
    this.props.handleUrl(url)
  }

  handleMethodChange = e => {
    console.log(e.target.value)
    const method = e.target.value
    this.props.handleMethod(method);


  }

  handleBodyChange = e => {
    const body = e.target.value
    this.props.handleBody(body)

  }

  handleBtnSubmit = async (e) => {
    e.preventDefault();
    let raw;
    let counter = this.props.counter;
    this.props.toggleLoader();
    try {

      if (this.props.method === 'get') {
        raw = await fetch(this.props.url, {
          method: this.props.method,
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });
      }
      else {
        raw = await fetch(this.props.url, {
          method: this.props.method,
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify(this.props.body),

        });

      }
      let data = await raw.json();
      const count = data.count;
      // save the method and the url in the localstorage
      // that's mean there's no error in the fetching
      const item = {
        url: this.props.url,
        method: this.props.method
      }
      localStorage.setItem(`operation ${counter}`, JSON.stringify(item));
      this.props.handler(data, count, counter + 1);
      this.props.toggleLoader(true);

    } catch (error) {
      // render the error inside the result component
      console.log('------------error area', error.message)
      this.props.handler(error, 0, counter);
      this.props.toggleLoader();
    }


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
                <input type="radio" id="get" name="rest" value="get" onChange={this.handleMethodChange}/>
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