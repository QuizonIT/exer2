import React, {Component} from 'react';
import {Image,Text, View, StyleSheet} from 'react-native';
import logo from './assets/snack-icon.png';
class YourApp extends Component {
render(){

  return (
    <View style={styles.container}>
      <Text style={styles.header}> My name is quizon</Text>
      <Text style={styles.header}> Hello! </Text>
       <Image source={logo} style={styles.logo} />
       </View>
  );
  }
};
const styles = StyleSheet.create({
container: {
  flex:1,
 backgroundColor: '#cf4944',
  alignItems: 'center',
  justifyContent: 'center',
},
header: {
  color: '#000',
},
logo: {
    width: 350,
    height: 350,
  }
});
export default YourApp;