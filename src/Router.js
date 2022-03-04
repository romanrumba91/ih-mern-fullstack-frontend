// ./src/Router.js
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import PetsState from './context/Pets/PetsState';
import UsersState from './context/Users/UsersState';
import DrinksState from './context/Drinks/DrinksState'

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

import Auth from './routes/Auth'
import Public from './routes/Public';

import Drinks from './components/Drinks/Drinks'



function Router() {
  return (
    <>
    <DrinksState>
      <PetsState>
        <UsersState>

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                    <Route 
                      index 
                      element={
                        <Public component={Home}
                      />} 
                    />

                    {/* localhost:3000/registro */}
                    <Route 
                      path="registro"
                      element={
                        <Auth component={Register} />
                      } 
                    />

                    {/* localhost:3000/login */}
                    <Route 
                      path="login"
                      element={
                        <Auth component={Login} />
                      } 
                    />                

                    <Route 
                      path="bebidas"
                      element={
                        <Public 
                          component={Drinks}
                        />
                      }
                    
                    />




                </Route>

              </Routes>
          </BrowserRouter>

          </UsersState>
        </PetsState>
      </DrinksState>
    </>
  );
}

export default Router;
