import { useReducer } from 'react'

import DrinksContext from './DrinksContext'
import DrinksReducer from './DrinksReducer'

import axiosClient from './../../config/axios'

const DrinksState = (props) => {

	const initialState = {
		drinks: [],
		msgError: ""
	}


	const [globalState, dispatch] = useReducer(DrinksReducer, initialState)
	

	const sendDrink = async (drinkForm) => {
		
		try {
			
			await axiosClient.post("/api/drinks", drinkForm)	

			dispatch({
				type: "RESET_ERROR_STATUS"
			})


		} catch (error) {

			dispatch({
				type: "ERROR_MSG",
				payload: error.response.data.msg
			})

		}

		getDrinks()

	}

	const getDrinks = async () => {

		const res = await axiosClient.get("/api/drinks")

		console.log(res)

		const listDrinks = res.data.data  // [{},{}]

		dispatch({
			type: "OBTENER_BEBIDAS",
			payload: listDrinks
		})

	}

	return (
		<DrinksContext.Provider
			value={{
				drinks: globalState.drinks,
				msgError: globalState.msgError,
				sendDrink,
				getDrinks
			}}
		>
			{ props.children }
		</DrinksContext.Provider>
	)
}

export default DrinksState