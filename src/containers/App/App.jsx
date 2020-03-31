import React from 'react';
import './AppReset.css';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import BusinessList from '../../components/BusinessList/BusinessList';
import YelpApi from '../../utils/yelpApi';

class App extends React.Component {
  state = {
    renderItems: [],
  };

  constructor(props) {
    super(props);
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    YelpApi.search(term, location, sortBy).then((apiItems) => {
      this.setState({
        renderItems: apiItems,
      });
    });
  }

  render() {
    const { renderItems } = this.state;
    return (
      <div className="App">
        <NavBar />
        <SearchBar search={this.searchYelp} />
        <BusinessList businesses={renderItems} />
      </div>
    );
  }
}

export default App;
