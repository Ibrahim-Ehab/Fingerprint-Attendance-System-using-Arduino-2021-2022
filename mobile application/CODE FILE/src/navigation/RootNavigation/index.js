import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin, AdminAdds, AdminLogin, Details, LoginScreen, RegistScreen, StartScreen, StatusScreen } from '../../screens';



const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return ( 
      <NavigationContainer>
<Stack.Navigator initialRouteName='start' screenOptions={{headerShown: false}}>
<Stack.Screen name='start' component={StartScreen}/>
<Stack.Screen name='register' component={RegistScreen}/>
<Stack.Screen name='login' component={LoginScreen}/>
<Stack.Screen name='status' component={StatusScreen}/>
<Stack.Screen name='admin-login' component={AdminLogin}/>
<Stack.Screen name='admin' component={Admin}/>
<Stack.Screen name='details' component={Details}/>
<Stack.Screen name='adminadds' component={AdminAdds}/>


</Stack.Navigator>
      </NavigationContainer>
     );
}
 
export default RootNavigation;