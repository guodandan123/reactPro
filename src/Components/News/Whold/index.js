import React,{Component} from "react";

import "./index.css";
// import axios from "axios";
class Whold extends Component{
	constructor(props){
		super(props);

		// this.state={
		// 	datalist:[]
		// };
	}
	render(){
		return <div>

			<ul id="list_2">
				{
				// this.state.datalist.map(item=>
				// 	<li key={item} onClick={this.handleClick.bind(this,item)}>{item}</li>
				// 	)			
				}
				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-14-sl1uyx0m7eras37dgx337thoza4w3v82!newsThumb" alt=""/>
					<span>花27万买了辆自行车，你们说能飞吗？</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>2142</i></span>
					</div>
				</li>

				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-14-v9dj0ujyfqyevpv8ryvkp5491kugpc0a!newsThumb" alt=""/>
					<span>夏季骑行不脱反而要多穿？这10点建议你必须知道</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>2442</i></span>
					</div>
				</li>

				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-13-k2skzosgr8jei2jf37g6ec5qfc98wrqs!newsThumb" alt=""/>
					<span>骑车不会摇车？看这个视频就会了！</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>2345</i></span>
					</div>
				</li>
				
				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-10-5jg6vudkfau2rczuo4lem2sjb6jjbh70!newsThumb" alt=""/>
					<span>哪款公路锁鞋是最好的？他们的答案竟然是...</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>3292</i></span>
					</div>
				</li>


				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-09-beqv8zkjs5s6unlgjqlsqve0fcbnsejv!newsThumb" alt=""/>
					<span>重磅！行者将发神秘新品，敢花20块赌一把吗？</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>1234</i></span>
					</div>
				</li>

				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-12-g8k55131mnld8hdc25z4twd5wn1ulxul!newsThumb" alt=""/>
					<span>2018环羊卓雍措自行车公开赛火热报名中</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>9876</i></span>
					</div>
				</li>

				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-11-c8ynceavglfoephwm3evckwjw4y6upza!newsThumb" alt=""/>
					<span>小偷5天骑了800公里竟爱上骑行，警察一路没追上！</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>4562</i></span>
					</div>
				</li>
				
				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-10-xp3mimb0jetxhzeuwe38thh0s9bpgrw1!newsThumb" alt=""/>
					<span>8大骑行尴尬瞬间！最后一个小行星看了都脸红~</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>5678</i></span>
					</div>
				</li>

			</ul>
			<footer>
				1/120
			</footer>
		</div>
	}
	// handleClick(data){
	// 	console.log(this.props);

	// 	this.props.history.push(`/detail/${data}`); 
	// }
	// componentDidMount(){
	// 	axios.get("/mp/getappmsgext?f=json&mock=&uin=&key=&pass_ticket=&wxtoken=777&devicetype=&clientversion=&appmsg_token=&x5=0&f=json").then(res=>{
	// 		console.log(res.data)
	// 	})
	// }
}
export default Whold;