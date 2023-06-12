import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getToken = () =>{
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}

export const http = axios.create({
    baseURL:"http://localhost:7011",
    headers:{
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${getToken()}`
    }
});



export default function AuthUser(){

    
    const navigate = useNavigate();

   

    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }



    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }
//http://3.111.131.73:7005

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}