import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout.jsx';
import Home from '../pages/home/home.jsx';
import Complains from '../pages/complains/complain.jsx';
import Emergency from '../pages/emergency/emergency.jsx';

const RouteComponent=()=>{

    return <>
     <Routes>
        <Route 
        path="/"
        element={<Layout component={Home} navbar={true} footer={true}/>}
        />
         <Route 
        path="/complains"
        element={<Layout component={Complains} navbar={true} footer={true}/>}
        />
        <Route 
        path="/emergency"
        element={<Layout component={Emergency} navbar={true} footer={true}/>}
        />
        </Routes> 
    
    </>
}

export default RouteComponent