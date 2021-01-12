const initialState = {
	data : [],
	error : '',
	loading : false
}


const GithubAPI = (state = initialState, action = {}) => {
	switch( action.type ){
		case 'GET_REPO_REQUEST':
			return {
				...state,
				loading : true,
				error : "request"
			};
		case 'GET_REPO_FAILED':
			return {
				...state,
				loading : false,
				error : action.payload,
			}			
		case 'GET_REPO_SUCCESS':
			return {
				...state,
				loading : false,
				data : action.payload
			};

		default : {
			return {
				...state
			}
		}
	}
}

export default GithubAPI
