import React,{Component} from "react";

import "./index.css";

class Help extends Component{
	render(){
		return <div id="help">
					<p id="helpcenter">帮助中心</p>
					<div id="helps">
						<div id="skr">
							<p><i className="iconfont icon-shouji"></i><br/><span>App使用</span></p>
						</div>
						<div id="skr">
							<p><i className="iconfont icon-ditu"></i><br/><span>路书相关</span></p>
						</div>
						<div id="skr">
							<p><i className="iconfont icon-shipin"></i><br/><span>视频介绍</span></p>
						</div>
						<div id="skr">
							<p><i className="iconfont icon-fangdajing"></i><br/><span>积分优惠</span></p>
						</div>
						<div id="skr">
							<p><i className="iconfont icon-62"></i><br/><span>联系我们</span></p>
						</div>
						<div id="skr">
							<p><i className="iconfont icon-informatiom"></i><br/><span>问题反馈</span></p>
						</div>
					</div>
					<div id="downs">
						<p id="common">常见问题解答</p>
						<a href="">GPS定位常见问题</a>
						<a href="">运动首页设置</a>
						<a href="">语音播报问题</a>
						<a href="">离线地图问题</a>
						<a href="">注册和登录问题</a>
						<a href="">行者积分问题</a>
						<a href="">注册和登录问题</a>
						<a href="">后台运行异常中断解决办法（安卓）</a>
						<p id="ques">没有找到遇到的问题？您可以<a href="./contact/">与我们取得联系</a></p>
					</div>
						
					
					

		</div>
	}
}
export default Help;