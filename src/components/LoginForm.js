import React, {Component} from 'react';
import Firebase from 'firebase';
import {Text} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {Button, Card, CardSection, Input, Spinner} from './common';


class LoginForm extends Component {
    state = {email:'', password:'', error:'', loading: false};

    onButtonPress (){
       
        console.log("pree");
        this.setState ({error:'', loading:true});
       const {email, password} = this.state;
            Firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch (()=>{
                Firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
                .catch(
                       this.onLoginFail.bind(this)
                );
            });
    }

    onLoginFail(){
       
        this.setState({error:'Authentication failed', loading:false});
    }
    onLoginSuccess(){
        this.setState ({
            email:'',
            password:'',
            loading: false,
            error:''
        });

        Actions.main();



    }
    renderButton () {
        if (this.state.loading)
        {
            return <Spinner size = "small"/>
        }

        return (
            <Button onButtonpressed = {this.onButtonPress.bind(this)} >
                    Log In
                </Button>
        );
    }



    render () {
        console.log("login form");
        
        return(
            <Card>
            <CardSection>
                <Input
                placeholder = "abc@gmail.com"
                lebal = "Email"
                value= {this.state.email}
                onChangeText= {email => this.setState({email}) } 
                />
                </CardSection>
            <CardSection>
                <Input
                placeholder = "password"
                secureTextEntry
                lebal = "Password"
                value = {this.state.password}
                onChangeText = {password => this.setState({password})}
                
                />

                </CardSection>
                <Text style = {styles.errorTextStyle}>
                    {this.state.error}
                </Text>
            <CardSection> 
                {this.renderButton()}
            </CardSection>
            </Card>
        );
    }



}

const styles = {

    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }

};



export default LoginForm;