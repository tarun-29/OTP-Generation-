import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-8e76a.cloudfunctions.net'

class SignUpForm extends Component{

    state = {
        phone : ''
    }

    handleSubmit = async ()=>{
        try{
            await axios.post(`${ROOT_URL}/createUser`,{ phone: this.state.phone });
            await axios.post(`${ROOT_URL}/reqOneTimePassword`,{ phone: this.state.phone })
        }catch(error){
            console.log(error)
        }
    }

    render(){
        return(
            <View>
                <View style={{marginBottom: 10}}>
                    <Text>Enter Phone Number</Text>
                    <Input
                    value= {this.state.phone}
                    onChangeText = {phone=>this.setState({phone})}
                    placeholder='Basic Input'
                    />
                </View>
                <Button title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        )
    }
}

export default SignUpForm; 