import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <div className="app">
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default AppLayout;