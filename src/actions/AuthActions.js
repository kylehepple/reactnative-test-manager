import firebase from 'firebase';

import { 
    EMAIL_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED
} from './AuthTypes';

/**
 * 'emailChanged' action.
 * Dispatch the 'EMAIL_CHANGED' action with the new email text.
 * 
 * @param {string} text 
 */
export const emailChanged = (text) => {

    return {
        payload: text,
        type: EMAIL_CHANGED
    };

};

/**
 * 'passwordChanged' action.
 * Dispatch the 'PASSWORD_CHANGED' action with the new password text.
 * 
 * @param {string} text 
 */
export const passwordChanged = (text) => {

    return {
        payload: text,
        type: PASSWORD_CHANGED
    };

};

/**
 * 'loginUser' action.
 * Login the user with their email and password. 
 * If the user does not exist, attempt to create an account.
 * 
 * @param {Object} credentials An object containing the 'email' and 'password'
 */
export const loginUser = ({ email, password }) => {

    return async (dispatch) => {

        dispatch({ type: LOGIN_USER });

        try {

            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    
            loginUserSuccess(dispatch, user);
    
        } catch (e) {

            if (e.code == 'auth/user-not-found') {
                createUser(dispatch, { email, password });
            } else {
                loginUserFailure(dispatch, e.message);
            }
            
        }

    };

};

/* Helper Functions */

/**
 * Create a user using an email and password.
 * On success call #loginUserSuccess.
 * On failure dispatch an 'LOGIN_USER_FAIL' containing an error message.
 * 
 * @param {ReduxThunk.dispatch} dispatch The dispatch function from the action
 * @param {Object} credentials An object containing the 'email' and 'password'
 */
const createUser = async (dispatch, { email, password }) => {

    try {

        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);

        loginUserSuccess(dispatch, user);

    } catch (e) {
        loginUserFailure(dispatch, e.message);
    }

};

/**
 * Dispatch a 'LOGIN_USER_FAIL' action containing the error message.
 * 
 * @param {ReduxThunk.dispatch} dispatch The dispatch function from the action
 * @param {string} error The error message to dispatch
 */
const loginUserFailure = (dispatch, error) => {

    dispatch({
        payload: error,
        type: LOGIN_USER_FAIL
    });

};

/**
 * Dispatch a 'LOGIN_USER_SUCCESS' action containing the user.
 * 
 * @param {ReduxThunk.dispatch} dispatch The dispatch function from the action
 * @param {Object} user The user's values passed back from firebase
 */
const loginUserSuccess = (dispatch, user) => {

        dispatch({
            payload: user,
            type: LOGIN_USER_SUCCESS
        });

};