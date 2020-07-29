import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { observer, inject } from "mobx-react";
@inject('MainStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  
  onChangeText(state, value){
    this.setState({
      [state]: value
    });
  }

  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Text style={{textAlign: 'center'}}>REACT-NATIVE MOBX</Text>
        <TextInput
          style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeText('username', text)}
          placeholder='Kullanıcı Adı'
          />
        <TextInput
          secureTextEntry={true}
          style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeText('password', text)}
          placeholder='Şifre'
        />
        <TouchableOpacity onPress={() => this.props.MainStore.doLogin(this.state.username, this.state.password)} style={{width: '90%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 40}}>
          <Text style={{color: 'white'}}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;
