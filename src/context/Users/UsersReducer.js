// ./src/context/Users/UsersReducer.js

const reducer = (globalState, action) => {

	switch(action.type){
		case "REGISTRO_EXITOSO":

			localStorage.setItem("token", action.payload)

			return {
				...globalState,
				authStatus: true
			}

		case "VERIFICAR_TOKEN":
			return {
				...globalState,
				currentUser: action.payload,
				authStatus: true
			}

		default:
			return globalState


	}


}

export default reducer