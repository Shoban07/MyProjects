import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'; 
import Login from '../screens/Login';
import Register from '../screens/Register';
import Onboarding from '../screens/OnboardingScreen';
import Tabs from '../screens/Tabs';
import BookAmbulance from '../screens/BookAmbulance';
import LocateNearByHospital from '../screens/LocateNearByHospital';
import BookFirstAidPilots from '../screens/BookFirstAidPilots';
import AddVolunter from '../screens/AddVolunter';
import EmergencyContacts from '../screens/EmergencyContacts';

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    OnboardingScreen:{screen:Onboarding},
    Login:{screen:Login},
    Register:{screen:Register},
    Tabs:{screen:Tabs},
    BookAmbulance:{screen:BookAmbulance},
    LocateNearByHospital:{screen:LocateNearByHospital},
    BookFirstAidPilots:{screen:BookFirstAidPilots},
    AddVolunter:{screen:AddVolunter},
    EmergencyContacts:{screen:EmergencyContacts},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);