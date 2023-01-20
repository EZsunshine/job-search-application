import { useLocation } from "react-router-dom";

function JobDescription() {
    const {state} = useLocation();
console.log(state);
    return ( 
        <div>
            <h1>{state.company.display_name}</h1>
            <h2>{state.location.area}</h2>
            <h3>{state.title}  Salary Range: {state.salary_min} to {state.salary_max}</h3>
            <p>{state.description}</p>
        </div>
     );
}

export default JobDescription;