import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default class TestChannel extends React.Component{

    render(){
        <View style = {styles.container}>
            <Text>TestChannel</Text>
        </View>
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }

})