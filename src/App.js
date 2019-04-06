import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 27}
    ]})
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        {/* An alternative syntax at the 'click' section to bind a function in the switchNameHandler to the arrow-function syntax brought above in the button*/}
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );

    // 'createElement': This is why we import 'React' even though seemingly we don't use it.
    // This is what the code in the 'return' block gets rendered to.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
