import React from 'react';
const Card = ({name,email,id}) =>{
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img alt='robot' src={`https://robohash.org/${id}?size=160x160`} />
			<div>
				<h4>{name}</h4>
				<p>{email}</p>
			</div>
		</div>
		);
}
export default Card;