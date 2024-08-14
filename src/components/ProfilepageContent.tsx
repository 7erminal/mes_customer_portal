import React from "react";
import SideMenu from "./SideMenu";
import HeadNav from "./HeadNav";
import ProfileHeaderSummary from "./ProfileHeaderSummary";
import ProfileBodyContent from "./ProfileBodyContent";

type Props = {
    page: string
}

const ProfilepageContent: React.FC<Props> = ({page})=>{
    return <>
        <SideMenu page={page} />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <HeadNav page={page} />
            <ProfileHeaderSummary />
            <ProfileBodyContent />
        </main>
    </>
}

export default ProfilepageContent