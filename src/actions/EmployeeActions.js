import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE 
} from './EmployeeTypes';


export const employeeCreate = ({ name, phone, shift }) => {

    const { currentUser } = firebase.auth();
    
    return async (dispatch) => {
        await firebase.database().ref(`/users/${currentUser.uid}/employees`).push({
            name, 
            phone, 
            shift
        });
        Actions.pop();
        dispatch({ type: EMPLOYEE_CREATE });
    };

};

export const employeeUpdate = config => ({
    payload: config,
    type: EMPLOYEE_UPDATE
});