import React from'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from "./views/UserList";
import CreateNewUser from "./views/NewUser";
import Home from './views/Home';
import Addadmin from './views/Admin/Addadmin';
import Login from './views/Admin/Login';
import Dashboard from './views/Admin/Dashboard';
import TransactionList from './views/Admin/TransactionList';

function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className='App'>
      <Router>
        {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/NewUser" element={<CreateNewUser/>}/>
        <Route path="/UsersList" element={<UserList/>}/>
        <Route path='/add' element={<Addadmin/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/transactionList' element={<TransactionList/>}/>      
        </Routes>
      </Router>
    </div>
  );
}

export default App;

