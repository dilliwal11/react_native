import React, {Component} from 'react';
import firebase from 'firebase';
import {Text,View} from 'react-native';
import LoginForm from './components/LoginForm';
import DusraPage from './DusraPage';
import { Header, Button, Spinner, CardSection, Card }   from './components/common';
import { Actions } from 'react-native-router-flux';
import EmployeeList from './components/EmployeeList';
import Router from './Router';
class App extends Component {

    state = {loggedIn:null};

    componentWillMount () {
        firebase.initializeApp({
            apiKey: "AIzaSyBKNudfb-OtqAbq-iKRGKXMGalZClv5W4Y",
            authDomain: "authentication-a4e18.firebaseapp.com",
            databaseURL: "https://authentication-a4e18.firebaseio.com",
            projectId: "authentication-a4e18",
            storageBucket: "authentication-a4e18.appspot.com",
            messagingSenderId: "885956996268",
            appId: "1:885956996268:web:26084718f2506bc8"
          });



          firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                
                this.setState({loggedIn:true});
                
            }
            else {
                this.setState({loggedIn:false});
                
            }



          });
    }


   /* buttonLogout (){

        firebase.auth().signOut();
        console.log("did you "+ this.state.loggedIn);
    }*/
    buttonLogout (){

        firebase.auth().signOut();
        
    }
   
    renderContent (){
        switch (this.state.loggedIn){
            case true:
                console.log("i am after login ?")
                return (
                    <Card>
                    <CardSection>
                    <Button onButtonpressed = {this.buttonLogout.bind(this)} >
                    Log Out</Button>
                    <Text onPress = {()=>{Actions.empl()}} >
                    Next</Text>
                    </CardSection>
                    </Card>
                  //<Router/>
                
                );

            case false:
                console.log("sup!");
                return ( <Router/>);
            default:
                return <Spinner size = 'large'/>;
        }



    }


    render (){
        return (
           <Router/>
           //   this.renderContent()
           
        );
    }
}

export default App;
