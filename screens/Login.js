import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBl7AgtjJxgOPGI032MAeOHE35nenahuO4",
    authDomain: "awesomeproject-c392c.firebaseapp.com",
    projectId: "awesomeproject-c392c",
    storageBucket: "awesomeproject-c392c.appspot.com",
    messagingSenderId: "941244034581",
    appId: "1:941244034581:web:17a3bc92202036c0afe81c",
    measurementId: "G-ZH40P83M8B"
};
  
  firebase.initializeApp(firebaseConfig); 

export default class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=({
            email:'',
            password:''
        })
    }

    login = (email,password)=>{
        const {navigate} = this.props.navigation;
        try{
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(function (user)
            {
               alert("User Logged in Successfully...!");
               navigate('Tabs');
            });
        }
        catch(error){
            console.log(error.toString());
        }
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#58e8dd", height:"100%"}}> 
                <Image source = {require('../images/ambulance_roundbdr.png')}
                    style={{width:"80%",height:"35%",alignSelf:"center",marginTop:15}}/>
                <Text
                    style={{
                        fontSize:30,
                        fontFamily:"Bold-Italic",
                        alignSelf:"center"
                        }}
                        >Life Jet</Text>

                <Text
                style={{
                    fontFamily:"Regular",
                    marginHorizontal:50,
                    textAlign:"center",
                    marginTop:5,
                    fontSize:20,
                    opacity:0.5
                }}
                > A Stitch in time saves Nine., 'Life Jet Ensures the Timely Stitch'
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#fe2c54",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#fe2c54" size={24}></Icon>
                    <TextInput
                    onChangeText={(email)=>this.setState({email})}
                    placeholder="Email-Id / Username"
                    placeholderTextColor="#fe2c54"
                     style={{paddingHorizontal:10}}/>
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#fe2c54",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color="#fe2c54" size={24}></Icon>
                    <TextInput 
                    onChangeText={(password)=>this.setState({password})}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#fe2c54"
                     style={{
                        paddingHorizontal:10
                    }}/>
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#fe2c54",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        shadowColor:"black",
                        textShadowColor:"black",
                        fontFamily:"SemiBold"
                    }} onPress={()=> this.login(this.state.email,this.state.password)}>Already a member</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}

                style={{
                        alignSelf:"center",
                        color:"#fe2c54",
                        fontFamily:"SemiBold",
                        paddingVertical:30
                    }}>New User, Register Here.!</Text>
            </View>
        )
    }
}