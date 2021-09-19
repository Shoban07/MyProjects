import React from 'react';
import {Text,View,Image, TextInput, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
  

export default class BookFirstAidPilots extends React.Component
{
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <Text>Reach for FA-Pilots</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2db5ab'
    }
});