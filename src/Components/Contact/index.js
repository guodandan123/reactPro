import React,{Component} from "react";

import "./index.css";
import img1 from "./imgs/img1.JPG";
import img2 from "./imgs/img2.png";

class Contact extends Component{
	render(){
		return <div id="contact">
			<h1>联系我们</h1>
			<p>行者-小安宁</p>
			<p id="aaa">微信搜索:bicpro02</p>
			<img src={img1}/>
			<p>行者官方QQ</p>	
			<p id="aaa">2093696425</p>
			<p>联系电话</p>	
			<p id="aaa">021-31600166</p>	
			<p>联系微博</p>	
			<a href="">行者骑行软件</a>	
			<p>微信公众号</p>
			<p id="aaa">微信搜索:bicpro02</p>
			<img src={img2}/>
			<p>联系我们及商务合作: <a href="">contact@imxingzhe.com</a></p>
			<p>加入我们: <a href="">pirate@imxingzhe.com</a></p>
			<p>认证车店合作: <a href="">shop@imxingzhe.com</a></p>
			<p>上海办公地址：上海市杨浦区政学路77号 innospace+ 行者上海中心</p>
			<p>北京办公地址：北京市朝阳区酒仙桥东路10号冠捷北京西门二层 madnet 行者北京中心</p>
			<p>杭州办公地址：杭州市西湖区池华街398号丰盛九玺8号楼2101 行者杭州中心</p>
			<p>深圳办公地址：深圳宝安区新安六路御景苑众里创业社区 行者深圳中心</p>
			<p id="last">Copyright © 2015 鲁ICP备13005877号-1</p>
			

			
		</div>
	}
}
export default Contact;