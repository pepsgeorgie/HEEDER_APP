import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import { createAppContainer, createDrawerNavigator , createBottomTabNavigator, 
        createSwitchNavigator,createStackNavigator, DrawerItems } from 'react-navigation';
import Channels from '../screens/Channels';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
//import Logout from '../screens/Logout';
import Icon from '@expo/vector-icons/Ionicons';
import { Button } from 'native-base';
import * as firebase from 'firebase';

class HomeScreen extends React.Component {

  onSignoutPress = () => {
    firebase.auth().signOut().then(() => this.props.navigation.navigate('Login'));
  }

  render(){
    
    return <AppContainer />
    
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style = {{flext: 1}}>
    <ScrollView>
      <View style = {{paddingTop:30}}></View>
      <DrawerItems style = {{backgroundColor:'#35586C'}} {...props} />
    </ScrollView>
    <TouchableOpacity>
      <View style={styles.item}>
        <Button onPress ={this.onSignoutPress}
        transparent
        style = {{color: '#fff'}}>
          <Text style={styles.label}>Logout</Text>
          </Button>
   </View>
  </TouchableOpacity>
  </SafeAreaView>
  
  
)


const TabNavigator = createBottomTabNavigator (
  {
   Channels,
  //  Profile,
  //  Settings,
}, {
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
  }
}, 
  tabBarOptions: {
    labelStyle: { fontSize: 15, padding: 15, backgroundColor: '#ffffff' },
    }

})

const AppStackNavigator = createStackNavigator ({
  TabNavigator: TabNavigator
},{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft: (
        <Icon style ={{paddingLeft: 20}}
         onPress={()=>navigation.openDrawer()}
        name="md-menu" size={30}/>
      )
    }         
  }
  });

const AppDrawerNavigator = createDrawerNavigator({
  
    Profile: {
      screen: AppStackNavigator,
    }, 
    Settings: {
      screen: Settings,
    }, 
    Channels: {
      screen: Channels,
    },
    
   },{
     contentComponent: CustomDrawerComponent,
  
   }
  ); 
 
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      margin: 16,
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, .87)',
    },
    iconContainer: {
      marginHorizontal: 16,
      width: 24,
      alignItems: 'center',
    },
  })
 

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: AppDrawerNavigator },
 
})


const AppContainer = createAppContainer(AppSwitchNavigator);


export default HomeScreen;