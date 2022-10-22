import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Imagenpizza from '../assets/imgs/pizza.png';

const VerPizza = () => {
    const endpoint = "/pizzas.json";
    const [listafiltrada, setfiltroPizza] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const Datos = async () => {
            let urlFiltro = endpoint;
            const resp = await fetch(urlFiltro);
            const respDatos = await resp.json();
            console.log(respDatos.filter(el => el.id === id));
            setfiltroPizza(respDatos.filter(el => el.id === id));
        }
        Datos();
    }, [])

    return (
        <>

            <div className="pizza_container">
                {listafiltrada.map((pizza) => (
                    <>
                        <div className="foto">
                           <img className="fotodet_img" src={pizza.img} alt="" />
                        </div>
                        <div className="texto">
                            <h2>{pizza.name}</h2>
                            <h6>{pizza.desc}</h6>
                            <h5>Ingredientes</h5>
                            {pizza.ingredients.map((ingredients)=>(
                                        <>
                                        <div className="ingredientes">
                                         <img className="img_pizzas2" src={Imagenpizza}></img>
                                        <h6 className="text-muted">{ingredients}</h6>
                                        </div>
                                        </>
                                    )
                                     )}
                             <h4>Precio $ {pizza.price}</h4>      
                            <Button variant="danger" >Añadir</Button>
                        </div>
                    </>

                ))}


            </div>
        </>
    )
}
export default VerPizza;