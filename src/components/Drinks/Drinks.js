// useState -> estado local (1 estado inicial, 1 función que altera el estado inicial)
// useContext -> Proveer valor a todos los componentes
// useReducer -> estado global

import { useState, useContext, useEffect } from 'react'
import DrinksContext from './../../context/Drinks/DrinksContext'

export default function Drinks() {

	const ctxDrinks	= useContext(DrinksContext)

	const {
		drinks,
		msgError,
		sendDrink,
		getDrinks
	} = ctxDrinks


	// Desestructuración de arreglos
	const [drink, setDrink] = useState({
		name: "",
		flavor: "",
		size: ""
	})


	const handleChange = (event) => {		

		setDrink({
			...drink,
			[event.target.name]: event.target.value
		})

	}


	const handleSubmit = (event) => {
		event.preventDefault()

		sendDrink(drink)

		setDrink({
			name: "",
			flavor: "",
			size: ""
		})

	}


	// PARA TRABAJAR CON SIDE EFFECTS (APIs)
	useEffect(() => {

		getDrinks()

	}, [])


	return (
		// FRAGMENTOS
		<>
			<form onSubmit={ (e) => { handleSubmit(e) } } >
				<label>Nombre</label>
				<input 
					name="name"
					type="text"
					value={drink.name}
					onChange={(e) => { handleChange(e) }}
				/>

				<label>Sabor</label>
				<input 
					name="flavor"
					type="text"
					value={drink.flavor}
					onChange={(e) => { handleChange(e) }}
				/>

				<label>Tamaño</label>
				<input 
					name="size"
					type="text"
					value={drink.size}
					onChange={(e) => { handleChange(e) }}
				/>

				<button type="submit">
					Crear bebida
				</button>

			</form>


			{ msgError ? msgError : "" }


			<h1>Listado de bebidas</h1>

			<div>
				{
					drinks.map((elt) => {
						return (
							<div key={elt._id} >
								<h2>{elt.name}</h2>
								<p>{elt.size}</p>
								<p>{elt.flavor}</p>
							</div>
						)
					})
				}
			</div>

		</>
	)
}