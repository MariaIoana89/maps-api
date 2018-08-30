import React, { Component } from 'react';
import CityMap from './Components/CityMap';
import CityPlaces from './Components/CityPlaces';

class App extends Component {
  state = {
  	locations: [],
  	locationInfo: {},
  	query: ''
  }

  // Fetch locations from Forsquare
  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/explore?ll=44.26239950000001,28.6187464&client_id=1KSJMZWDGUOZBYIDY3IDQLEFN2HT55TM42QVKGVFAGLG1B40&client_secret=BLPQ4BWFZNCRFONUCD22UVRFR0JYK01CGGDZGWU4F1A3DUQM&v=20180827')
    .then(response => response.json())
    .then(data => {
      const locations = data.response.groups[0].items.map(item => {
        return {
          position: { lat: item.venue.location.lat, lng: item.venue.location.lng },
          title: item.venue.name,
          id: item.venue.id,
          category: item.venue.categories[0].name,
          address: item.venue.location.address,
          crossStreet: item.venue.location.crossStreet,
          state: item.venue.location.state,
          postalCode: item.venue.location.postalCode
        }
      })
      this.setState({ locations });
      console.log('Fetched locations: ', this.state.locations);
    })
    .catch(err => {
      console.log('Foursquare error:', err);
      alert('No fetching locations from Forsquare. Please try again!');
    })  	
  }

  onClickLocation = event => {
  	this.setState({
  		query: event.target.textContent
  	})
  	for (const location of this.state.locations) {
  		if (location.title === event.target.textContent) {
  			this.setState({
  				locationInfo: location
  			})
  		}
  	}
  }

  onInputClick = event => {
  	this.setState({
  		query: ''
  	})
  }

  updateQuery = event => {
  	this.setState({
  		query: event.target.value
  	})
  }

  render() {
    return (
    	<div>
	      <CityPlaces
	      	locations={this.state.locations}
	      	query={this.state.query}
	      	onClickLocation={this.onClickLocation}
	      	onInputClick={this.onInputClick}	      	
	      	onQueryChange={this.updateQuery}
	      />
	      <CityMap 
	      	locations={this.state.locations}
	      	query={this.state.query}
          role="application"
	      />    		
    	</div>
    );
  }
}

export default App;