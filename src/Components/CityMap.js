import React, {Component} from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import escregexp from 'escape-regexp'

//Google Maps API script error handler
document.addEventListener("DOMContentLoaded", function(error) {
  let googleMapScript = document.getElementsByTagName('SCRIPT').item(1);
  googleMapScript.onerror = function(error) {
    console.log('Google Maps API error: ', error);
    alert('Something went wrong while fetching the map from Google. Please try again later.');
  }
});

class CityMap extends Component {
	
	state = {
	  selectedMaker: {},
	  selectedPlace: {},
	  selectedMarkerInfoWindow: false
	}	

	onMarkerClick = (props, marker, e) => {
	  this.setState({
	    selectedMaker: marker,
	    selectedPlace: props,
	    selectedMarkerInfoWindow: true
	  })
	}

	render() {

		const bound = new this.props.google.maps.LatLngBounds()
		const expression = new RegExp(escregexp(this.props.query).toLowerCase().trim())

	    for (let i = 0; i < this.props.locations.length; i++) {
      		bound.extend(this.props.locations[i].position)
    	}

		return (
			<Map
				google={this.props.google} 
				initialCenter={{lat:44.26239950000001, lng:28.6187464}} 
				zoom={17} 
				bounds={bound}				
			>

				{
					this.props.locations.filter(location => {
						return expression.test(location.title.toLowerCase())
					})
					.map(location => {
						return (
							<Marker 
								key={location.id} 
								position={{ lat: location.position.lat, lng: location.position.lng}} 
								title={location.title} 
								animation={this.props.google.maps.Animation.Fo}
				                category={location.category}
				                address={location.address}
				                crossStreet={location.crossStreet}
				                state={location.state}
				                coordinates={location.coordinates}
				                postalCode={location.postalCode}
                                onClick={this.onMarkerClick}
							/>
						)
					})
				}

				<InfoWindow marker={this.state.selectedMaker} visible={this.state.selectedMarkerInfoWindow}>
					<div>
					    <h2>{this.state.selectedPlace.title}</h2>
					    <h3>{this.state.selectedPlace.category}</h3>
					    <p>Address: {this.state.selectedPlace.address}</p>				    
					    <p>Postal Code: {this.state.selectedPlace.postalCode}</p>
					    <p>Cross Street: {this.state.selectedPlace.crossStreet}</p>
					    <p><em>Info by <a rel="noopener noreferrer" href="https://foursquare.com" target="_blank">Foursquare</a></em></p>
				    </div>
				</InfoWindow>

			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAjzYNXjVTALv4l2UqX6UQJYSuX_wZ0cQ8'
})(CityMap)