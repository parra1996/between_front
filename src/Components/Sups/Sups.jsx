import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MOVIE_DETAIL } from '../../redux/types';
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
                console.log(resultado.data, "ESTO ES RESSSSS")
                if(resultado.data.descripcion === ""){
                    resultado.data.descripcion = "No hay descripcion"
                }
                setSupers(resultado.data)
            } else {
                setSupers("hubo un error al renderizar los supers")
            }
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    }

    const escogePelicula = (pelicula) => {
        
        console.log(pelicula);
        props.dispatch({type:MOVIE_DETAIL, payload: pelicula});


        navigate("/super_detallado");
        
    }

    if(supers[0]?.id !== undefined){
        return(
            <div className="sups">

                {
                    supers.map(superheroe => {
                        return (
                            <div className='' key={superheroe.id} onClick={()=>escogePelicula(superheroe)}>
                                <img className='imagen' src={`${superheroe.imagen}.${superheroe.extension}`} alt={superheroe.nombre}/> <br/>
                                {superheroe.nombre}
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }else{
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