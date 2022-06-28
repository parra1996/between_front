
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import "./Perfil.css";

const Perfil = (props) => {

    const [favs,setFavs] = useState([]);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        mostrar_favs();

    }, [])

    useEffect(() => {

    });



    const mostrar_favs = async () => {
        let id = props.credentials.usuario.id;

        let res = await axios.get(`http://localhost:5000/favs/${id}`);


        setFavs(res.data);
    }

    const borrar_fav = async (id) => {
         await axios.delete(`http://localhost:5000/favs/${id}`);
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
                    <h1>Lista de tus favs, {props.credentials.usuario.nombre}</h1>
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
                {mensaje}
            </div>

            <div>

            </div>
        </div>
    )


}

export default connect((state) => ({
    credentials: state.credentials
}))(Perfil);