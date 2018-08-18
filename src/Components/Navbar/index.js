import React,{Component} from "react";

import "./index.css";
import {NavLink} from "react-router-dom";


class Navbar extends Component{
	render(){
		return <div id="Navbar">
				
				<ul >
					<li><NavLink activeClassName="Tibbers" to="/home"><i className="iconfont icon-benshubook119"></i>行者</NavLink></li>
					<li><NavLink activeClassName="Tibbers" to="/group"><i className="iconfont icon-xiaoxi"></i>行者帮</NavLink></li>
					<li><NavLink activeClassName="Tibbers" to="/game/signup"><i className="iconfont icon-jiangbei"></i>赛事</NavLink></li>
					<li><NavLink activeClassName="Tibbers" to="/news"><i className="iconfont icon-benzi"></i>行者头条</NavLink></li>
					<li><NavLink activeClassName="Tibbers" to="/help"><i className="iconfont icon-yiwen"></i>帮助中心</NavLink></li>
					<li><NavLink activeClassName="Tibbers" to="/contact"><i className="iconfont icon-dianhua"></i>联系我们</NavLink></li>
					<li><a activeClassName="Tibbers" href="https://www.imxingzhe.com/feng/"><i className="iconfont icon-shouji"></i>智能设备</a></li>
					
				</ul>
		</div>
	}
}
export default Navbar;


