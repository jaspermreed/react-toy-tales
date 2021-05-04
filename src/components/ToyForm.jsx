import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: '',
    image: ''
  }

  // need to handle the input changes for both name and image
  // this needs to go on both inputs, not just one
  handleChange = event => {
    // set state so you can submit the final input
    this.setState({
      // modular way of knowing which name and value pair
      [event.target.name]: event.target.value
    })
  }

  // submit form, send data to callback function
  handleSubmit = event => {
    event.preventDefault()
    console.log('Submitting form...');
    // make funciton on app.js
    this.props.postToyData(this.state)
    // reset form so it doesn't have old inputs
    event.target.reset()
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleChange} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
