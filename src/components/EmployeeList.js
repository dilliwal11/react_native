import React, {Component} from 'react';
import {View,Text, ListView} from 'react-native';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

import firebase from 'firebase';
import ListItem from './ListItem';
import { CardSection } from './common';



class EmployeeList extends Component {
    constructor (){
        super();
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2});
        this.state = {
            itemDataSource:ds
        }

        this.itemRef = this.getRef();
        
    }


    getRef(){
        const {currentUser} = firebase.auth();
        return firebase.database().ref(`/users/${currentUser.uid}/employees`);
    }

    
    componentWillMount() {
        this.getItems(this.itemRef);
            }

  
        getItems (itemRef){
            //let items = [{abc:'Item One'},{abc:'Item two'}];
            itemRef.on('value',snapshot =>{ 
              //  let e = snapshot.toJSON();
              // console.log(e.key)
              
                let employee = [];
                snapshot.forEach((child) => {
                   //console.log(child.val().name)
                    employee.push({
                        name:child.val().name,
                        phone:child.val().phone,
                        shift:child.val().shift,
                        id:child.key
                    }
                        
                        //id:child.val().id 

                    );
                });
                this.setState({
                    itemDataSource:this.state.itemDataSource.cloneWithRows(employee)
                });
    
                });
                            }


            renderRow(emp){
                //console.log(this.state.itemDataSource)
                //console.log(emp);
                return(
                    <ListItem employee = {emp} />
                )


            }

render (){
    
        return (
          
			<ListView
            enableEmptySections
                dataSource={this.state.itemDataSource}
               renderRow={this.renderRow.bind(this)}
				
			/>
		);
    
    }




}



export default EmployeeList;