import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import ThemeContext from "../../../store/theme-context";
import styles from "./navbar.module.scss"
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const themeCtx = useContext(ThemeContext);
    const isDarkMode = themeCtx.isDarkMode
    const handleChangeTheme = ()=>{
        themeCtx.changeThemeMode()
    }
    return (
        <Navbar id="navbar" collapseOnSelect expand="lg" sticky="top" className={`bg-body-tertiary ${styles['navbar']} ${!isDarkMode ? styles["nav-light"] : styles["nav-dark"]}`}>
            <Container fluid>
                <Navbar.Brand href="/">GS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                        <Nav.Link as={Link} to="/" href="">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    </Nav>
                    <Nav className={`ms-auto ${isDarkMode && 'text-light'}`}>
                        <Nav.Item >
                            <Form.Check
                                type="switch"
                                id="mode-switch"
                                label="Dark Mode"
                                onChange={handleChangeTheme}
                                checked = {isDarkMode}
                            />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
