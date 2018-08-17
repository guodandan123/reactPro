import React,{Component} from "react";

import "./index.css";

class Character extends Component{
	//初始状态
	
	render(){
		return <div>

			<ul id="list_2">
				{
				// this.state.datalist.map(item=>
				// 	<li key={item} onClick={this.handleClick.bind(this,item)}>{item}</li>
				// 	)			
				}
				<li>
					<img src="https://static.imxingzhe.com/headline/2018-08-09-beqv8zkjs5s6unlgjqlsqve0fcbnsejv!newsThumb" alt=""/>
					<span>VIP免费文章|我们的未来？专访绿刃发展车队孙小龙</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>2142</i></span>
					</div>
				</li>

				<li>
					<img src="https://static.imxingzhe.com/headline/2018-05-11-s0zva53bacvdulgzvab7jv9leu71pasp!newsThumb" alt=""/>
					<span>夏季骑行不脱反而要多穿？这10点建议你必须知道</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>2442</i></span>
					</div>
				</li>

				<li>
					<img src="http://static.imxingzhe.com/rideNewsImg/1525760131000/074f69928a04!newsThumb" alt=""/>
					<span>骑车不会摇车？看这个视频就会了！</span>
					<div id="right">
						<span className="onw">行者</span>
						<span className="two">2018-8-19 <i>2345</i></span>
					</div>
				</li>
				
				<li>
					<img src="http://static.imxingzhe.com/rideNewsImg/1525406229000/1c51075e64c44!newsThumb" alt=""/>
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
	
}
export default Character;