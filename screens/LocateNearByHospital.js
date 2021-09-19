import React from 'react';
import {Text,View,Image, TextInput,StyleSheet,Dimensions} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import MapView, {Marker} from 'react-native-maps';
import GeoLocation from 'react-native-geolocation-service';
  

export default class LocateNearByHospital extends React.Component
{
    constructor(props)
    {
        super(props);
    
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <MapView style={styles.map}
                 showsUserLocation={true}
                 followsUserLocation={true}
                 showsBuildings={true}
                 showsCompass={true}
                 showsTraffic={true}
                 showsMyLocationButton={true}
                >
                     <Marker coordinate={{
                         latitude: 12.924757, 
                         longitude: 80.092440,
                     }}></Marker>
                </MapView>
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
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        ...StyleSheet.absoluteFillObject,
      },
});

