import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import * as firebase from 'firebase'


export default class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=({
            reg_emailid:'',
            reg_password:'',
            reg_confpassword:''
        })
    }

    refreshingForm = ()=>
    {
        this.setState=({
            reg_emailid:'',
            reg_password:'',
            reg_confpassword:''
        })
    }

    signUp = (reg_emailid,reg_password,reg_confpassword)=>{
        const {navigate} = this.props.navigation;
        try{
            if(this.state.reg_confpassword.length<6)
            {
                if (this.state.reg_password.length<6)
                {
                   alert("Password must be above 6 characters");
                   return;
                }
            }
            if(this.state.reg_password == this.state.reg_confpassword)
            {
                if(!firebase.auth().createUserWithEmailAndPassword(reg_emailid,reg_password))
                {
                    alert("Registration Failed")
                }
                else
                {
                    alert("User Registration is Sucessfully, Sign-In Now..!");
                    navigate('Login');
                }
            }
            else
            {
                alert("Both the Passwords must be same")
            }
            
        }
        catch(error)
        {
            console.log(error.toString())
        }
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#58e8dd", height:"100%"}}> 
                <Image source = {require('../images/userRegistration2.png')}
                    style={{width:"85%",height:"40%", resizeMode:'contain',alignSelf:"center",marginTop:15}}/>
                <Text 
                    style={{
                        fontSize:30,
                        fontFamily:"Bold-Italic",
                        alignSelf:"center"
                        }}
                        >Enroll</Text>

                <Text
                style={{
                    fontFamily:"Regular",
                    marginHorizontal:50,
                    textAlign:"center",
                    marginTop:10,
                    fontSize:20,
                    opacity:0.5
                }}
                > Fill the form and Register for User Enrollment
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
                    
                    <TextInput
                    onChangeText={(reg_emailid)=>this.setState({reg_emailid})}
                    placeholder="Email-Id"
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
                    
                    <TextInput
                    onChangeText={(reg_password)=>this.setState({reg_password})}
                    secureTextEntry
                    placeholder="Password"
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
                    
                    <TextInput
                    onChangeText={(reg_confpassword)=>this.setState({reg_confpassword})}
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor="#fe2c54"
                    style={{paddingHorizontal:10}}/>
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
                    }}
                    onPress={()=> this.signUp(this.state.reg_emailid,this.state.reg_password,this.state.reg_confpassword)}
                    >Register</Text>
                </View>
                
            </View>
        )
    }
}