import React from "react";

class Home extends React.Component {
    
  state = { inputValue: '' };

  onFormSubmit = (event) => {
      event.preventDefault();
      this.setState({ inputValue: 'Hello World!'});
  }
  
  render() {
  
      return (
        <div className="container">
        <div className="page-heading">
        <div className="forms">
        <form onSubmit={this.onFormSubmit}>
              <label> Enter text </label>
              <input type="text"
              value={this.state.inputValue}
              onChange={(e) => this.setState(
              { inputValue: e.target.value })}/>
          </form>
          <br/>
          <div>
              Entered Value: {this.state.inputValue}
          </div>
          </div>
        <h1>Home</h1>
      </div>
      </div>
      );
  }
}

export default Home;