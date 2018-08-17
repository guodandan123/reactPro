import React,{Component} from "react";

import "./index.css";
import {NavLink} from "react-router-dom";

class Navbar extends Component{
	render(){
		return <div id="Navbar">

			<ul >
				<li><NavLink activeClassName="Tibbers" to="/home">行者</NavLink></li>
				
				<li><NavLink activeClassName="Tibbers" to="/group">行者帮</NavLink></li>
				<li><NavLink activeClassName="Tibbers" to="/game/signup">赛事</NavLink></li>
				<li><NavLink activeClassName="Tibbers" to="/news">行者头条</NavLink></li>
				
			</ul>
		</div>
	}
}
export default Navbar;
