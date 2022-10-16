import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';

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
                            <h5>{pizza.desc}</h5>
                            <h5>Ingredientes</h5>
                            <Button variant="danger" >Añadir</Button>
                        </div>
                    </>

                ))}


            </div>
        </>
    )
}
export default VerPizza;