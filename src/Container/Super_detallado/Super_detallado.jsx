
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Super_detallado.css';

const Super_detallado = (props) => {

    let navigate = useNavigate();

    useEffect(() => {

        if (props.search?.name === undefined) {
            navigate('/');
        }
    });

    return (
        <div className='designFilm'>
            <div className='cuadroGeneral'>
                <div className="filmDetailHalf">
                    <div className="dataFilm"><p className='tituloPel'>{props.search.name}</p></div>
                    <div className="dataFilm"><p className='sinopsisPel'>{props.search.description}</p></div>
                    <div className="dataFilm">
                        {
                            //EN CASO DE QUE TOKEN SEA TRUE, SI SE INCLUYE EL ELEMENTO RENT
                            // props.credentials.token && <Rent id={props.search.id} token={props.credentials.token} idUser={props.credentials.usuario.id} />
                        }
                    </div>
                </div>
                <div className="filmDetailHalf right">
                    <img className='cartel2' src={props.search.image} alt={props.search.titulo} />
                </div>
            </div>
        </div>
    )

}

export default connect((state) => ({
    credentials: state.credentials,
    search: state.search
}))(Super_detallado);
