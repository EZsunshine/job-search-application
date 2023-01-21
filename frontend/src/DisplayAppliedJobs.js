import { useState } from "react";
import { Button } from "@mui/material";
import JobHistory from "./JobHistory";

function Account() {
    const [accData, setAccData] = useState([1, 2])

    return ( 
        <>
            Account Data/Settings
            <br />
            <Button variant="contained" component="label">
                Upload Resume
            <input hidden accept="image/*" multiple type="file" />
            </Button>

            <br></br>

            Account Data/Job History
            <div>
                {accData.length > 0 && (
                <ul>
                    {accData.map((data) => (
                        <li key={data.id}><JobHistory /></li>
                    ))}
                </ul>
                )}
            </div>
        </>
     );
}

export default Account;