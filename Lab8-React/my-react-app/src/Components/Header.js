import {Link, Outlet} from "react-router-dom";

export default function Header(){
    return(
        <>
        <div>
            
            <ul>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/"> About us </Link> </li>
                <li> <Link to="/"> Contact us </Link> </li>
            </ul>
            
        </div>
        <Outlet />
        </>
    )
}