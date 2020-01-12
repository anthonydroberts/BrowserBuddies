/* global chrome */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinesEllipsis from 'react-lines-ellipsis'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      links : []
    }
  }
  getLinks = () =>{
    return this.state.links
  }

  componentDidMount() {
      try {
      // setInterval( () => {
          console.log("interval elapse")
          fetch('http://192.168.0.13:3000/links',{ 
          'Content-Type': 'application/json', 'Accept': 'application/json'}).then(res=>res.json()).then(l => {console.log(l);this.setState({links:l})})
    //  }, 5000);
      } catch(e) {
        console.log(e);
      }
  }

  sendCurrentTab = () =>{
    chrome.tabs.query({active: true, currentWindow: true}, t=> {
      let link = {
        url: t[0].url,
        title: t[0].title
      }
      fetch('http://192.168.0.13:3000/links',{
        method:'POST',
        body:JSON.stringify({link:link}),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res=>res.json()).then(l => {console.log(l);})
    });
  }

  deleteTab = (link) =>{
    fetch('http://192.168.0.13:3000/deleteLink',{
      method:'POST',
      body:JSON.stringify({url:link.url}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json()).then(l => {console.log(l);})
  };

  renderLink = (item) =>{
    return (
      <div style={{padding:3,flexDirection:'row',display:'flex', justifyContent:'space-between'}}>
        <a className='link' href={item.url} style={{flexDirection:'row',display:'flex',justifyContent:'flex-start', maxWidth:'80%' }}>
          <LinesEllipsis text={item.title} maxLine={1} basedOn='letters' ellipsis='...' trimRight style={{color:"white",fontWeight:'bold', marginRight:10}}/>
          <LinesEllipsis text={item.url} maxLine={1} basedOn='letters' ellipsis='...' trimRight style={{fontStyle:'italic', color:"#9c95b7",}}/>
        </a>
        <button onClick={() => this.deleteTab(item)} style={{fontSize:10, display:'flex',flexDirection:'row',height:20,fontWeight:'bold', backgroundColor:"#221f2e", color:'white', borderWidth:0}}>REMOVE</button>
      </div>
    );
  }
  render = ()=>{
  return  (
    <div className="Container" style={{width:500}}>
      <div className="App" style={{padding:10, display:'flex',flexDirection:'column'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width={50} height={50} />
          <p>Browser Buddies</p>
        </header>
        <div className="Links-display" style={{flexDirection:'column',padding:10,flex:1, justifyContent:'space-between'}}>
          <div style={{marginBottom:10}}>
            {this.getLinks().map(item => this.renderLink(item))}
          </div>
          <button onClick={this.sendCurrentTab} style={{height:40, padding:10,fontSize:15, fontWeight:'bold', backgroundColor:"#221f2e", color:'white', borderWidth:0}}>+ current tab {this.state.test}</button>
        </div>
      </div>
    </div>
  );
} 
}