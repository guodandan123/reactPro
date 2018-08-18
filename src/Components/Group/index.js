import React,{Component} from "react";

import "./index.css";
import {NavLink} from  "react-router-dom";

import ReactSwipe from 'react-swipe';
import ReactDOM from 'react-dom';



class Group extends Component{
	render(){
		return <div id="swipe">
			<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
               {/* <li id="nav"><NavLink to="/group/all" activeClassName="active">全部</NavLink></li>
				<li id="nav"><NavLink to="/group/live" activeClassName="active">运动直播</NavLink></li>
				<li id="nav"><NavLink to="/group/second" activeClassName="active">二手交易</NavLink></li>
				<li id="nav"><NavLink to="/group/talk" activeClassName="active">装备讨论</NavLink></li>
				<li id="nav"><NavLink to="/group/ask" activeClassName="active">有问必答</NavLink></li>
				<li id="nav"><NavLink to="/group/outdoor" activeClassName="active">徒步户外</NavLink></li>
				<li id="nav"><NavLink to="/group/running" activeClassName="active">跑步行者</NavLink></li>
				<li id="nav"><NavLink to="/group/freedom" activeClassName="active">自由行者</NavLink></li>*/}
				<NavLink to="/group/all" activeClassName="active">全部</NavLink>
				<NavLink to="/group/live" activeClassName="active">运动直播</NavLink>
				<NavLink to="/group/second" activeClassName="active">二手交易</NavLink>
				<NavLink to="/group/talk" activeClassName="active">装备讨论</NavLink>
				<NavLink to="/group/ask" activeClassName="active">有问必答</NavLink>
				<NavLink to="/group/outdoor" activeClassName="active">徒步户外</NavLink>
				<NavLink to="/group/running" activeClassName="active">跑步行者</NavLink>
				<NavLink to="/group/freedom" activeClassName="active">自由行者</NavLink>
            </ReactSwipe>

			{this.props.children}

		</div>
	}
}
export default Group;