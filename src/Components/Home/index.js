import React,{Component} from "react";
import img1 from "./imgs/top_banner.jpg";
import img2 from "./imgs/lushu.jpg";
import img3 from "./imgs/shuju.jpg";
import img4 from "./imgs/shebei.jpg";
import img5 from "./imgs/saiduan.jpg";
import img6 from "./imgs/background.jpg";
import img7 from "./imgs/video_poster.jpg";

import "./index.css";

class Home extends Component{
	render(){

	return <div id="box">
			<div id="img">
				<img src={img1} id="img1"/>
			</div>
			<div id="title">
				<div id="left">
					<i className="iconfont icon-webicon03"></i>
				</div>
				<div id="right">
					<span>登录</span>
					<span>注册 </span>
				</div>
			</div>
			
			<p id="on">行者，专业户外运动软件</p>
			<p id="top">当前行者用户运动总里程</p>
			<p id="kli">1,204,558,031<span>公里</span></p>
			
			<div id="pic">
				<img src={img2} id="img2"/>
				<img src={img3} id="img3"/>
				<img src={img4} id="img4"/>
				<img src={img5} id="img5"/>
			</div>
			<img src={img7} id="img7"/>
			<p id="foot">Copyright © 2015 鲁ICP备13005877号-1</p>
	
		</div>
	}
}
export default Home;