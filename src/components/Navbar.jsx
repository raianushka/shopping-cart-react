import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar= () =>{
    return (
    <div>
        <div className="flex flex-row justify-between">
            <NavLink to="/">
                <div>
                <img src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg" alt="" loading="lazy"/>
                </div>
            </NavLink>
            
             <div>
                <NavLink to="/">
                <p>Home</p>
                </NavLink>
                <NavLink to="/cart">
                <div>
                <FaShoppingCart/>
                </div>
                </NavLink>
                


            </div>
        </div>
    </div>
     )
    
};

export default Navbar