import {Outlet} from "react-router-dom";
import Navbar from "../reuseable/navbar";
import Footer from "../reuseable/footer";

const Layout = ()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout