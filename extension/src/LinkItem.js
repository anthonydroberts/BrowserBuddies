/* global chrome */
import React from 'react';
import logo from './browser-buddies-logo.svg';
import './App.css';
import LinesEllipsis from 'react-lines-ellipsis'
import {faStar, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

let SERVER_LINKS = {
  get: 'http://desktop-qdjf5ba:3000/links',
  send: 'http://desktop-qdjf5ba:3000/links',
  delete: 'http://desktop-qdjf5ba:3000/deleteLink'
}
export default class LinkItem extends React.Component {
  constructor(props){
    super(props);
  }

  render = () =>{
    let item=this.props.item;
    let idx = this.props.index;
    if (!item.faviconUrl)
    {
      console.log(item.faviconUrl)
      this.props.requestFaviconFn(item.url, idx)
    }
    else console.log(item.faviconUrl)
    
    return (
      <div style={{position:'relative', flexDirection:'row',display:'flex', flex:1}}>
    
        <a target="_blank" href={item.url}  className="link-item">
        <img src={item.faviconUrl ? item.faviconUrl: "./defaultFavicon-32x32.png"}
         className="link-item-favicon" alt="logo"  />
        
        <div className="link-item-desc">
          <LinesEllipsis text={item.title} maxLine={1} basedOn='letters' ellipsis='...' trimRight className="link-item-desc-title"/>
          <LinesEllipsis text={item.url} maxLine={1} basedOn='letters' ellipsis='...' trimRight className="link-item-desc-url"/>
        </div>
        </a>
        <div className="link-opts-container">
    {/*<div><FontAwesomeIcon icon={faStar} style={{color:"grey",fontSize:12, marginRight:10}}/></div>*/}
      <div><FontAwesomeIcon icon={faTimes} style={{color:"grey",fontSize:12}} onClick={()=>{console.log("delt");this.props.deleteTabFn(item)}}  /></div> 
      </div>
        
      </div>
    );
  }
}
