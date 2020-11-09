import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import icon from '../img/card-icon.png';


class infoPage extends React.Component {

  render() {
    return (
      <div className="infoPage">
        <Zoom>
            <div className="section1">
              <div>
                <div className="info-group-icon">
                  <Link to="/" className="back-arrow">&#60;</Link>
                  <img src={ icon } className="icon-infoPage" alt="contact-icon"/>
                </div>
                <div>
                  <h6 className="span-infoPage">You're owed</h6>
                  <h1 className="h1-white"><sup className="sup-infoPage">£</sup>45</h1>
                </div>
              </div>
            </div>
            <div className="section2">
              <div className="plus"> <h1 className="sign">+</h1></div>
              <span className="span-homePage">Transactions</span>
              <div className="transaction2"></div>
              <div className="transaction2"></div>
              <div className="transaction2"></div>
              <div className="transaction2"></div>
              <div className="transaction2"></div>
              <div className="transaction2"></div>

              <div className="footer">
                <ul>
                  <li>
                    <i className="material-icons">adjust</i>
                  </li>
                  <li>
                    <i className="material-icons first-icon">adjust</i>
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
        </Zoom>
      </div>
    );
  }
}

export default infoPage;
