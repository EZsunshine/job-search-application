import { useState } from "react";
import { Button } from "@mui/material";
import JobHistory from "./JobHistory";

function Account() {
    const [accData, setAccData] = useState([1, 2])

    return ( 
        <>
            Account Data

            <br></br>

            Job History
            <div>
                {accData.length > 0 && (
                <ul>
                    {accData.map((data) => (
                        <li key={accData.id}><JobHistory /></li>
                    ))}
                </ul>
                )}
            </div>
        </>
     );
}

export default Account;