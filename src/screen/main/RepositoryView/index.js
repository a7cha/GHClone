import React,{useState, useEffect} from 'react';
import {
	ScrollView,
	View,
	Text,
	TextInput
} from 'react-native';
import styles from './RepositoryView.style.js';
import { Button } from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux'
import { GetRepo } from '../../../redux/actions/index.js'


function RepositoryView(){
	// const [listRepo, setListRepo] = useState([]);

	const dispatch = useDispatch()
	const { data } = useSelector((s) => s.GithubAPI)

	// setListRepo(data)

	useEffect(() => {
			// const headers = { headers : {'Authorization' : "token bf0b31333740f8d6856771d848487a400fb439dd"}};
			// Axios.get("https://api.github.com/user/repos", headers)
			// .then(res => {
			// 	console.log(res);
			// }).catch(err => {
			// 	console.log(err);
			// })

			dispatch(GetRepo());
			
			console.log(data);		
	}, [])


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

						<View style={{flexDirection : 'row',justifyContent : 'space-between', marginVertical : 10}}>
							
								<View style={{flexDirection : 'row'}}>
									<Button
										mode="outlined"
										uppercase="true"
										>
										<Text>
											Type : All
										</Text>
									</Button>

									<Button
										mode="outlined"
										uppercase="true"
										style={{marginLeft : 10}}
										>
										<Text>
											Type : All
										</Text>
									</Button>
								</View>

								<View>
									<Text>1</Text>
									
								</View>								
							
						</View>

						<View style={{borderBottomWidth : 0.5, borderColor : "#24292e", marginBottom : 10}}/>						
					
						<View style={styles.panelList}>
							<View style={{flexDirection : "row", justifyContent : "space-between", marginVertical : 15}}>
								<View style={{flexDirection : "column"}}>
									<View style={{flexDirection : "row"}}>
										<Text style={styles.repoTitle}>GHClone</Text>
										<Text>  private</Text>	
									</View>
									
								<Text>ini repository view</Text>
								</View>
								<Text>ini repository view</Text>	
							</View>
							
						</View>					
				</View>

			</ScrollView>
		</>
	)
}

export default RepositoryView;