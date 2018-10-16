import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
 state = {
 persons: [
   {name: 'Oliver', age: 2},
   {name: 'Spot', age: 5},
   {name: 'Oscar', age: 9} 
 ],
 otherState: 'some other value',
 showPersons: false
 }

 switchNameHandler = (newName) => {
   this.setState({
     persons:  [
   {name: newName, age: 2},
   {name: 'Spotscar', age: 5},
   {name: 'Oscar Sr.', age: 9}
     ]
   })
 }

 nameChangedHandler = (event) => {
  this.setState({
    persons:  [
  {name: event.target.value, age: 2},
  {name: 'Spotscar', age: 5},
  {name: 'Oscar Sr.', age: 9}
    ]
  })
 }

 togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  //this is either true or false 
  this.setState({showPersons: !doesShow});
  //if doesShow is true, it will set showpersons to false. If does show is false, it will set showPersons to true. 
  //if showPersons is false, it will render nothing. is showPersons is true, it will render our list of people. 
 }

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid grey',
      padding: '8px',
      boxShadow: '0 2px 3px #ccc',
      cursor: 'pointer',
      borderRadius: '3px'
    }
    return (
      <div className="App">
      <button 
        style={style}
        onClick= {this.togglePersonsHandler}> Click me for a surprise</button>
        {
          this.state.showPersons === true ?  
      <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed= {this.nameChangedHandler}> My hobbies: Barking </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          > My hobbies: Begging </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> My hobbies: Walks </Person>
          </div> : null
        }
      </div>
    
    );
  }
}

export default App;
