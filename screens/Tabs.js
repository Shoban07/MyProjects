import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BookAmbulance from '../screens/BookAmbulance';
import LocateNearByHospital from '../screens/LocateNearByHospital';
import BookFirstAidPilots from '../screens/BookFirstAidPilots';
import AddVolunter from '../screens/AddVolunter';
import EmergencyContacts from '../screens/EmergencyContacts';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children,onPress}) =>(
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...styles.shadow,
    }}
    onPress={onPress}
    >
        <View
        style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor:'#fe2c54'
        }}>{children}</View>
    </TouchableOpacity>
);


export default class Tabs extends React.Component
{
    render()
    {
        return(
            <NavigationContainer>
                <Tab.Navigator
                tabBarOptions={{
                    showLabel:false,
                    style:{
                        position:'absolute',
                        bottom:25,
                        left:20,
                        right:20,
                        elevation:0,
                        backgroundColor:'#fff',
                        borderRadius:15,
                        height:90,
                        borderColor:'#fe2c54',
                        ...styles.shadow
                    }
                }}>
                    <Tab.Screen name="Hospital" component={LocateNearByHospital} options={{
                        tabBarIcon:({focused})=>(
                            <View style={{alignItems:'center',justifyContent:'center', top:10}}>
                                <Image source={require('../images/hospital.png')}
                                resizeMode='contain'
                                style={{
                                    width:40,
                                    height:40,
                                }}></Image>
                                <Text style={{
                                    color:focused?'#fe2c54':'#000',
                                    fontSize:12
                                }}>Hospitals</Text>
                            </View>
                        )
                    }}/>
                    <Tab.Screen name="Add Volunteer" component={AddVolunter} options={{
                        tabBarIcon:({focused})=>(
                            <View style={{alignItems:'center',justifyContent:'center', top:10}}>
                                <Image source={require('../images/addVolunteer.png')}
                                resizeMode='contain'
                                style={{
                                    width:40,
                                    height:40,
                                }}></Image>
                                <Text style={{
                                    color:focused?'#fe2c54':'#000',
                                    fontSize:12
                                }}>Volunteer</Text>
                            </View>
                        )
                    }}/>
                    <Tab.Screen name="Ambulance" component={BookAmbulance} options={{
                        tabBarIcon:({focused})=>(
                            <Image 
                            source={require('../images/add_ambulance.png')}
                            resizeMode="contain"
                            style={{
                                width:50,
                                height:50
                            }}
                            />
                        ),
                        tabBarButton:(props)=>(
                            <CustomTabBarButton {...props}/>
                        )
                    }}
                    />
                    <Tab.Screen name="First Aid" component={BookFirstAidPilots} options={{
                        tabBarIcon:({focused})=>(
                            <View style={{alignItems:'center',justifyContent:'center', top:10}}>
                                <Image source={require('../images/bookFirstAidPilot.png')}
                                resizeMode='contain'
                                style={{
                                    width:40,
                                    height:40,
                                }}></Image>
                                <Text style={{
                                    color:focused?'#fe2c54':'#000',
                                    fontSize:12
                                }}>FA-Pilots</Text>
                            </View>
                        )
                    }}/>
                    <Tab.Screen name="Emergency Contacts" component={EmergencyContacts} options={{
                        tabBarIcon:({focused})=>(
                            <View style={{alignItems:'center',justifyContent:'center', top:10}}>
                                <Image source={require('../images/emergencyContact.png')}
                                resizeMode='contain'
                                style={{
                                    width:40,
                                    height:40,
                                }}></Image>
                                <Text style={{
                                    color:focused?'#fe2c54':'#000',
                                    fontSize:12
                                }}>Contacts</Text>
                            </View>
                        )
                    }}/>
                </Tab.Navigator>
                </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#2d332a',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5

    }
});
