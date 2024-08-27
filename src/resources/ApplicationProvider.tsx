import React, { ReactNode, useState, useEffect } from "react";
import ApplicationContext from "./ApplicationContext";
import {NotificationHandler, User} from './types/applicationTypes';
// @ts-ignore
import Api from "../apis/apis"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"

export const ApplicationProvider: React.FC<{children: ReactNode}> = ({children})=>{
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false)
  const [user, setUser] = useState<User | undefined| null>(null);
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  // REGISTRATION PARAMS
  const [companyName, setCompanyName] = useState('')
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('')
  const [natureOfbusiness, setNatureOfBusiness] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [postalAddress, setPostalAddress] = useState('')
  const [rphoneNumber, setRphoneNumber] = useState(phoneNumber)
  const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('')
  const [numberOfDirectors, setNumberOfDirectors] = useState('')
  const [directorIDs, setDirectorIDs] = useState<FileList | undefined | null>()
  const [certCompanyProfile, setCertCompanyProfile] = useState<File | undefined | null>()
  const [certOfCorporation, setCertOfCorporation] = useState<File | undefined | null>()
  const [certCommenceBusiness, setCertCommenceBusiness] = useState<File | undefined | null>()
  const [userIdFile, setUserIdFile] = useState<File | undefined | null>()

  const [notificationHandler, setNotificationHandler] = useState<NotificationHandler>()


  // Check if user is logged in and has data
  useEffect(()=>{
    if(isUserDataLoaded==false && sessionStorage.getItem("user_username") != null){
      getUserDetails()
    }
  },[])
  

    // Show Side Nav
  const showSideNav = () =>{
    console.log("Showing side nav")
    let body = document.getElementsByTagName('body')[0];
    let className = 'g-sidenav-pinned';
    const iconSidenav = document.getElementById('iconSidenav')!;
    const sidenav = document.getElementById('sidenav-main')!;

    if (body.classList.contains(className)) {
      console.log("Contains sticky pane");
      body.classList.remove(className);
      setTimeout(function() {
        sidenav.classList.remove('bg-white');
      }, 100);
      sidenav.classList.remove('bg-transparent');
  
    } else {
      console.log("Does not Contain sticky pane");
      body.classList.add(className);
      sidenav.classList.add('bg-white');
      sidenav.classList.remove('bg-transparent');
      iconSidenav.classList.remove('d-none');
    }
  }

  const login = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setLoading(true)

    let returnval = false;

    const params = {
        'Username': username,
        'Password': password
    }

    await new Api().post_(params, ROUTES.login).then((response: any)=>{
        setLoading(false)
        console.log("Response is ...")
        console.log(response)
        if(response.status==200){
            console.log("RESPONSE::: ")
            console.log(response.data)
            if(response.data.StatusCode == 200){
                setSuccessMessage(response.data.StatusDesc)
                setShowSuccessMessage(true)
                setNotificationHandler({action: ()=>{
                  setShowSuccessMessage(false)
                  setSuccessMessage("")
                }, path: '/login'})
                // window.location.href = "http://localhost:5174/"
                // navigate('/')
                setUser(response.data.User)
                setIsUserDataLoaded(true)
                sessionStorage.setItem("user_username", username)
                returnval = true
            } else {
              console.log("Authentication failed")
                setErrorMessage(response.data.StatusDesc)
                setShowErrorMessage(true)
                setNotificationHandler({action: ()=>{
                  setShowErrorMessage(false)
                  setErrorMessage("")
                }, path: ''})
            }
        } else {
            setErrorMessage("Sorry...something went wrong. Please try again")
            setShowErrorMessage(true)
            setNotificationHandler({action: ()=>{
              setShowErrorMessage(false)
              setErrorMessage("")
            }, path: ''})
        }
      }).catch((error: any)=> {
        setLoading(false)
        console.log("Error returned is ... ")
        console.log(error)
        setErrorMessage("Sorry...something went wrong. Please try again")
        setShowErrorMessage(true)
      })

      setShowSuccessMessage(false);
      setShowErrorMessage(false);
      return returnval

    }

    const registerUser = async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      let returnval = false;
      console.log("Register user called")
      console.log(`full name is ${fullname}`)
      console.log(`email is ${email}`)
      console.log(`gender is ${gender}`)
      console.log(`dob is ${dob}`)
      console.log(`phone number is ${phoneNumber}`)
      setLoading(true)

      const params = {
          'Name': fullname,
          'Email': email,
          'Gender': gender,
          'PhoneNumber': phoneNumber,
          'Dob': dob,
          'Password': password
      }

      await new Api().post_(params, ROUTES.signUp).then((response: any)=>{
          setLoading(false)
          console.log("Response is ...")
          console.log(response)
          if(response.status==200){
              console.log("RESPONSE::: ")
              console.log(response.data)
              if(response.data.StatusCode == 200){
                  setSuccessMessage(response.data.StatusDesc)
                  setShowSuccessMessage(true);
                  setNotificationHandler({action: ()=>{
                    setShowSuccessMessage(false)
                    setSuccessMessage("")
                  }, path: '/login'})

                  returnval = true;
              }
          } else {
            setErrorMessage(response.data.StatusDesc)
            setShowErrorMessage(true)
            setNotificationHandler({action: ()=>{
              setShowErrorMessage(false)
              setErrorMessage("")
            }, path: ''})
          }
        }).catch((error: any)=> {
          setLoading(false)
          console.log("Error returned is ... ")
          console.log(error)
          setErrorMessage("Sorry...something went wrong. Please try again")
          setShowErrorMessage(true)
        })

        setShowSuccessMessage(false);
        setShowErrorMessage(false);
        return returnval;
    }

    const getUserDetails = async ()=>{
      // let returnval = false;
      console.log("Getting user by username")
      const username_ = sessionStorage.getItem("user_username")
      console.log(ROUTES.getUserByUsername(username_))
      await new Api().get_(ROUTES.getUserByUsername(username_)).then((response: any)=>{
        setLoading(false)
        console.log("Response is ...")
        console.log(response)
        if(response.status==200){
            console.log("RESPONSE::: ")
            console.log(response.data)
            if(response.data.StatusCode == 200){
                // window.location.href = "http://localhost:5174/"
                // navigate('/')
                setUser(response.data.User)
                setIsUserDataLoaded(true)
                // returnval = true
            } else {
              console.log("Error status code returned. Error returned is ... ")
            }
        } else {
          console.log("Error code returned. Error returned is ... ")
        }
      }).catch((error: any)=> {
        console.log("Error returned is ... ")
        console.log(error)
      })
    }

    const clearForm = ()=>{
      setSuccessMessage("")
      setShowSuccessMessage(false)
      setCompanyName('')
      setBusinessRegistrationNumber('')
      setNatureOfBusiness('')
      setStreetAddress('')
      setPostalAddress('')
      setPhoneNumber('')
      setAlternatePhoneNumber('')

      setRphoneNumber('')
      setNumberOfDirectors('')
      setDirectorIDs(undefined)
      setCertCompanyProfile(undefined)
      setCertOfCorporation(undefined)
      setCertCommenceBusiness(undefined)
    }

    const logout = ()=>{
      sessionStorage.clear()

      return true
    }

    return (
        <ApplicationContext.Provider value={
          { 
            showSideNav,
            user,
            username,
            password,
            loading,
            successMessage,
            showSuccessMessage,
            errorMessage,
            showErrorMessage,
            login,
            setUsername,
            setPassword,
            setSuccessMessage,
            setErrorMessage,
            setShowSuccessMessage,
            setShowErrorMessage,
            fullname,
            email,
            gender,
            dob,
            phoneNumber,
            setFullname,
            setEmail,
            setGender,
            setDob,
            setPhoneNumber,
            registerUser,
            setLoading,
            logout,
            getUserDetails,
            companyName,
            setCompanyName,
            businessRegistrationNumber,
            setBusinessRegistrationNumber,
            natureOfbusiness,
            setNatureOfBusiness,
            streetAddress,
            setStreetAddress,
            postalAddress,
            setPostalAddress,
            rphoneNumber,
            setRphoneNumber,
            alternatePhoneNumber,
            setAlternatePhoneNumber,
            numberOfDirectors,
            setNumberOfDirectors,
            directorIDs,
            setDirectorIDs,
            certCompanyProfile,
            setCertCompanyProfile,
            certOfCorporation,
            setCertOfCorporation,
            certCommenceBusiness,
            setCertCommenceBusiness,
            clearForm,
            userIdFile,
            setUserIdFile,
            notificationHandler,
            setNotificationHandler
          }}>
          {children}
        </ApplicationContext.Provider>
      );
}
