import React, {Component} from 'react';
import Firebase from 'firebase';
import {View, Text, Picker} from 'react-native';
import {CardSection, Input,Button,Card} from './common';
import {Actions} from 'react-native-router-flux';

class EmployeeEdit extends Component {

    state = {name:'',phone:'',shift:'', id:''};


    componentDidMount () {
        //console.log(this.props.emp);
        const {name, phone, shift, id} =  this.props.employee;
        this.setState({name,phone,shift, id});




    }


    onButtonPress (){
       
        const {name,phone,shift, id} = this.state;
        //this.setState({name:this.childData.name});
        const { currentUser } = Firebase.auth();
        Firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`).set({name,phone,shift}).then(()=>console.log('saved!'));
        
       // console.log (shift || 'Monday');
       




    }
   









    render(){

        
        return(
         
                <Card>
            <CardSection>
                    <Input
                    lebal = "Name"
                    placeholder = "Mahesh"
                    value = {this.state.name}
                    onChangeText = {name =>{this.setState({name})}}
                    />
                </CardSection>      
                <CardSection>
                    <Input 
                    lebal = "Phone"
                    placeholder = "555-555-5555"
                    value = {this.state.phone}
                    onChangeText = {phone =>{this.setState({phone})}}
                    />
                </CardSection>
    
                
    
                <CardSection style = {{flexDirection: 'column'}}>
                    <Text style = {styles.pickerTextStyle}> Shift </Text>
                    <View style={{ 
                        justifyContent: 'flex-start', 
                        flexDirection: 'row', 
                        position: 'relative', 
                        paddingLeft: 15, 
                        paddingRight: 15 }}>
                    <Picker 
    
                    style = {{flex:1}}
                    selectedValue = {this.state.shift}
                    onValueChange = {shift => this.setState({shift})}
                    >
                        <Picker.Item label = "Monday" value = "Monday"/>
                        <Picker.Item label = "Tuesday" value = "Tuesday"/>
                        <Picker.Item label = "Wednesday" value = "Wednesday"/>
                        <Picker.Item label = "Thurday" value = "Thurday"/>
                        <Picker.Item label = "Friday" value = "Friday"/>
                        <Picker.Item label = "Saturday" value = "Saturday"/>
                        <Picker.Item label = "Sunday" value = "Sunday"/>
                                        </Picker>
                                        </View>
                </CardSection>
                <CardSection>
                    <Button onButtonpressed = {this.onButtonPress.bind(this)}>
                        Update
                    </Button>
                </CardSection>
               </Card>
                     
        );
    }




 
};


const styles = {
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
}

export default EmployeeEdit;