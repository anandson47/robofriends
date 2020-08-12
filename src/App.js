import React,{ Component } from 'react';
import Cardlist from './cardlist.js';
import SearchBox from './Searchbox.js';
import './app.css';
import Scroll from './scroll.js';


class App extends Component{
	constructor(){
		super()
		this.state={
			robot:[],
			Searchfield:'',
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>
		{
			return response.json();
		})
		.then(users=>{
		this.setState({robot:users})})
	}
	OnSearchChange=(event)=>{
		this.setState({Searchfield:event.target.value});
		
	}

	render(){
		const filteredrobots=this.state.robot.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
		});
		if (this.state.robot===0) {
			return <h1 className='tc'>LOADING</h1>;
		} else {	
			return(
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox Searchchange={this.OnSearchChange}/>
					<Scroll>	
						<Cardlist robots={filteredrobots}/>
					</Scroll>
				</div>
				);}
	}
}

export default App;