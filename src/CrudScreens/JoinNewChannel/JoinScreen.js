//input channel unique ID, the user must have unique ID 
import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import {Button, Form, Item, Input, floatingLabel, Label, InputGroup} from 'native-base';
//import TestChannel from '../TestChannel';
import * as firebase from 'firebase';



export default class JoinScreen extends React.Component {

    constructor (props){
        super(props);
        this.state = ({
            channelCode: '',


        });
    }

    channelCodeHandling = () => {
        try{
            if(this.state.channelCode.length > 10){
                Alert.alert("coder error: code has only 10 characters")
                return;
            } else{
                Alert.alert("Success").then (() => this.props.navigation.navigate('TestChannel'))
                return;
            }

        }catch(error){
            console.log(error.toString())
        }
    }
render(){
<View style = {styles.container}>

    <Form>
        <Item>
        <InputGroup>
        <Label>Input Class Code</Label>
            <Input
            value = {this.state.channelCode}
            style = {{color: '#fff'}}
            autoCapitalize = "none"
            autoCorrect= {false}
            onChangeText={(channelCode) => { this.setState({channelCode}) }}>

            </Input>
        </InputGroup>
        </Item>

    </Form> 
        <Button
        //confirm button (add function here)
        transparent
        //temporray navigation
        onPress = {this.channelCodeHandling}
        //logic to redirect user in to the channel
        >
        <Text style={{color:'#fff'}}>Confirm</Text>
        </Button>

    </View>
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
   

});

