/* global chrome */
import React from 'react';
import logo from './browser-buddies-logo.svg';
import './App.css';
import LinkItem from './LinkItem'
let SERVER_LINKS = {
  get: 'http://desktop-qdjf5ba:3000/links',
  send: 'http://desktop-qdjf5ba:3000/links',
  delete: 'http://desktop-qdjf5ba:3000/deleteLink'
}
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      links : [] //store currently stored tab links
    }
  }

  getLinks = () => this.state.links
  
  updateLinks = () => {
    fetch( SERVER_LINKS.get, { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
    .then (res=>res.json())
    .then(l => {
      console.log(l);
      this.setState({links:l});
    })
    .catch(e=>{
      console.log(e);
    });
  }

  componentDidMount() {
      this.updateLinks();
      setInterval(this.updateLinks,60000)
  }

  sendCurrentTab = () =>{
    chrome.tabs.query({active: true, currentWindow: true}, t=> {
      let link = {
        url: t[0].url,
        title: t[0].title
      }
      fetch('http://desktop-qdjf5ba:3000/links',{
        method:'POST',
        body:JSON.stringify({link:link}),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res=>{
        setTimeout(this.updateLinks, 500)
        return res.json()
      }
      ).then(l => {console.log(l);})
    });
  }

  deleteTab = (link) =>{
    console.log(link)
    fetch('http://desktop-qdjf5ba:3000/deleteLink',{
      method:'POST',
      body:JSON.stringify({url:link.url}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>{
      setTimeout(this.updateLinks, 500)
      return res.json()
    }).then(l => {console.log(l);
      this.updateLinks();
    }).catch(e=>console.log(e))
  };

  getFavicon =  (link , linkIdx) => {
    if (link.includes("github.com")) {
      let links = this.state.links.splice(0);
      links[linkIdx] = {...links[linkIdx], faviconUrl: "https://github.com/apple-touch-icon.png"}
      this.setState({links:links})
      return;
    }

    fetch("https://cors-anywhere.herokuapp.com/https://api.statvoo.com/favicon/?url="+link,{ method: 'GET', })
    .then(res=>{
      if (res.ok)
      {
        let links = this.state.links.splice(0);
        links[linkIdx] = {...links[linkIdx], faviconUrl: "https://cors-anywhere.herokuapp.com/https://api.statvoo.com/favicon/?url="+link}
        this.setState({links:links})
      }
      return true; 
    })
    .catch((e)=>{
      console.log(e);
    })
    
  }
  render =  () => {
    return  (
      <div className="Container" >
        <div className="App">
          <header className="App-header">
            <div className="app-header-subtext-container">
            <div className="app-header-subtext">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Browser Buddies</h1>
          
            </div>
            </div>
            {/*<p>Logged in as Anony Mouse</p>*/}
          </header>
          <div className="Links-display" style={{flexDirection:'column',flex:1, justifyContent:'space-between'}}>
            <div className="group-buttons-container">
              <button onClick={this.sendCurrentTab} className="group-button">MY LINKS</button>
            </div>
            <div className="group-links-list">
              {this.getLinks().map((item, idx) => <LinkItem item={item} index={idx} requestFaviconFn={this.getFavicon} deleteTabFn={this.deleteTab}/>)}
            </div>
          
          </div>
          <button onClick={this.sendCurrentTab} >Add Tab</button>
        </div>
      </div>
    );
  } 
}