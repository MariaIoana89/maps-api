import React from 'react'
import FilterPlaces from './FilterPlaces'
import escregexp from 'escape-regexp'

function CityPlaces (props) {
	
	const expr = new RegExp(escregexp(props.query).toLowerCase().trim())

	return (
		<ul className='list'>
			<FilterPlaces className='search'
				queryValue={props.query}
				onInputClick={props.onInputClick}
				onQueryChange={props.onQueryChange} 
			/>
			{props.locations.filter(location => {
				return expr.test(location.title.toLowerCase())
			})
			.map(location => {
				return (
					<li
						key={location.title}
						onClick={props.onClickLocation}
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