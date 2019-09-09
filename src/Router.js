import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { Actions } from 'react-native-router-flux';

import DusraPage from './DusraPage';

//import LoginForm from './components/LoginForm';

const RouterComponent = () => {

console.log("router")
    return (
        <Router>
            <Scene key = "root" hideNavBar titleStyle={{textAlign: 'center', flex: 1}} >
                <Scene key = "auth">
                <Scene key = "login" component = {LoginForm}  title = {"Please Login"} initial/>
                </Scene>
                <Scene key = "main">
                     <Scene key = "empl"
                     rightTitle = "Add"
                     onRight = {()=>{Actions.createEmpl()}}
                    component = {EmployeeList}  title = {"inki list"} />
                    <Scene key = "createEmpl"
                    title = "Employee Create"
                    component = {EmployeeCreate}
                    />
                    <Scene key = "employeeEdit" title = "Edit Employee" component = {EmployeeEdit}/ >

                </Scene>
            </Scene>

        </Router>

    );




};

export default RouterComponent;