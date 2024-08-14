import React, { useContext, useEffect } from "react";
import HomepageContent from "../components/HomepageContent";
import ApplicationContext from "../resources/ApplicationContext.js";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = ()=>{
    const applicationContext = useContext(ApplicationContext)
    const navigate = useNavigate()

    useEffect(()=>{
        applicationContext?.user?.IsVerified == false ?
        navigate('/profile') : ''
    },[])

    return <>
    <HomepageContent page="home" />
    </>
}

export default HomePage;