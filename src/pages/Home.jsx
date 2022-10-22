import { useState, useEffect, useContext  } from "react";
import { Button, Card } from 'react-bootstrap';
import { useNavigate} from "react-router-dom";
import Context from "../context/context";
import Imagenpizza from '../assets/imgs/pizza.png';

const Home = () => {
    const endpoint = "/pizzas.json";
    const [listadoPizza, setPizza] = useState([]);
    const navigate = useNavigate();

    const { listadocompra, setCompra } = useContext(Context);

    const irADetalle = (lista) => {
        navigate(`/pizza/${lista.id}`);
        if (lista.id==="")
        { alert("seleccione un valor")}
        console.log(lista.id)
        };
    
        const Buscar=(arreglo)=>{
           
            console.log(arreglo.id)
            irADetalle(arreglo);
        }   
        const Agregar=(arreglo)=>{
            
            navigate(`/carrito`);
            const Pizzas={
        
                id:arreglo.id,
                name:arreglo.name,
                img:arreglo.img,
                precio:arreglo.price
              }
              setPizza(Pizzas);  
              console.log("pizza")
              console.log(Pizzas);
              /*listadocompra.push({id:arreglo.id,nombre:arreglo.name, img:arreglo.img,precio:arreglo.price})*/
              setCompra([...listadocompra,Pizzas])
              console.log(listadocompra);
        }   

        const enviarFormulario =(e)=>{
            e.preventDefault()
        }

    useEffect(() => {
        const Datos = async () => {
            let urlFiltro = endpoint;
            const resp = await fetch(urlFiltro);
            const respDatos = await resp.json();
            console.log(respDatos);
            setPizza(respDatos);
        }
        Datos();
    }, [])

    return (
        <>
            <div className="container text-center">
                <div className="row row-cols-3">
                    {listadoPizza.map((pizza) => (
                        <div key={pizza.id}>
                            <form onSubmit={enviarFormulario}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={pizza.img} />
                                <Card.Body>
                                    <Card.Title>{pizza.name}</Card.Title>
                                    <Card.Subtitle className="mb-2">Ingredientes:</Card.Subtitle>
                                    {pizza.ingredients.map((ingredients)=>(
                                        <>
                                        <div className="ingredientes">
                                         <img className='img_pizzas' src={Imagenpizza}></img>
                                        <Card.Text className="text-muted">{ingredients}</Card.Text>
                                        </div>
                                        </>
                                    )
                                     )}
                                    
                                    <Card.Text>${pizza.price}</Card.Text>
                                    <Button variant="primary" onClick={()=>Buscar(pizza)}>Ver Mas</Button>
                                    <Button variant="danger" onClick={()=>Agregar(pizza)}>Agregar</Button>
                                </Card.Body>
                            </Card>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Home;