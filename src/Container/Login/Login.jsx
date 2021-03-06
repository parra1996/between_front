import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//REDUX...
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

import './Login.css';

const Login = (props) => {

    let navigate = useNavigate();

    const [datosUsuario, setDatosUsuario] = useState({ usuario: "" });
    const [msgError2, setMsgError2] = useState("");



    //Funciones handlers
    const rellenarDatos = (e) => {
        setDatosUsuario({ ...datosUsuario, [e.target.name]: e.target.value })
    };

    //Funciones locales

    const login = async () => {

        try {

            let body = {
                usuario: datosUsuario.usuario,
            }
            let resultado = await axios.post("http://localhost:5000/usuarios/login", body);


            if (resultado.data === "Usuario inválido") {
                setMsgError2("Usuario o contraseña inválido")
            } else {
                setMsgError2("logegado con exito!")
                props.dispatch({ type: LOGIN, payload: resultado.data });
                setTimeout(() => {
                    
                    navigate("/");
                }, 2000);
            }

        } catch (error) {
            return(error)
        }
    };

    return (

        <div className='login'>
            <p>Debes estar logeado para poder ver a los superheroes de Marvel ;) </p>
            <div className="designFormulario">
                <div className="form">
                    <input type="text" name="usuario" id="usuario" placeholder="usuario" onChange={(e) => { rellenarDatos(e) }} /> <br />
                    {/* {msgError} */}
                    {msgError2}
                </div><br />
                <div className="bott">

                    <div color="teal" onClick={() => { login() }} >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );

};


export default connect()(Login);