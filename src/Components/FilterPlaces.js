import React from 'react'

function FilterPlaces (props) {
	return (
		<input
			type="text" 
			placeholder="Filter locations..."
			value={props.queryValue} 
			onClick={props.onInputClick} 
			onChange={props.onQueryChange} 
			autoFocus 
			tabIndex="1"
			aria-label="Type to filter the locations"
		/>
	)
}

export default FilterPlaces