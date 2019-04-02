import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import {Button, Form, Item, Input, floatingLabel, Label} from 'native-base';
//import {NavigationActions} from 'react-navigation';
import * as firebase from 'firebase';



export default class Login extends React.Component {

constructor (props){
  super(props);
  this.state = ({
    email : '',
    password : '',
    name: '',
    lastName: '',
    ConfirmPassword: '',
  });

}

signupUser = (email, password) => {
  try{
    
    if(this.state.password.length < 6){
      alert("Input Password atleast 6 characters")
      return;
    }else if (this.state.password !== this.state.ConfirmPassword){
      Alert.alert("Confirm password mismatch")
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {Alert.alert("Success")})
    .then(() => this.props.navigation.navigate('Login'), 
            (error) => { Alert.alert(error.message); });
// firebase.auth().createUserWithEmailAndPassword(email, password)
  } catch(error){
    console.log(error.toString())
  }
}



  render() {
    const { navigate } = this.props.navigation;
      return (
      <View style = {styles.container}>
      <View style = {styles.logoContainer}>
      <Text style = {{color: '#fff'}}>Register</Text>
        
  <Form>

    <Item style={styles.inputBox}
        floatingLabel>
        <Label style = {styles.logText}>Name</Label>
      <Input
         style = {{color: '#fff'}}
         value = {this.state.name}
         autoCorrect = {false}
         autoCapitalize="none"
         onChangeText = {(name)=> this.setState({name})}
          />
    </Item>

    <Item style={styles.inputBox}
        
        floatingLabel>
        <Label style = {styles.logText}>Last Name</Label>
      <Input
         style = {{color: '#fff'}}
         value = {this.state.lastName}
         autoCorrect = {false}
         autoCapitalize="none"
         onChangeText = {(lastName)=> this.setState({lastName})}
          />
    </Item>


    <Item style={styles.inputBox}
        
        floatingLabel>
        <Label style = {styles.logText}>Email</Label>
      <Input
         style = {{color: '#fff'}}
         value = {this.state.email}
         autoCorrect = {false}
         autoCapitalize="none"
         onChangeText = {(email)=> this.setState({email})}
          />
    </Item>

    <Item style={styles.inputBox}
        
        floatingLabel>
        <Label style = {styles.logText}>Password</Label>
          <Input
         value = {this.state.password}
         autoCorrect = {false}
         autoCapitalize="none"
         secureTextEntry = {true}
         onChangeText = {(password) => this.setState({password})}
          />
    </Item>

    <Item style={styles.inputBox}
        
        floatingLabel>
        <Label style = {styles.logText}>Confirm Password</Label>
        <Input
         style = {{color: '#fff'}}
         autoCorrect = {false}
         autoCapitalize="none"
         secureTextEntry = {true}
        onChangeText = {(ConfirmPassword) => this.setState({ConfirmPassword})}
          />
    </Item>

  </Form>
        
        <Button style = {styles.button}
        
        onPress={this.signupUser}>
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
        <Button style = {styles.button}
        
        onPress={() => navigate('Login')}>
          <Text style={styles.buttonText}>Back</Text>
        </Button>
      </View>
      </View>
      );
  }
}
const styles = StyleSheet.create({
 
  container: {
        flex: 1,
        backgroundColor:'#35586C',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      paddingTop: 100,
     
    },
   logo: {
       width:280,
       height: 280,
    },
  
    logText: {
      color: 'rgba(255, 255, 255, 255)',
      marginBottom: 20,      
     // alignItems: 'center',
      justifyContent: 'center',
    },

    inputBox: {
      width: 300,
      height: 45,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      //fontSize: 15,
      marginVertical: 10,
    },
   
   button: {
    backgroundColor: '#73B1B7',
    width: 114,
    height: 40,
    marginVertical: 10,
    marginLeft: 100,
    textAlign: 'center',
    justifyContent: 'center'
   },

   SignButton:{
    width: 114,
    height: 40,
    marginVertical: 10,
    marginLeft: 100,
    color: "#fff", 
    fontSize: 15, 
    justifyContent: 'center'
   
   },
   buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: "#ffffff", 

   }
   

});
