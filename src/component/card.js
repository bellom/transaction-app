import icon from '../img/card-icon.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Card = () => {
  return(
    <div className="">
      <Link to ="/info/1">
        <Button className="card">
          <span className="span-card">You're owed</span>
          <h1><sup className="sup">£</sup> 45</h1>
          <img src={ icon } className="icon-card" alt="icon infoPage"/>
        </Button>
      </Link>
    </div>
  )
}


export default Card;