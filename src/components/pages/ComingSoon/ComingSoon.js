import { Container,Row,Col } from "react-bootstrap";
import Layout from "../../layout/Layout";
import { useContext } from "react";
import ThemeContext from "../../../store/theme-context";
import { Outlet } from "react-router-dom";
function ComingSoon() {
    const themeCtx = useContext(ThemeContext);
    const isDarkMode = themeCtx.isDarkMode
    return (
        <>
            <Layout>
                <section className={`${isDarkMode ? "bg-dark text-light": "text-secondary"} pb-5`}>
                    <Container>
                        <Row>
                            <Col lg={12}><div className="text-center"><h1>Stay Tuned, This page is under construction</h1></div></Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
            <Outlet />
        </>
    )

  }

  export default ComingSoon