import { 
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    employees: {}
};

export default (state = INITIAL_STATE, { payload, type }) => {

    switch (type) {

        case EMPLOYEES_FETCH_SUCCESS: 
        console.log(payload);
        return { 
            ...state, 
            employees: payload 
        };

        default: return state;

    }

};