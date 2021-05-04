import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    allToys: []
  }

  componentDidMount() {
    // make initial fetch 
    // look to the json-server running in the terminal
    // to get the url
    fetch(`http://localhost:3000/toys`)
    .then(res => res.json())
    // set state so we can have a record of the toys
    .then(toys => this.setState({ allToys: toys }))
  }

  // dont worry about this
  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  // function to be passed down to toy form
  postToyData = (toy) => {
    // config obj bc we are doing a post
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(toy)
    }

    fetch(`http://localhost:3000/toys`, configObj)
    .then(res => res.json())
    .then(toy => {
      // add toy by setting state and using spread operator
      // page will re-render so this is all you need to do
      this.setState({
        allToys: [...this.state.allToys, toy]
      })
    })
  }

  // function to be passed down to toy container, then toy card
  patchLikes = (toy) => {
    // increment likes
    toy.likes += 1

    // create toy obj of just the attribute we want to update
    const toyObj = {
      likes: toy.likes
    }

    // config obj bc we are doing a PATCH
    const configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(toyObj)
    }

    fetch(`http://localhost:3000/toys/${toy.id}`, configObj)
    .then(res => res.json())
    // don't need second then, dealing with updating DOM on the toy card using state
  }

  // funciton to be passed down to toy container, then toy card
  deleteToy = (toyId, parentElement) => {
    // config obj bc we are doing a DELETE
    // p.s. don't need a body
    const configObj = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    fetch(`http://localhost:3000/toys/${toyId}`, configObj)
    .then(res => res.json())
    // call .remove() on parent node passed from toy card
    // to take that card off the DOM
    .then(parentElement.remove())
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm postToyData={this.postToyData} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer deleteToy={this.deleteToy} patchLikes={this.patchLikes} toys={this.state.allToys} />
      </>
    );
  }

}

export default App;
