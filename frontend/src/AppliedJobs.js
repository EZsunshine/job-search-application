import { useSelector } from "react-redux";

function AppliedJobs() {
    const {total} = useSelector((state) => state.applied)

    return ( 
        <div>Applied Jobs: {total}</div>
     );
}

export default AppliedJobs;