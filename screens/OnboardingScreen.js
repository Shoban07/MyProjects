import React from 'react';
import {View, Image, Text, Button, StyleSheet} from 'react-native';
import Onboardingswiper from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return(
        <Onboardingswiper
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.navigate("Login")}
        pages={[
        {
            backgroundColor: '#bf7719',
            image : <Image style={{width:"90%",height:"65%",alignSelf:"center", resizeMode:'contain'}} source={require('../images/add_ambulance.png')}></Image>,
            title: 'Book an Ambulance',
            subtitle: 'In Case of emergency, Book an Ambulance nearby'
        },
        {
            backgroundColor: '#fe2c54',
            image : <Image style={{width:"90%",height:"65%",alignSelf:"center",resizeMode:'contain'}} source={require('../images/hospital.png')}></Image>,
            title: 'Locate Nearby Hospital',
            subtitle: 'Reach to the nearby hospital'
        },
        {
            backgroundColor: '#71b9e3',
            image : <Image style={{width:"90%",height:"65%", alignSelf:"center",resizeMode:'contain'}} source={require('../images/first-aid-kit.png')}></Image>,
            title: 'Book First Aid Pilots',
            subtitle: 'In case of immediate action is required'
        },
        {
            backgroundColor: '#FFF',
            image : <Image style={{width:"90%",height:"65%", alignSelf:"center",resizeMode:'contain'}} source={require('../images/healthcare.png')}></Image>,
            title: 'Life Matters',
            subtitle: 'Every Individual lives matters...!'
        }
        ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});