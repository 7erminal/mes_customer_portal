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

const ARoutes: React.FC = () => {
  const applicationContext = useContext(ApplicationContext)


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
          </AnimatePresence>
}

export default ARoutes;