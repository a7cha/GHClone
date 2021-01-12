import React from 'react';
import Router from './src/router/index.js'
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		text: "black",
		primary: 'black',

	},
};



function App(){
	const {store, persistor} = configureStore();
	return(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<PaperProvider theme={theme}>    	
					<Router/>
				</PaperProvider>
			</PersistGate> 
		</Provider>
	)
}

export default App;
