// ./src/routes/Public.js

import UsersContext from './../context/Users/UsersContext'
import { useContext, useEffect } from 'react'

export default function Public({ component: Component} ) {

	const ctxUser = useContext(UsersContext)

	const {
		authStatus,
		verifyingToken
	} = ctxUser

	useEffect(() => {
		verifyingToken()

	}, [authStatus])


	return (
		<Component />
	)

}
