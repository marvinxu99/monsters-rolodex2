import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
          (state, props) =>{
            return{ monsters: users};
          }, 
          () => {
            console.log(this.state);
          }
        )
      )
  }

  onSeachChange = (event) => { 
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
  }

  render() {
    const { monsters, searchField} = this.state;
    const { onSeachChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <div className="App">
        <SearchBox className='seach-bx=ox' placeholder='search monsters' onChangeHandler={onSeachChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );  
  }
}

export default App;
