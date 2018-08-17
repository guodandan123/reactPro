import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
}
	from "react-router-dom";



import React from "react";
import App from "../App";
import Home from "../Components/Home";
import Book from "../Components/Book";
import Group from "../Components/Group";

import Game from "../Components/Game";
import Signup from "../Components/Game/Signup";
import Ride from "../Components/Game/Ride";
import Crosscountry from "../Components/Game/Crosscountry";
import Walk from "../Components/Game/Walk";

import News from "../Components/News";
import Help from "../Components/Help";
import Contact from "../Components/Contact";
import Devices from "../Components/Devices";
import Detail from "../Components/Game/Detail";
import Details from "../Components/Group/Details";



import Whole from "../Components/News/Whold"
import Intellectual from "../Components/News/Intellectual"
import Product from "../Components/News/Product"
import Sportsnews from "../Components/News/Sportsnews"
import Character from "../Components/News/Character"
import Match from "../Components/News/Match"



import all from "../Components/Group/all";
import live from "../Components/Group/live";
import second from "../Components/Group/second";
import talk from "../Components/Group/talk";
import ask from "../Components/Group/ask";
import outdoor from "../Components/Group/outdoor";
import running from "../Components/Group/running";
import freedom from "../Components/Group/freedom";





const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/book" component={Book}/>

					<Route path="/group" render={()=>
					<Group>
							<Switch>
								<Route path="/group/all" component={all}/>
								<Route path="/group/live" component={live}/>
								<Route path="/group/second" component={second}/>
								<Route path="/group/talk" component={talk}/>
								<Route path="/group/ask" component={ask}/>
								<Route path="/group/outdoor" component={outdoor}/>
								<Route path="/group/running" component={running}/>
								<Route path="/group/freedom" component={freedom}/>
								<Route path="/group/details/:id" component={Details}/>
								<Redirect from="/group" to="/group/all"/>
							</Switch>
						</Group>
				}/>

				<Route path="/game" render={()=>
					<Game>
					<Switch>
						<Route path="/game/signup" component={Signup}/>
						<Route path="/game/ride" component={Ride}/>
						<Route path="/game/crosscountry" component={Crosscountry}/>
						<Route path="/game/walk" component={Walk}/>
						<Route path="/game/detail/:id" component={Detail}/>
						<Redirect from="/game" to="/game/signup"/>
					</Switch>
					</Game>
					}/>

				
				<Route path="/news" render={()=>
					<News>
						<Switch>
							<Route path="/news/whole" component={Whole}/>
							<Route path="/news/intellectual" component={Intellectual}/>
							<Route path="/news/product" component={Product}/>
							<Route path="/news/sportsnews" component={Sportsnews}/>
							<Route path="/news/character" component={Character}/>
							<Route path="/news/match" component={Match}/>

							<Redirect from="/news" to="/news/whole"/>
						</Switch>
 					</News>
				}/>
				<Route path="/help" component={Help}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/devices" component={Devices}/>


				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
)
export default router;
