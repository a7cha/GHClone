import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {RepositoryView} from '../screen/index'

const Stack = createStackNavigator();

function Router(){
  useEffect(() => {
    SplashScreen.hide();
  }, []);	
  
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="RepositoryView">
				<Stack.Screen name="RepositoryView" component={RepositoryView} options={{ headerShown : false}}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Router;