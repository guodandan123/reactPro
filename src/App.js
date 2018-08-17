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
             <i className="iconfont icon-htmal5icon35" onClick={this.handleClick.bind(this)}></i>
             <i  className="iconfont icon-geren " id="right"></i>
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
