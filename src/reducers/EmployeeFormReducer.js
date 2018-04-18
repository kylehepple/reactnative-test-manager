import { 
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE 
} from '../actions/EmployeeTypes';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, { payload, type }) => {

    switch (type) {

        case EMPLOYEE_CREATE: return { ...INITIAL_STATE };

        case EMPLOYEE_UPDATE: 
            return { 
                ...state, 
                [payload.property]: payload.value 
            };

        default: return state;

    }

};