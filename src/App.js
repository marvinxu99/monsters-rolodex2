import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mosnters: [
        { 
          name: 'Linda',
          id: 1,
        },
        { 
          name: 'Frank',
          id: 2,
        },
        { 
          name: 'Jacky',
          id: 3
        },
        { 
          name: 'Andrei',
          id: 4
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.mosnters.map((monster) => {
              return(
                <div key={ monster.id }>
                  <h1>{monster.name}</h1>
                </div>
              );
            }
          )
        }
      </div>
    );  
  }
}

export default App;
