
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import axios from 'axios';

import "./Perfil.css";

const Perfil = (props) => {

    const [favs,setFavs] = useState([]);
    const [mensaje, setMensaje] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        mostrar_favs();

    }, [])

    useEffect(() => {

    });



    const mostrar_favs = async () => {
        let id = props.credentials.usuario.id;

        let res = await axios.get(`http://localhost:5000/favs/${id}`);

        console.log(res.data, "ESTO ES FAVS");
        console.log(id, "ESTO ES id");

        setFavs(res.data);
    }

    const borrar_fav = async (id) => {
        let res = await axios.delete(`http://localhost:5000/favs/${id}`);
        console.log(res.data, "ESTO ES FAVS");
        setMensaje("Se ha borrado el fav");
        mostrar_favs();
    }

    return (
        <div className="perfil">
            <div className="">
                <div className='recuadro'>
                <div className="profileField "><b>Nombre: </b>{props.credentials.usuario.nombre}</div>
                <div className="profileField "><b>Apellidos: </b>{props.credentials.usuario.apellido}</div>
                </div>
            </div>
            <div className="designProfileHalf profileRight">
                <div>
                    <p>Lista de tus favs, {props.credentials.usuario.nombre}</p>
                    {
                        favs.map(data => {
                            return (
                                    <div className="" key={data.id}>
                                            Nombre del super: {data.nombre}. 
                                            <div className="borrar" onClick={()=>borrar_fav(data.id)}></div>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>

            <div>

            </div>
        </div>
    )


}

export default connect((state) => ({
    credentials: state.credentials
}))(Perfil);