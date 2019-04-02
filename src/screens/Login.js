import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import {Button, Form, Item, Input, floatingLabel, rounded, Label} from 'native-base';
import * as firebase from 'firebase';



export default class Login extends React.Component {

constructor (props){
  super(props);
  this.state = ({
    email : '',
    password : '',
  });

}


onloginUser = () => {

  // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  // .then(() => this.props.navigation.navigate('HomeScreen'))
  // .catch(error => this.setState({ errorMessage: error.message }))  

  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => this.props.navigation.navigate('HomeScreen'),
  (error) => { 
    Alert.alert(error.message); 
  });
}

  render() {
    const { navigate } = this.props.navigation;
      return (
      <View style = {styles.container}>
      <View style = {styles.logoContainer}>
      <Image style = {styles.logo} source={require('../images/logo-02.png')}/>

        <Form>
        <Item style={styles.inputBox}
        rounded
        floatingLabel>
        <Label style = {{color: '#fff'}}>Email</Label>
          <Input
         value = {this.state.email}
         autoCorrect = {false}
         autoCapitalize="none"
         onChangeText = {(email)=> this.setState({email})}
          />
        </Item>

        <Item style={styles.inputBox}
        rounded
        floatingLabel>
        <Label style = {{color: '#fff'}}>Password</Label>
          <Input
         value = {this.state.password}
         autoCorrect = {false}
         autoCapitalize="none"
         secureTextEntry = {true}
         onChangeText = {(password) => this.setState({password})}
          />
        </Item>

        </Form>
        
        <Button style = {styles.button}
        rounded
        onPress={this.onloginUser}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>

        <Button style = {styles.SignButton} 
        onPress={() => navigate('Register')}
        transparent >
          <Text style={styles.buttonText}>Sign Up</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      paddingTop: 100,
     
    },
   logo: {
       width:280,
       height: 280,
    },
  
    logText: {
      fontSize: 15,
      color: 'rgba(255, 255, 255, 255)',
      paddingBottom: 20,      
      justifyContent: 'center',
      alignSelf: 'center',
    },

    inputBox: {
      width: 300,
      height: 45,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      fontSize: 15,
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
