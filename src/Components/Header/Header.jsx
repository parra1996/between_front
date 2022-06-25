
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';




import './Header.css';

const Header = (props) => {

    let navigate = useNavigate();

    // const [nombre, setNombre] = useState("");

    useEffect(() => {
    })

    
    const navegar = (lugar) => {

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

    const logOut = () => {
        props.dispatch({ type: LOGOUT });

        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

   

    
    if (!props.credentials?.usuario !== undefined) {
        return (
            <div className='header' >
                <div className="headercitos" onClick={()=>navigate('/')}>
                   Home
                </div>
                <div className="headercitos">
                <div color='teal' style={{pointer:'cursor'}} onClick={() => navegar("/login")}>Login</div>&nbsp;
                <div color='teal' style={{pointer:'cursor'}} onClick={() => navegar("/register")}>Register</div> 
                </div>
                <div className="headercitos">
                </div>
            </div>
        )
    } else {
        return (
            <div className='header'>
                <div className="headercitos"  onClick={()=>navigate('/')} >
                   Home
                </div>
                <div className="headercitos">
                <div color="teal" style={{pointer:'cursor'}} onClick={() => navegar("/perfil")}>{props.credentials?.usuario.nombre} {props.credentials?.usuario.apellido}</div>&nbsp;
                <div color="teal" style={{pointer:'cursor'}} onClick={() => logOut()}>LogOut</div>&nbsp;
                </div>
                <div className="headercitos"></div>
            </div>
        )
    }
}

export default connect((state) => ({
    credentials: state.credentials,
    search: state.search
}))(Header);