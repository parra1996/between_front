import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import './Register.css';

const Register = () => {


    let navigate = useNavigate();

    //Hooks

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: "", apellido: "", usuario: "", 
    });

    const [msgError, setMsgError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
    }, []);

    useEffect(() => {

    })

    const rellenarDatos = (e) => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        })
    };

    const registrame = async () => {


        setMsgError("");
        let error = "";



        if (datosUsuario.contrasena !== datosUsuario.contrasena2) {

            return (setMsgError("Los dos contraseñas deben de coincidir"));

        } else {
            setMsgError("");
        }

        let body = {
            nombre: datosUsuario.nombre,
            apellido: datosUsuario.apellido,
            usuario: datosUsuario.usuario,
            
        }
        try {

            let resultado = await axios.post("http://localhost:5000/usuarios", body);

            if (resultado.data.error) {

                setMsgError(resultado.data.error);
            } else {
                setMsg("registrado con exito")
            }

            setTimeout(() => {
                navigate('/login');
            }, 3000);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='register'>

            <input variant="default" style={{ padding: '.5em' }} name="nombre" placeholder="nombre" color='teal' onChange={(e) => { rellenarDatos(e) }} />
            <input variant="default" style={{ padding: '.5em' }} name="apellido" placeholder="apellido" color='teal' onChange={(e) => { rellenarDatos(e) }} />
            <input variant="default" style={{ padding: '.5em' }} name="usuario" placeholder="usuario" color='teal' onChange={(e) => { rellenarDatos(e) }} />
            <div color="teal" radius="md" size="md" onClick={() => registrame()}>
                registrame
            </div> <br />
            <p> {msgError} </p>
            <p> {msg} </p>
        </div >
    )
}

export default Register;