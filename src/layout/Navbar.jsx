import { NavLink } from "react-router-dom";
import pizza from '../assets/imgs/pizza.png';
import carrito from '../assets/imgs/carros.png'
const Navbar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    return (
        <>
            <div className='navbar'>
                <div className='pizza'>
                    <div>
                        <img className='img_pizza' src={pizza}></img>
                    </div>
                    <div>
                        <h1 className='titulo_pizza'>Pizzería Mama Mia!</h1>
                    </div>
                </div>
                <div className='carro'>
                    <div className='carro'>
                        <img className='img_carro' src={carrito}></img>
                        <h1>$</h1>
                    </div>
                    
                </div>
            </div>
        </>
    )

}

export default Navbar