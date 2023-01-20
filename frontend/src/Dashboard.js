import { useSelector } from "react-redux";

function Dashboard() {
    const {total} = useSelector((state) => state.favorite)
    
    return ( 
        <div>
            saved: {total}
        </div>
     );
}

export default Dashboard;