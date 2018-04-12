import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => (
    <Router>
        <Scene key="root" hideNavBar>

            <Scene key="auth">
                <Scene
                    component={LoginForm}
                    key="login"
                    title="Please Login"
                />
            </Scene>

            <Scene key="main">
                <Scene
                    key='employeeList'
                    component={EmployeeList}
                    title="Employees"

                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                />

                <Scene
                    key='employeeCreate'
                    component={EmployeeCreate}
                    title="Create Employee"
                />

            </Scene>

        </Scene>
    </Router>
);

export default RouterComponent;