
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Fav from '../../Components/Fav/Fav';

import './Super_detallado.css';

const Super_detallado = (props) => {

    let navigate = useNavigate();

    useEffect(() => {

        // if (props.search?.nombre === undefined) {
        //     navigate('/');
        // }
    });

    return (
        <div className='super_detallado'>
                <div className="carta">
                    <div>Nombre: {props.search.nombre}</div>
                    <div>Descripcion: {props.search.descripcion}</div>
                    <div>Numero de comics en el que aparece: {props.search.n_comics}</div>
                    <div>Nombre de los comics: {props.search.comics}</div>
                    <div>
                        {
                           <Fav superId={props.search.id} usuarioId={props.credentials.usuario.id} />
                        }
                    </div>
                </div>
                <div className="">
                    <img className='imagen_sup' src={`${props.search.imagen}.${props.search.extension}`} alt={props.search.titulo} />
                </div>
        </div>
    )

}

export default connect((state) => ({
    credentials: state.credentials,
    search: state.search
}))(Super_detallado);
