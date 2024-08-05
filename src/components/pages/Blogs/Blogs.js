import Layout from "../../layout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Blogs = ()=>{
    return(
        <Layout>
            <Container>
                <Row>
                    <Col lg={6}>
                         <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7192747799401107456" height="974" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>   
                    </Col>
                    <Col lg={6}>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7096641689817153536" height="974" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </Col>
                </Row>
            </Container>
            
        </Layout>
    )
}

export default Blogs