import React, { useState } from "react";
import { Button } from "@mui/material";
import JobHistory from "./JobHistory";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import UploadAvatar from "./hooks/UploadAvatar";
import UploadImage from "./hooks/UploadImage";

import Grid from "@mui/material/Grid";

function Account() {
    
//render the avatar, firstname lastname location components
//UploadAvatar is in hooks folder
    return (
        <>
        <UploadAvatar />
        {/* <UploadImage /> */}
        </>
    )

}

export default Account;