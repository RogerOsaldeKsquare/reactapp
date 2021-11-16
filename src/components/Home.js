import React from 'react';
import logo from '../assets/logo'
import '../App.css';


export default function Home(){
    return (
        <div className="Logo">
          <header className="Logo-header">
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h1> This App is a reference of the Amazing Universe of </h1>
          </div>
          </header>
          <div className="image-container">
          <img  style={{ width: 700, height: 650 }} src={logo[0]}  alt={logo}/>
          </div>
        </div>
      );

}

