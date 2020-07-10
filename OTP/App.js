import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase'

class App extends Component{

  componentDidMount(){
    const firebaseConfig = {
      
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


