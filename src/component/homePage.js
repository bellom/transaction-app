import React from 'react';
// import { Link } from 'react-router-dom';
import Card from './card';
import icon from '../img/icon.png';

const HomePage = () => {
  return (
    <div className="homePage">
      <img src={ icon } className="icon-homePage" alt="contact-icon"/>
      <h3> Morning Lee </h3>
      <span className="span-homePage">Your accounts</span>
      <div className="card-div">
        <Card />
        <Card />
        <Card />
      </div>
      <span className="span-homePage">Transactions</span>
      <div className="transaction"></div>
      <div className="transaction"></div>
      <div className="transaction"></div>
      <div className="transaction"></div>
      <div className="transaction"></div>
      <div className="transaction"></div>

      <div className="footer">
        <ul>
          <li>
            <i className="material-icons first-icon">adjust</i>
          </li>
          <li>
            <i className="material-icons">adjust</i>
          </li>
          <li>
            <i className="material-icons">adjust</i>
          </li>
          <li>
            <i className="material-icons">adjust</i>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default HomePage;