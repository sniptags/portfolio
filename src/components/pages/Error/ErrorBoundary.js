import { useRouteError } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
import Layout from "../../layout/Layout";
import styles from './error.module.css'
import { useContext } from "react";
import ThemeContext from "../../../store/theme-context";
import { Outlet } from "react-router-dom";
function ErrorBoundary() {
    let error = useRouteError();
    const themeCtx = useContext(ThemeContext);
    const isDarkMode = themeCtx.isDarkMode
    return (
        <>
            <Layout>
                <section className={`${isDarkMode ? "bg-dark" :""} ${styles["error-section"]} pb-5`}>
                    <Container>
                        <Row>
                            <Col lg={6}><div className={styles['page-error']}>{error.status}</div></Col>
                            
                            <Col lg={6}>
                                <div className={`${isDarkMode ? "text-light" :""} text-left`}>
                                    <h1 className="text-md pt-3">{error.status===404 ? 'Ooops, This Page Could Not Be Found!':'Ooops, Something went wrong'}</h1>
                                    <p className="lead pt-3">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
            <Outlet />
            </>
    )

  }

  export default ErrorBoundary