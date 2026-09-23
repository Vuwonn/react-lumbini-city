import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './Home'
import Recepie from './Recepie'
import TestState from './TestState'
import Layout from './Layout'
import Login from './Login'
import Register from './Register'
import DbProduct from './DbProduct'
import Products from './Products'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<Home />} />
        <Route path="about" element={<Recepie />} />
        <Route path="contact" element={<TestState />} />
        <Route path ="ourproduct" element={<DbProduct/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="users/:id" element={<Products/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
