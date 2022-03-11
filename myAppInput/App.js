import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput} from 'react-native';


class App extends Component{
  render(){
    return(

    <View style={styles.container}>
   <TextInput 
   style={style.input}
   placeholder='Write your name'
   onChange={this.captureName}
   />
    
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor:'#222'
    }
});

export default App;
