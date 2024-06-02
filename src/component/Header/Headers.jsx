
import "./header.css";
import { Link } from 'react-router-dom';
const  Headers=()=>{
    return(
        <section className="header">
    <ul className="list">
        <li className="header-li"><Link to="/home">Home</Link></li>
        <li className="header-li"><Link to="/leaders">Leaders</Link></li>
        <li className="header-li"><Link to="/tracks">Tracks</Link></li>
        <li className="header-li"><Link to="/events">Events</Link></li> 
    </ul>
        </section>
    )
}


export default Headers;
