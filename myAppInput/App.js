import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      input:''
    };
    this.entrar = this.entrar.bind(this)
    //this.captureName = this.captureName.bind(this);
  }
  /*  captureName(text){
    if(text.length > 0){
      this.setState({name: 'Welcome to: ' + text});
    }else{
      this.setState({name: ''})
    }*/
  entrar(){
    if(this.state.input ===''){
      alert('Write your name')
      return;
    }
    this.setState({name: 'Welcome ' + this.state.input})
  } 

  render(){
    return(
      <View style={styles.container}>

        <TextInput
        style={styles.input}
        placeholder="Write your name"
        underlineColorAndroid="transparent"
        onChangeText={ (text) => this.setState({input:text})}
        //onChangeText={this.captureName}
        />

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={styles.texto}>{this.state.name}</Text>

      </View>
    );
    }
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }
});



export default App;