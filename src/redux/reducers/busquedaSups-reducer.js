import {SUPER_DETAIL,MOVIES_TITLE} from '../types';

const initialState = {
    film: {},
    peliculas : []
};

const busquedaSupsReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case SUPER_DETAIL :
            return action.payload;

        case MOVIES_TITLE :
            return {...state, peliculas: action.payload};

        default :
            return state
    }
}

export default busquedaSupsReducer;