import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Profile extends React.Component {
    static navigationOptions = {
       headerStyle: {
           backgroundColor: 'white'
       }
    };

    render() {
        return (
        <View style={styles.container}>
        <Text>Profile Here</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
       
    },
    text : {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 50
    }
  });
  
export default Profile;