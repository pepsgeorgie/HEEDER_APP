import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Logo extends React.Component {
    render() {
        return (
         <View style = {styles.container}>
          <View style = {styles.logoContainer}>
           <Image 
           style = {styles.logo} 
           source={require('../images/logo-02.png')}/>
          </View>
         </View>
        );
    }
  }

  const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'    
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        paddingTop: 270,
       
    },
     logo: {
         width:280,
         height: 280,
    },

   
 
});