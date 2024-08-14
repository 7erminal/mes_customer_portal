import React, { ReactNode, useState } from "react";
import ApplicationContext from "./ApplicationContext";
import {User} from './types/applicationTypes';
// @ts-ignore
import Api from "../apis/apis"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"

export const ApplicationProvider: React.FC<{children: ReactNode}> = ({children})=>{
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
                // window.location.href = "http://localhost:5174/"
                // navigate('/')
                setUser(response.data.User)
                returnval = true
            } else {
                setErrorMessage(response.data.StatusDesc)
                setShowErrorMessage(true)
            }
        } else {
            setErrorMessage("Sorry...something went wrong. Please try again")
            setShowErrorMessage(true)
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
                  returnval = true;
              }
          } else {
            setErrorMessage(response.data.StatusDesc)
            setShowErrorMessage(true)
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
            setLoading
          }}>
          {children}
        </ApplicationContext.Provider>
      );
}
