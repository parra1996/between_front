
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import './Fav.css';

const Fav = (props) => {

    const [mensaje, setMensaje] = useState('');
    let navigate = useNavigate();

    const fav = async () => {
        
        let body = {
            superId: props.superId,
            usuarioId: props.usuarioId,
        }

        console.log(body);

        try {

            let res = await axios.post("http://localhost:5000/favs",body);

            if(res){
                console.log(res);
                setMensaje("le has dado a favorito");

                setTimeout(() => {
                    navigate("/");
                }, 2000);
                
            }else{
                setMensaje("no se ha podido dar a favorito");
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="meGusta" onClick={()=>fav()}>Fav</div>
    )
}

export default Fav;