import { Button } from 'react-bootstrap';
const Carrito=()=>{

return(
    <>
    <div className="carrito_container">
        <h2>Detalles del pedido</h2>
        <h4>Total:</h4>
        <Button variant="success" >Ir a pagar</Button>
    </div>
    </>
)
}
export default Carrito;