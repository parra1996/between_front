import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SUPER_DETAIL } from '../../redux/types';
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import './Sups.css'


const Sups = (props) => {

    let navigate = useNavigate();

    const [supers, setSupers] = useState([]);

    useEffect(() => {
        traer_sups();
    }, []);

    useEffect(() => {

    }, [supers]);

    const traer_sups = async (req, res) => {

        try {
            let resultado = await axios.get("http://localhost:5000/supers/traer")

            if (resultado) {
                if (resultado.data.descripcion === "") {
                    resultado.data.descripcion = "No hay descripcion"
                }
                setSupers(resultado.data)
            } else {
                setSupers("hubo un error al renderizar los supers")
            }
        } catch (error) {
            res.send(error)
        }
    }

    const escogePelicula = (pelicula) => {

        props.dispatch({ type: SUPER_DETAIL, payload: pelicula });


        navigate("/super_detallado");

    }

    if (supers[0]?.id !== undefined) {
        return (
            <div className="sups">

                <ul>
                    {
                        supers.map(superheroe => {
                            return (
                                <div className='lista' key={superheroe.id} onClick={() => escogePelicula(superheroe)}>
                                    <li>{superheroe.nombre}</li>
                                </div>
                            )
                        })
                    }
                </ul>

            </div>
        )
    } else {
        return (
            <div className=''>
                <div className="">
                    CARGANDO
                </div>
            </div>
        )
    }

}

export default connect()(Sups);