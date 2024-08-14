import React from "react";

type Props = {
    title: string
    type: string
    navigateTo: ()=>void
}

const SecondaryButton: React.FC<Props> = ({title, type, navigateTo})=>{
    return <button className="secondary-button" type={type=="submit" ? "submit" : "button"} onClick={navigateTo}>{title}</button>
}

export default SecondaryButton