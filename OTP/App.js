import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase'

class App extends Component{

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyDPFye-vV5rtPvyewx_DtMnf8r7XtFwsuo",
      authDomain: "one-time-password-8e76a.firebaseapp.com",
      databaseURL: "https://one-time-password-8e76a.firebaseio.com",
      projectId: "one-time-password-8e76a",
      storageBucket: "one-time-password-8e76a.appspot.com",
      messagingSenderId: "376645700161",
    };
    firebase.initializeApp(firebaseConfig)
  }

  render(){
    return(
      <View style={styles.container}>
          <SignUpForm/>
          <SignInForm/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: 'space-around'
  },
});

export default App;


