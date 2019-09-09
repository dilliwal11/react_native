import React, {Component} from 'react';
import {Button,CardSection,Card} from './common';
import Firebase from 'firebase';
import EmployeeForm from './EmployeeForm';



class EmployeeCreate extends Component {

    state = {name:'',phone:'',shift:''};

   

    render (){
        console.log("hello")
        return(

          <Card>
            <EmployeeForm {...this.props}/>
            
        </Card>
        );

       
    }

    

}


export default EmployeeCreate;