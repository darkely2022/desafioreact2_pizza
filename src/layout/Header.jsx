import fondo from '../assets/imgs/fondo.jpg';

const Header=()=>{

    return(
        <>
        <div className='fondo' style={{backgroundImage:`url(${fondo})`}}>
        
        <h1 className='fondo_h1'>¡Pizzería Mamma Mia!</h1>
        <h2> Tenemos las mejores pizzas que podrás encontrar</h2>
        </div>
        </>
    )

}
export default Header;