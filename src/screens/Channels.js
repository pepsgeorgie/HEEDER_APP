import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Card, CardItem, Button} from 'native-base';
import AddClassScreen from '../CrudScreens/AddClassScreen';
import * as firebase from 'firebase';


export default class Channels extends React.Component {

  onSignoutPress = () => {
    firebase.auth().signOut();
  }
    render() {
        return (
          <View style = {styles.container}>
            {/* <Text>Channel</Text>
            <Button title= "Logout"
            onPress ={() => firebase.auth().signOut()
              // .then(() => {Alert.alert('Logout na')})
            .then (() => this.props.navigation.navigate('Login'))}
              transparent
              style = {{color: '#fff'}}>
              <Text style={styles.label}>Logout</Text>
            </Button> */}
            <Card>
              <CardItem>
                <Button 
                onPress ={() =>this.props.navigation.navigate('AddClassScreen')}
                transparent
                primary>
                  <Text>Add Class</Text>
                </Button>
              </CardItem>
            </Card>

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
  text : {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50
  }
});
