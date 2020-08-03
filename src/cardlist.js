import React from 'react';
import Card from './card.js';




const Cardlist =({robots})=>{
	
	
		const CardArray =robots.map((user,i) => {
			return <Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
			})
		return (
		<div className='tc'>
    		{CardArray}	
    	</div>);
    
}

export default Cardlist;