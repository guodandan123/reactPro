import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import "./index.css";

class Game extends Component{
	render(){
		return <div id="game">
		
				
		 <ul className="nav">
				<li><NavLink to="/game/signup">行者报名</NavLink></li>
				<li><NavLink to="/game/ride">骑行</NavLink></li>
				<li><NavLink to="/game/crosscountry">越野跑</NavLink></li>
				<li><NavLink to="/game/walk">徒步</NavLink></li>
			</ul>



		 {
		 	this.props.children
		 }
		</div>
	}
}
export default Game;