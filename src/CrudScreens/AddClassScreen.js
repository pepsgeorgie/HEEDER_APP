import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import {Button, Form, Item, Input, floatingLabel, Label, InputGroup} from 'native-base';
import * as firebase from 'firebase';



export default class Login extends React.Component {

    constructor (props){
        super(props);
        this.state = ({
            channelName: '',


        });
    }

render(){
<View style = {styles.container}>

    <Form>
        <Item>
        <InputGroup>
        <Label>Name</Label>
            <Input
            value = {this.state.channelName}
            style = {{color: '#fff'}}
            autoCapitalize = "none"
            autoCorrect= {false}>

            </Input>
        </InputGroup>
        </Item>

        <Item>
        <InputGroup>
        <Label>Name</Label>
            <Input
            //set.State to return the value of the inputed channel name to channelName variable
            value = {this.state.channelName}
            style = {{color: '#fff'}}
            autoCapitalize = "none"
            autoCorrect= {false}
            onChangeText = {(channelName) => this.setState({channelName})}>

            </Input>
        </InputGroup>
        </Item>

    </Form> 
        <Button
        //confirm button to add new channel in crud (add function here)
        transparent
        //temporray navigation
        onPress = {() =>this.props.navigation.navigate('Channels')}
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
