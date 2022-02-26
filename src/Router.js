import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout';
import PetsState from './context/PetsState';


function Router() {
    return (
      <>
        <PetsState>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                </Routes>
            </BrowserRouter>
        </PetsState>
      </>
    );
  }
  
  export default Router;
