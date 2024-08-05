import Container from "react-bootstrap/Container";
import { useContext,useEffect } from "react";
import ThemeContext from "../../../store/theme-context";
import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronUp
} from "@fortawesome/free-solid-svg-icons";
const Footer = ()=>{
    const themeCtx = useContext(ThemeContext);
    const isDarkMode = themeCtx.isDarkMode

    const handleScroll=()=>{
        const scrollTop = window.scrollY;
        if(scrollTop > 400){
            document.getElementById("scrollTop").style.opacity= 1
        } else{
            document.getElementById("scrollTop").style.opacity= 0
        } 
    }      
    // Add scroll event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <footer id="footer" className={`p-5 ${isDarkMode ? "bg-dark text-light": ""}`}>
                <Container>
                    <div className="text-center">Gagandeep Singh | +1 250-204-3624 | Email: <a href="mailto:thindgagan1994@gmail.com"> thindgagan1994@gmail.com</a> </div>
                </Container>
            </footer>
             <a id="scrollTop" className={styles.scrollTop} role='button' href="#intro"><FontAwesomeIcon icon={faChevronUp} /><FontAwesomeIcon icon={faChevronUp} /></a>
        </>

    )
}


export default Footer