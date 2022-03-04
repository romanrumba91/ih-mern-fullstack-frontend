const reducer = (globalState, action) => {


	switch (action.type) {

		case "OBTENER_BEBIDAS":
			return {
				...globalState,
				drinks: action.payload
			}

		case "ERROR_MSG":
			return {
				...globalState,
				msgError: action.payload
			}
        case "RESET_ERROR_STATUS":
            return{
                ...globalState,
				msgError: ""
            }
		default:
			return globalState

	}


}

export default reducer