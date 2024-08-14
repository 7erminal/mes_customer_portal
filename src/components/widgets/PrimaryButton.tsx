import React from "react";

type Props = {
    title: string
    type: string
    navigateTo: ()=>void
}

const PrimaryButton: React.FC<Props> = ({title, type, navigateTo})=>{
    return <button className="primary-button" type={type=="submit" ? "submit" : "button"} onClick={navigateTo}>{title}</button>
}

export default PrimaryButton