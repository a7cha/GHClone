import React from 'react';
import {
	ScrollView,
	View,
	Text,
	TextInput
} from 'react-native';
import styles from './RepositoryView.style.js';

function RepositoryView(){
	return(
		<>
			<ScrollView style={{backgroundColor: "white"}}>
				<View style={styles.container}>
					
						<View>
							<TextInput
								placeholder="  Find a repository..."
								style={styles.searchTextinput}
							>							
							</TextInput>
						</View>

						<View style={{flexDirection : 'row',justifyContent : 'space-between'}}>
							
								<View style={{flexDirection : 'row'}}>
									<Text>1</Text>
									<Text>2</Text>
								</View>

								<View>
									<Text>1</Text>
									
								</View>								
							
						</View>
					
						<View style={styles.panelList}>
							<Text>ini repository view</Text>
						</View>					
				</View>

			</ScrollView>
		</>
	)
}

export default RepositoryView;