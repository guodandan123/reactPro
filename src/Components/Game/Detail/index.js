import React,{Component} from "react";
import axios from "axios"
import "./index.css";
import {NavLink }from "react-router-dom";

class Detail extends Component{
	constructor(){
		super();
		this.state={
			datalist:null
		}
	}


	componentDidMount(){
		console.log(this.props.match.params.id)
		axios.get(`/api/v4/competition_detail?competition_id=${this.props.match.params.id}`)
		.then(res=>{console.log(res.data.data);
			this.setState({
					datalist:res.data.data
				
				})
		})
		}	

		
	
	
	render(){
		return <div id="Detail">
		
		
			{
				this.state.datalist?<div>
					<img src={this.state.datalist.pic_url}/>
					<h4>{ this.state.datalist.title}</h4>
					<h4>{ this.state.datalist.place}</h4>
					
					<div>
					{this.state.datalist.tags.map(data=>
						<span key={data}>{data}</span>)}
					</div>
					<ul><li><NavLink to="/game/detail/${this.props.match.params.id}"  activeClassName="active">赛事详情</NavLink></li>
						<li><NavLink to="/game/detail/${this.props.match.params.id}"  >赛事组别</NavLink></li>
						<li><NavLink to="/game/detail/${this.props.match.params.id}"  >成绩查询</NavLink></li>
						
					</ul>
				</div>:null
			}
		

		</div>
	}
}

export default Detail;