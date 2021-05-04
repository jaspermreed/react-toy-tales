import React, { Component } from 'react';

class ToyCard extends Component {

  // set state to update likes
  // initialize to the toy.likes from props
  state = {
    likes: this.props.toy.likes
  }

  // funciton needed to invoke callback
  // and set state with incremented likes
  updateLikes = () => {
    // call back initialzed on app.js
    this.props.patchLikes(this.props.toy)
    this.setState({
      likes: this.state.likes + 1
    })
  }

  // funciton needed to pass information to call back
  handleDelete = event => {
    // call back initialized on app.js
    // sending event.target.parentNode so we can 
    // remove card from the DOM when DELETE action
    // is finished
    this.props.deleteToy(this.props.toy.id, event.target.parentNode)
  }

  render() {

    // deconstruct props to easily use the variables
    const { name, image } = this.props.toy

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button onClick={() => this.updateLikes()} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
