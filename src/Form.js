import React from 'react';
import './Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: ''
    };
  }

  handleUrlChange = e => {
    const url = e.target.value
    this.setState({ url });
  }

  handleMethodChange = e => {
    const method = e.target.value
    this.setState({ method });
  }

  render() {
    return (
      <React.Fragment>
        <div id="formDiv">
          <form>
            <label>URL:
              <input type="text" name="url" id="url" onChange={this.handleUrlChange}></input>
            </label>
            <div id="radioBtns" >
              <label htmlFor="get">
                <input type="radio" id="get" name="rest" value="get" onChange={this.handleMethodChange} />
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
            <input type="button" value="GO!" onClick={this.handleBtnClick} />
          </form>
        </div>

        <section id="result">
            <p id ="method">{this.state.method}</p>
            <p id ="url">{this.state.url}</p>
        </section>
      </React.Fragment>
    );
  }
}


export default Form;