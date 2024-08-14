import React from "react";

type Props = {
    title: string
    type: string
}

const InvertedPrimaryButton: React.FC<Props> = ({title, type})=>{
    return <button className="inverted-primary-button" type={type=="submit" ? "submit" : "button"}>{title}</button>
}

export default InvertedPrimaryButton