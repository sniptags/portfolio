import { useRouteError } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
import Layout from "../../layout/Layout";
import styles from './error.module.css'
function ErrorBoundary() {
    let error = useRouteError();
    console.log(error.status)
    return (
        <Layout>
            <section className={`${styles["error-section"]} mt-5 pb-5`}>
                <Container>
                    <Row>
                        <Col lg={6}><div className={styles['page-error']}>{error.status}</div></Col>
                        
                        <Col lg={6}>
                            <div className="text-left">
                                <h1 className="text-medium">{error.status===404 ? 'Ooops, This Page Could Not Be Found!':'Ooops, Something went wrong'}</h1>
                                <p className="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                                <div className="seperator m-t-20 m-b-20"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )

  }

  export default ErrorBoundary