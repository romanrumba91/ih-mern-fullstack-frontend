// . /src/components/Layout/Header.js

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'



export default function Header() {


	const ctxUser = useContext(UsersContext)

	const {
		currentUser,
		authStatus,
		logoutUser
	} = ctxUser



  return (
	<>


		<header>


				
			<nav>

            <div class="relative transition-gray-50">
                <div class="relative bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">

        <div className="flex justify-start lg:w-0 lg:flex-1">
                <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
        </div>


 
				<ul>

					{
						authStatus ?
						(
							<>
								<li>
									<Link
										to="/"
										onClick={() => {logoutUser()}}
									>
										Cerrar sesión		
									</Link>
								</li>
								<li>{currentUser.name}</li>
							</>
						) :
						(
							<>
                            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
                                
								<li>
                                <a href="/registro" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign up
                                </a>
								</li>
                            
								<li>
                                <a href="/login" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Sign in
                                </a>
								</li>
                            </div>
							</>

						)

					}

					
					

				</ul>
                </div>
    </div>
    </div>
    </div>

			</nav>
		</header>



	
	</>


  )
}







