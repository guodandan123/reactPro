import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";



class App extends Component {

  constructor(){
    super();
    this.state={
    isShow:false
    }
  }
   handleClick(){
   this.setState
   ({
    isShow:!this.state.isShow },function(){})

     }
 
  render(){
    return (
      <div className="App">
        <div className="aaa">
            <i id="l" className="iconfont icon-caidan" onClick={this.handleClick.bind(this)}></i>
            <i id="r" className="iconfont icon-gerenxinxi"></i> 
        </div>
    
        {
          this.state.isShow?
          <Navbar />:null
        }
       
        
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
