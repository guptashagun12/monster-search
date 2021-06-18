import React from 'react';
import {CardList} from './components/card-list/card-list';
import './App.css';
import {SearchBox} from './components/searchBox/search-box.jsx';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount () {
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(resp => resp.json())
      .then((user) => {
          console.log(user);
          this.setState({
            monsters: user
          });
      });
  }

  handleChange = (e) => {
    this.setState({
      searchField : e.target.value
    });
    console.log('hey')
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return (monster.name.toLowerCase().includes(searchField.toLowerCase()))
    });
    return (
      <div className="App">
        <h1>Monster Finder</h1>
        <SearchBox placeholder="Find monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
