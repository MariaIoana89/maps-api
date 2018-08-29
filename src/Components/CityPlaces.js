import React from 'react'
import FilterPlaces from './FilterPlaces'
import escregexp from 'escape-regexp'

function CityPlaces (props) {
	
	const expression = new RegExp(escregexp(props.query).toLowerCase().trim())

	return (
		<ul className='list'>
			<FilterPlaces className='search'
				queryValue={props.query}
				onInputClick={props.onInputClick}
				onQueryChange={props.onQueryChange} 
			/>
			{props.locations.filter(location => {
				return expression.test(location.title.toLowerCase())
			})
			.map(location => {
				return (
					<li
						key={location.title}
						onClick={props.onLocationClick}
						tabIndex="2"
						aria-label="Location"
					>
						{location.title}
					</li>
				)
			})}
		</ul>		
	)
}

export default CityPlaces