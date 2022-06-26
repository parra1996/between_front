import React,{useEffect,useState} from 'react';

import Sups from '../../Components/Sups/Sups';
import { connect } from 'react-redux';
import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = (props) => {
    let navigate = useNavigate();
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        if (props.credentials.usuario !== null) {
            setMensaje(`Bienvenido ${props.credentials?.usuario.nombre} ${props.credentials?.usuario.apellido}`);
        }else {
            navigate("/register");

        }
    }, []);

    useEffect(() => {
        
    }, [mensaje]);


    return (
        <div className='home'>
            {mensaje}
            <Sups />
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials,
}))(Home);
