import { EMPLOYEE_UPDATE } from '../actions/EmployeeTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { payload, type }) => {

    switch (type) {

        case EMPLOYEE_UPDATE: 
            return { 
                ...state, 
                [payload.property]: payload.value 
            };

        default: return state;

    }

};