import { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import { useNavigate} from "react-router-dom";

const Home = () => {
    const endpoint = "/pizzas.json";
    const [listadoPizza, setPizza] = useState([]);
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const irADetalle = (lista) => {
        navigate(`/pizza/${lista.id}`);
        if (lista.id=="")
        { alert("seleccione un valor")}
        console.log(lista.id)
        };
    
        const Buscar=(arreglo)=>{
           
            console.log(arreglo.id)
            irADetalle(arreglo);
        }   
        const Agregar=(e)=>{
            e.preventDefault();
            navigate(`/carrito`);
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
                                    <Card.Subtitle className="mb-2 text-muted">Ingredientes:</Card.Subtitle>
                                    <Card.Text>{pizza.ingredients}</Card.Text>
                                    <Card.Text>${pizza.price}</Card.Text>
                                    <Button variant="primary" onClick={()=>Buscar(pizza)}>Ver Mas</Button>
                                    <Button variant="danger" onClick={Agregar}>Agregar</Button>
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