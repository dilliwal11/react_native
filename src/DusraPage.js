import React, {Component} from 'react';
import {Text,View} from 'react-native';
import firebase from 'firebase';
import {Button,CardSection,Card} from './components/common';
import { Actions } from 'react-native-router-flux';
class DusraPage extends Component{
    render (){
    return (

        <Card>
        <CardSection>
        <Button onButtonpressed = {this.buttonLogout.bind(this)} >
        Log Out</Button>
        <Text onPress = {()=>{Actions.empl()}} >
        Next</Text>
        </CardSection>
        </Card>
        
    );
    
    }
    buttonLogout (){

        firebase.auth().signOut();
        
    }
    
}; 

export default DusraPage;

