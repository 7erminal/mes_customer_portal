import { Dispatch, SetStateAction } from "react"

export type ApplicationContextProps = {
    showSideNav: ()=>void
    user: User | undefined | null
    username: string
    password: string
    loading: boolean
    successMessage: string
    errorMessage: string
    showSuccessMessage: boolean
    showErrorMessage: boolean
    login: (e: React.FormEvent<HTMLFormElement>)=>Promise<boolean>
    setUsername: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    setSuccessMessage: Dispatch<SetStateAction<string>>
    setErrorMessage: Dispatch<SetStateAction<string>>
    setShowSuccessMessage: Dispatch<SetStateAction<boolean>>
    setShowErrorMessage: Dispatch<SetStateAction<boolean>>
    setLoading: Dispatch<SetStateAction<boolean>>
    fullname: string
    email: string
    gender: string
    dob: string
    phoneNumber: string
    setFullname: Dispatch<SetStateAction<string>>
    setEmail: Dispatch<SetStateAction<string>>
    setGender: Dispatch<SetStateAction<string>>
    setDob: Dispatch<SetStateAction<string>>
    setPhoneNumber: Dispatch<SetStateAction<string>>
    registerUser: (e: React.FormEvent<HTMLFormElement>)=>Promise<boolean>
    logout: ()=>void,
    getUserDetails: ()=>Promise<void>

    companyName: string
    setCompanyName: Dispatch<SetStateAction<string>>
    businessRegistrationNumber: string
    setBusinessRegistrationNumber: Dispatch<SetStateAction<string>>
    natureOfbusiness: string
    setNatureOfBusiness: Dispatch<SetStateAction<string>>
    streetAddress: string
    setStreetAddress: Dispatch<SetStateAction<string>>
    postalAddress: string
    setPostalAddress: Dispatch<SetStateAction<string>>
    rphoneNumber: string
    setRphoneNumber: Dispatch<SetStateAction<string>>
    alternatePhoneNumber: string
    setAlternatePhoneNumber: Dispatch<SetStateAction<string>>
    numberOfDirectors: string
    setNumberOfDirectors: Dispatch<SetStateAction<string>>
    directorIDs: FileList | undefined | null
    setDirectorIDs: Dispatch<SetStateAction<FileList | undefined | null>>
    certCompanyProfile: File | undefined | null
    setCertCompanyProfile: Dispatch<SetStateAction<File | undefined | null>>
    certOfCorporation: File | undefined | null
    setCertOfCorporation: Dispatch<SetStateAction<File | undefined | null>>
    certCommenceBusiness: File | undefined | null
    setCertCommenceBusiness: Dispatch<SetStateAction<File | undefined | null>>
    clearForm: ()=>void
}

export type User = {
    UserId: number
    Username: string
    UserType: number
    PhoneNumber: string
    Gender: string
    FullName: string
    Email: string
    Dob: string
    Address: string
    IsVerified: boolean
}