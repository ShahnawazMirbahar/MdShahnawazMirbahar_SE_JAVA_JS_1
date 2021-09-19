import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AllProducts from './components/AllProducts';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  return (
   <>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about'  component ={About}/>
        <Route path='/allproducts' component={AllProducts}/>
        <Route path ='/addproduct' component={AddProduct}/>
        <Route path = '/edit/:id'  component={EditProduct}/>
        <Route path ='/login' component={Login}/>
        <Route path ='/dashboard' component={Dashboard}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
