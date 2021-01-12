import Axios from 'axios';


export const GetRepoRequest = () => {
	return{
		type : "GET_REPO_REQUEST"
	}
}


export const GetRepoFailed = ( error ) => {
	return{
		type : "GET_REPO_FAILED",
		payload : error
	}
}

export const GetRepoSuccess = ( data ) => {
	return {
		type : "GET_REPO_SUCCESS",
		payload : data
	}
}


export const GetRepo = () => {
	return (dispatch) => {
		dispatch(GetRepoRequest());
		const headers = { headers : { 'Authorization' : "token bf0b31333740f8d6856771d848487a400fb439dd" }};
		return Axios.get(
			"https://api.github.com/user/repos", headers
		).then((res) => {
			const data = res;
			dispatch(GetRepoSuccess(res.data));
		}).catch((err) => {
			const errMessage = err;
			dispatch(GetRepoFailed(errMessage));
		})
	}
}


//i didnt realize token have a expired 
//change line 31 like below
// "https://api.github.com/users/a7cha/repos"