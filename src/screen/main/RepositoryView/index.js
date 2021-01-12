import React, {useState, useEffect} from 'react';
import {ScrollView,
 	View, 
 	Text, 
 	TextInput, 
 	Image, 
 	TouchableNativeFeedback
} from 'react-native';
import styles from './RepositoryView.style.js';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {GetRepo} from '../../../redux/actions/index.js';
import Axios from 'axios';
import moment from 'moment';


function RepositoryView() {
	const [listRepo, setListRepo] = useState([]);
	const [followers, setFollowers] = useState();
	const [following, setFollowing] = useState();
	const [star, setStar] = useState();

	const dispatch = useDispatch();
	const {data} = useSelector((s) => s.GithubAPI);

	// setListRepo(data)

	useEffect(() => {
		const headers = { headers : {'Authorization' : "token bf0b31333740f8d6856771d848487a400fb439dd"}};
		Axios.get("https://api.github.com/users/a7cha/followers")
		.then(res => {
			setFollowers(res.data.length)
			// console.log(res.data[0].name);
		}).catch(err => {
			console.log(err);
		})

		// const headers = { headers : {'Authorization' : "token bf0b31333740f8d6856771d848487a400fb439dd"}};
		Axios.get("https://api.github.com/users/a7cha/following")
		.then(res => {
			setFollowing(res.data.length)
			// console.log(res.data[0].name);
		}).catch(err => {
			console.log(err);
		})		

		Axios.get("https://api.github.com/users/a7cha/starred")
		.then(res => {
			setStar(res.data.length)
			// console.log(res.data[0].name);
		}).catch(err => {
			console.log(err);
		})				

		dispatch(GetRepo());

		setListRepo(data);
		// console.log(data[0].owner.avatar_url);
		return () => {
			dispatch(GetRepo());
		};
	}, []);

	return (
		<>
			<ScrollView style={{backgroundColor: 'white'}}>
				<View
					style={{backgroundColor: '#24292E', width: '100%', height: '2%'}}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							marginVertical: '4%',
						}}>
						<View>
							<Image
								style={{width: 45, height: 45}}
								source={{
									uri:
										'https://trello-attachments.s3.amazonaws.com/5fc977bd3a40831970d713f0/5ffc14ff6bbd7a63efe2e677/ca278e52174b4c801e7fbc123cc54abe/pngjoy.com_telegram-icon-github-icon-png-white-png-download_1164606.png',
								}}
							/>
						</View>
					</View>
				</View>


				<View style={styles.profilespostition}>
			
				</View>
				<View style={styles.container}>

					<View style={{marginBottom : 20, flexDirection : "row"}}>
						<View>
							<Image
								style={{width: 75, height: 75, borderRadius : 360}}
								source={{
									uri:
										"https://avatars3.githubusercontent.com/u/47318515?v=4",
								}}
							/>								
						</View>

						<View style={{flexDirection : "column", paddingLeft : "6%",}}>
							<Text style={{fontSize : 30, fontWeight : "bold"}}>Arungi Cahaya</Text>
							<Text style={{fontSize : 20, fontWeight : "thin", color : "gray"}}>a7cha</Text>	
						</View>
					</View>

					<View style={{flexDirection : "row", marginBottom : 30, marginTop : 10}}>
						<View style={{flexDirection : "row"}}>
							<Text style={{fontWeight : "bold"}}>{followers}</Text> 
							<Text> Followers</Text>
						</View>
						<Text> | </Text>
						<View style={{flexDirection : "row"}}>
							<Text style={{fontWeight : "bold"}}>{following}</Text> 
							<Text> Following</Text>
						</View>
						<Text>  | </Text>
						<View style={{flexDirection : "row"}}>
							<Text style={{fontWeight : "bold"}}>{star}</Text> 
							<Text> Star</Text>
						</View>
					</View>

					<View>
						<TextInput
							placeholder="  Find a repository..."
							style={styles.searchTextinput}></TextInput>
					</View>

					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginVertical: 18,
						}}>
						<View style={{flexDirection: 'row'}}>
							
							<TouchableNativeFeedback >
								<View style={{borderWidth : 1, borderColor : "gray", borderRadius : 5,  backgroundColor : "#FAFBFC"}}>
								<View style={{paddingHorizontal : 21,paddingVertical : 7, flexDirection : "row"}}>
										<Text style={{color : "gray", fontSize : 14}}>Type: </Text> 
										<Text style={{color : "black",  fontSize : 14}}>All</Text>
								</View>
								</View>
							</TouchableNativeFeedback>

							<TouchableNativeFeedback >
								<View style={{borderWidth : 1, borderColor : "gray", borderRadius : 5, marginLeft : 13, backgroundColor : "#FAFBFC"}}>
								<View style={{paddingHorizontal : 21,paddingVertical : 7, flexDirection : "row"}}>
										<Text style={{color : "gray", fontSize : 14}}>Language: </Text> 
										<Text style={{color : "black",  fontSize : 14}}>All</Text>
								</View>
								</View>
							</TouchableNativeFeedback>							
							


						</View>

						<View style={{backgroundColor : "#2EA44F", borderRadius : 5}}>
							<Text style={{color : "white", paddingHorizontal : 23, lineHeight : 30}}>New</Text>
						</View>
					</View>

					<View
						style={{
							borderBottomWidth: 0.5,
							borderColor: '#24292e',
							marginBottom: 10,
						}}
					/>

					{data.map((repo) => {
						return (
							<>
								<View style={styles.panelList}>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											marginTop: 15,
										}}>
										<View style={{flexDirection: 'column'}}>
											<View>
												<Text style={styles.repoTitle}>{repo.name}</Text>
											</View>

											<View style={{marginTop: 10}}>
												<Text>
													{repo.language == null ? 'Unknown' : repo.language}
												</Text>
											</View>

										<Text style={{marginTop : 20}}>
											{moment(repo.pushed_at).format("dddd, D, MMMM Y")}
										</Text>											
										</View>



										<View style={{paddingLeft: 10, flexDirection : "column", justifyContent : 'center', marginRight : 10}}>
											<View style={{borderWidth : 1, borderColor : "gray", borderRadius : 5,  backgroundColor : "#FAFBFC"}}>
												<Text style={{paddingHorizontal : 13, paddingVertical : 10}}>STAR</Text>
											</View>
										</View>
									</View>
								</View>
							</>
						);
					})}
				</View>
			</ScrollView>
		</>
	);
}

export default RepositoryView;