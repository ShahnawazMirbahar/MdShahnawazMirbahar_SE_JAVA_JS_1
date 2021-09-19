import { padding } from '@mui/system';
import React ,{useEffect,useState}from 'react';
import './Dashboard.css';
function Dashboard() {
  const [userExist, setUserExist] = useState(false)
  useEffect(() => {
   const user = localStorage.getItem('userEmail');
   if(user !==null && user !=="" && user!==undefined)
   {
     setUserExist(true);
   }
   else{
     setUserExist(false);
   }
  
  }, [])
  return (
    <div>
      {userExist?<div> <div className='dashboard-container'>
    <h1>Welcome Avijeet</h1> <br/>
    <h2>Top 5 Of your Most Selling Products Are </h2>
    <li>Geforce Gtx 3090</li>
    <li>Geforce Gtx 3080</li>
    <li>Geforce Gtx 1070</li>
    <li>RAM Adata 4gb</li>
    <li>RAM sandisk 8gb</li> <br/>
    <div>
    <br/>
       <h1>You have Sold</h1> 
      <li>X number of GPU</li>
      <li>Y number of MOBO</li>
      <li>Z number of RAM</li>
    </div>
    </div> </div> :"You need to Login first"}
    </div>
  );
}

export default Dashboard;