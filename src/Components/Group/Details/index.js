import React,{Component} from "react";
import axios from "axios";
import "./index.css";

import moment from "moment";
class Detail extends Component{
	constructor(){
		super();
		this.state={
			datalist:null,
			aaa:null
		}
	}


	componentDidMount(data){
		// console.log(this.props.match.params.id)
		axios.get(`/api/v4/topic_detail?topic_id=${this.props.match.params.id}`)
		.then(res=>{console.log("111");
			
			this.setState({
				datalist:res.data.data
			})
		})

		axios.get(`/api/v4/new_get_comments?topic_id=${this.props.match.params.id}`)
		.then(res=>{console.log("222");
			
			this.setState({
				aaa:res.data
			})
		})

}
		
	
	
	render(){
		return <div>
				{
					this.state.datalist?<div id="up">
						<img src={this.state.datalist.user.avatar} id="head"/>
						<p>{this.state.datalist.user.username}</p>
						<p id="time">{this.state.datalist.create_time}</p>
						<h4 id="title">{this.state.datalist.title}</h4>
						<p id="content">{this.state.datalist.content}</p>
						{
							this.state.datalist.pic_url.split(";").map((src,index)=>{
							return <img src={src} id="pic1" key={index}/>
							})
						}
					</div>:null
				}

				{
					this.state.aaa?<div>

					
						<div>{
							this.state.aaa.map(data=>
						
							<div id="down">
								<img src={data.user.avatar} id="head"/>
								<p>{data.user.username}</p>
								<p id="time">{data.create_time}</p>
								<p id="content">{data.content}</p>
								{
									data.pic_url.split(";").map((src,index)=>{
										return <img src={src} id="pic1" key={index}/>

									})
								}

							</div>
							)
						}	
						</div>
					
					</div>:null

				}
			<div id="discuss">
				<textarea></textarea><button>评论</button>
			</div>
		</div>

	}
}

export default Detail;
