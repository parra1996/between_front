
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import './Fav.css';

const Fav = (props) => {

    const [mensaje, setMensaje] = useState('');

    const [liked,setLiked] = useState(false);

    
    const handleclik = ()=> {
        setLiked(true);
    }

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
                setLiked(true);

                handleclik();
            }else{
                setMensaje("no se ha podido dar a favorito");
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        
        <div style={{
            height: "3em",
            width: "3em",
            backgroundColor: liked ? 'red' : 'transparent',
            border : '1px solid black',
            color: liked ? 'white' : 'black',
        }} onClick={()=>fav()}>Fav</div>


       

        
    )
}

export default Fav;