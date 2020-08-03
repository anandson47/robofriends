import React,{ Component } from 'react';
import Cardlist from './cardlist.js';
import SearchBox from './Searchbox.js';
import {robots} from './robots.js';
import './app.css';


class App extends Component{
	constructor(){
		super()
		this.state={
			robot:robots,
			Searchfield:'',
		}
	}
	OnSearchChange=(event)=>{
		this.setState({Searchfield:event.target.value});
		
	}

	render(){
		const filteredrobots=this.state.robot.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
		});	
		return(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox Searchchange={this.OnSearchChange}/>
				<Cardlist robots={filteredrobots}/>
			</div>
			);
	}
}

export default App;