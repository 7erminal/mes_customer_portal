import React, { useContext, useEffect } from "react";
import CampaignsContent from "../components/CampaignsContent";
import ApplicationContext from "../resources/ApplicationContext.js";
import { useNavigate } from "react-router-dom";

const CampaignsPage: React.FC = ()=>{
    const applicationContext = useContext(ApplicationContext)
    const navigate = useNavigate()

    useEffect(()=>{
        applicationContext?.user?.IsVerified == false ?
        navigate('/profile') : ''
    },[])

    return <>
    <CampaignsContent page="campaigns" />
    </>
}

export default CampaignsPage;