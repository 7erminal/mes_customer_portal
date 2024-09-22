import React, { useEffect } from "react";
import ProfilepageContent from "../components/ProfilepageContent";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = ()=>{
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(sessionStorage.getItem("isLoggedIn") == null || sessionStorage.getItem("isLoggedIn") != "true"){
            navigate("/login");
          } else {
            console.log("Not null status. User is logged in")
            // applicationContext?.toggleLoggedIn();
          }
    },[])
    
    return <>
        <ProfilepageContent page="profile" />
    </>
}

export default ProfilePage