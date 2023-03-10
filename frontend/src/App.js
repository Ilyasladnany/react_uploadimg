import { Container} from 'react-bootstrap'
import { Routes,Route,Outlet } from 'react-router-dom';
import Menu from './components/menu/Menu'
import Products from './components/menu/home/products'
import {AuthProvider} from './cp/AuthContext';
import Auth from './cp/auth';
import ProtectedRoutes from './cp/protectedRoutes';
import ManageProd from './cp/manageProd';


function App() {
  return ( 
    <AuthProvider>
   <Container>
    <Menu/>
    
    <Outlet/>
    {/**---------------------------Routes-------------- */}
    <Routes>
      <Route path='/' element={<Products/>} /> 
      <Route path='/login' element={<Auth/>} /> 
      
      <Route element={<ProtectedRoutes/>}>
            <Route path='/manageproducts' element={<ManageProd/>}/>
      </Route>

    </Routes>
    </Container>
    </AuthProvider>
  );
}

export default App;
