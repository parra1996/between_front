import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sups = (props) => {
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
                setSupers(res.data)
            } else {
                setSupers("hubo un error al renderizar los supers")
            }
        } catch (error) {
            res.send(error)
        }
    }

    return (
        <div className='Sups'>

            QUE BUEN FOLLAO COÑO
        
            {/* {
                supers.map(resultado => (

                    <div className='mapeo' key={resultado.id}>
                        <p>{resultado.data}</p>
                    </div>

                ))

            } */}
            
           
        </div>
    )

}
export default Sups;