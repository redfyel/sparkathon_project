import { Link } from "react-router-dom"
import logo from '../../assets/geminiLogo.svg'

function Header() {
  return (
    <div>
    
    <ul className="nav d-flex justify-content-end fs-4">
    <Link to=""><img src={logo} alt="" className="w-25" /></Link>
      <li className="nav-item">
        <Link to = 'homeApp' className='nav-link'>Home Appliances</Link>
      </li>
      <li className="nav-item">
        <Link to = 'sports' className='nav-link'>Sports and Outdoors</Link>
      </li>
      <li className="nav-item">
        <Link to = 'clothing' className='nav-link'>Clothing and Accessories</Link>
      </li>
      <li className="nav-item">
        <Link to = 'grocery' className='nav-link'>Grocery and Meghana</Link>
      </li>
    </ul>
    </div>
  )
}

export default Header