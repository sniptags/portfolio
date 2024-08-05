import NavigationBar from "../ui/Navbar/Navbar";
import Topbar from "../ui/Topbar/Topbar"
import { useContext} from "react";
import ThemeContext from "../../store/theme-context";
import Footer from "../ui/Footer/Footer";

const Layout = (props)=>{
    const themeCtx = useContext(ThemeContext);
    return( 
        <div data-bs-theme={themeCtx.isDarkMode ? 'dark' : 'light'}>
            <Topbar />
            <NavigationBar/>
            {props.children}
            <Footer />
        </div>
    )
}
export default Layout