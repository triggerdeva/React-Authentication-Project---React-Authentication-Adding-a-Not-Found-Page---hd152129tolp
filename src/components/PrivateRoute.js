
import React from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
const PrivateRoute= ()=>{
    const history = useHistory();
    console.log(history);
    if(!localStorage.getItem('username') || !localStorage.getItem('password')){
        history.push('/login');
        return null;
    }
    else{
        return <Profile />;
    }
}
export default PrivateRoute;
