import React,{memo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {RepositoryView} from '../screen/index'

const Stack = createStackNavigator();

function Router(){
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="RepositoryView">
				<Stack.Screen name="RepositoryView" component={RepositoryView}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Router;