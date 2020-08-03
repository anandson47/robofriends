import React from 'react';

const SearchBox = ({Searchfield,Searchchange}) =>{
	return(
		<div className='pa2 '>	
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Search Robots'
			onChange={Searchchange}/>	
		</div>	
		);
}
export default SearchBox;