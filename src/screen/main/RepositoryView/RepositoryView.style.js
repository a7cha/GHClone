import { StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	panelList : {
		backgroundColor : "red",
		width : wp(90),
		height : hp(10)		
	},
	container : {
		alignSelf : 'center', 
		marginVertical : hp(3)
	},
	searchTextinput : {
		borderRadius : 6,
		borderWidth :1,
		borderColor : "gray"
	}
})