import React, { useContext, useEffect } from "react";
import CreateCampaignsContent from "../../components/CreateCampaignContent";
import ApplicationContext from "../../resources/ApplicationContext";
import { useNavigate } from "react-router-dom";

const CreateCampaignPage: React.FC = ()=>{
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

    return <div className="my-4">
        <CreateCampaignsContent page="create-campaign" />
    </div>
}

export default CreateCampaignPage;