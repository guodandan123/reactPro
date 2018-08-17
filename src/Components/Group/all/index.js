import React,{Component} from "react";

import axios from "axios";
import "./index.css";
class All extends Component{
	constructor(props){
		super(props);

		this.state={
			datalist:[],
			
		}
	}
	componentWillMount(){
		
	}

	render(){

		return <div>
			{<ul id="all">
				{
					this.state.datalist.map(item=>
						<li key={item.id} onClick={this.handleClick.bind(this,item)}>
							<div id="left"> 
								<img src={item.user.avatar} id="user"/>
							</div>
							<div id="right">
								<div id="name">{item.user.username}</div>
								<div id="time">{item.update_time}</div>
								<div id="title">{item.title}</div>
								<div id="content2">{item.content}</div>
								{
									item.pic_url.split(";").splice(0,3).map((src,index)=>{
										return <img src={src} id="pic" key={index}/>

									})
								}
							</div>
						</li>
					)
				} 
			</ul>

		}
	</div>
	
}
componentDidMount(data){
		axios.get('/api/v4/new_get_topics?start=0&count=10&channel_id=0').then(res=>{
			this.setState({
				datalist:res.data
			})
		})
	}

	handleClick(data){
		console.log(data);
		this.props.history.push(`/group/details/${data.id}`);
	}

}
export default All;