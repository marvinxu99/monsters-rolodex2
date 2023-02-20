//import { Component } from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Clock from './components/Clock/clock.component';
import Toggle from './components/Toggle/toggle.component';
import EssayForm from './components/EssayForm/essay-form.component';


//Functional component
const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //console.log("rendered");

  // Only fetch once as we set the dependancy list to empty
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // Change the filteredMinsters only if any change to searchFiled or monsters
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]) 
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase(); 
    setSearchField(searchFieldString);  
  }

  return (
    <div className="App">
    {/*
      <EssayForm />
      <Toggle />
      <Clock />
    */}
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
        className='monster-search-box' 
        placeholder='search monsters' 
        onChangeHandler={onSearchChange} 
      />
      <CardList monsters={filteredMonsters} />    
    </div>
  );  
}


//Class component
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(
//           (state, props) =>{
//             return{ monsters: users};
//           }, 
//           () => {
//             console.log(this.state);
//           }
//         )
//       )
//   }

//   onSearchChange = (event) => { 
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });
//   }

//   render() {
//     const { monsters, searchField} = this.state;
//     const { onSeachChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
    
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox 
//           className='monster-search-box' 
//           placeholder='search monsters' 
//           onChangeHandler={onSearchChange} 
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );  
//   }
// }

export default App;
