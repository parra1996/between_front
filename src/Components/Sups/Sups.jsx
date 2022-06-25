import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MOVIE_DETAIL } from '../../redux/types';

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
            let res = await axios.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=477572bbc4000049e3379ce86acc7407&hash=2122799baa4ed02346ae71808f7c6260")

            if (res) {
                console.log(res, "ESTO ES RESSSSS")
                setSupers(res.data.data.results)
            } else {
                setSupers("hubo un error al renderizar los supers")
            }
        } catch (error) {
            res.send(error)
        }
    }

    const escogePelicula = (superheroe) => {
        
        console.log(superheroe);
        props.dispatch({type:MOVIE_DETAIL, payload: superheroe});


        navigate("/");
    }

    if(supers[0]?.id !== undefined){
        return(
            <div className="">

                {
                    supers.map(superheroe => {
                        return (
                            <div className='' key={superheroe.id} onClick={()=>escogePelicula(superheroe)}>
                                {superheroe.name}
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
export default Sups;