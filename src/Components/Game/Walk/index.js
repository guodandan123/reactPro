import React,{Component} from "react";
import axios from "axios"
import "./index.css";


class Walk extends Component{

	constructor(){
		super();
		this.state={
			datalist:[]
		}
	}

	render(){
		return <div id="Walk">
		
		{
				this.state.datalist.map(data=>
							<li key={data.id} onClick={this.handleClick.bind(this,data)}>
								<img src={data.pic_url}/>
								<div className="title">{data.title}</div>
								<div className="qq">
									<span>地点：</span><span className="place">{data.host_place.map((aaa,index)=>
										<span key={index}>{aaa}</span>
										)}</span>
									</div>
								<div className="tag">{data.tags.map(item=>
									<span key={item}>{item}</span>
									)}</div>
							</li>
					)			
		}

		</div>
	}
	handleClick(data){
		
		this.props.history.push(`/game/detail/${data.id}`)
	}

componentDidMount(){
		


Promise.all([axios.get("/api/v4/competitions_processing/?limit=1000&page=0&com_sport_type=6"),
			 axios.get("/api/v4/competitions_done/?limit=10&page=0")
	]).then(res=>{//console.log(res[0].data.data);
		

				this.setState({
					datalist:res[0].data.data
				
				})



		}).catch(error=>{
			console.log(error)//就是出错的信息
		})
	}
}
export default Walk;