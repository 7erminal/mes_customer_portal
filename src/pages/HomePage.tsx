import React, { useContext, useEffect } from "react";
import HomepageContent from "../components/HomepageContent";
import ApplicationContext from "../resources/ApplicationContext.js";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = ()=>{
    const applicationContext = useContext(ApplicationContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(sessionStorage.getItem("isLoggedIn") == null || sessionStorage.getItem("isLoggedIn") != "true"){
            navigate("/login");
          } else {
            console.log("Not null status. User is logged in")
            // applicationContext?.toggleLoggedIn();
            applicationContext?.user?.IsVerified == false ?
            navigate('/profile') : ''
          }
    },[])

    return <>
    <HomepageContent page="home" />
    </>
}

export default HomePage;