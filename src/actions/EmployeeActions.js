import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';


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

export const employeeUpdate = (config) => ({
    payload: config,
    type: EMPLOYEE_UPDATE
});

export const employeesFetch = () => {

    const { currentUser } = firebase.auth();

    return async (dispatch) => {

        await firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', (snapshot) => {
                dispatch({ payload: snapshot.val(), type: EMPLOYEES_FETCH_SUCCESS });
            });

    };

};