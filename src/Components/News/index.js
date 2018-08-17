import React,{Component} from "react";

import "./index.css";
import {NavLink} from "react-router-dom";
class News extends Component{
	render(){
		return <nav id="nav">
		<ul id="list">
			<li><NavLink to="/news/whold">全部</NavLink></li>
			<li><NavLink to="/news/intellectual">知识</NavLink></li>
			<li><NavLink to="/news/product">产品</NavLink></li>
			<li><NavLink to="/news/sportsnews">新闻</NavLink></li>
			<li><NavLink to="/news/character">人物</NavLink></li>
			<li><NavLink to="/news/match">赛事</NavLink></li>
		</ul>	
			{/*News*/}
			{this.props.children}
		</nav>
	}
}
export default News;