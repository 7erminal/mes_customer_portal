import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; 

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import Loading from "./components/widgets/Loading";
import ApplicationContext from "./resources/ApplicationContext";
import CampaignsPage from "./pages/CampaignsPage";
import NotificationModal from "./components/widgets/NotificationModal";
import { useNavigate } from "react-router-dom";

const ARoutes: React.FC = () => {
  const applicationContext = useContext(ApplicationContext)
  const navigate = useNavigate()

  const handleSuccessMessageClose = ()=>{
    console.log("Close success")
    console.log(applicationContext?.notificationHandler?.action)
    applicationContext?.notificationHandler?.action()
    console.log("Action")
    if(applicationContext?.notificationHandler?.path.trim() != ""){
        navigate(`/${applicationContext?.notificationHandler?.path}`)
    }
}

const handleErrorMessageClose = ()=>{
    applicationContext?.notificationHandler?.action()
    if(applicationContext?.notificationHandler?.path.trim() != ""){
        navigate(`/${applicationContext?.notificationHandler?.path}`)
    }
}

  return <AnimatePresence>
              <Routes>
                  {/* <Route path="*" element={<NotFoundPage />} /> */}
                  {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                  <Route path='/' element={<HomePage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='/campaigns' element={<CampaignsPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/sign-up' element={<RegistrationPage />} />
              </Routes>
              <Loading show={applicationContext!.loading}/>
              {/* Success Message */}
            <NotificationModal title="Success" titleColor="#2895FC" message={applicationContext!.successMessage} show={applicationContext!.showSuccessMessage} buttonText="OK" navigateTo={handleSuccessMessageClose} />
            {/* Error Message */}
            <NotificationModal title="Error" titleColor="#EC7063" message={applicationContext!.errorMessage} show={applicationContext!.showErrorMessage} buttonText="OK" navigateTo={handleErrorMessageClose} />
          </AnimatePresence>
}

export default ARoutes;