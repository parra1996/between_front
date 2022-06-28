
import {combineReducers} from 'redux';

import credentials from './datosLogin-reducer';
import search from './busquedaSups-reducer';

const rootReducer = combineReducers({
    credentials,
    search
});

export default rootReducer;