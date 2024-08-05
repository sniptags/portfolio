import styles from "./topbar.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
    return (
        <div className={`${styles.topbar}${styles.topbarTransparent} d-none d-xl-block d-lg-block`}>
            <Container fluid>
                <Row>
                    <Col>
                        <ul className={styles.topMenu}>
                            <li>Phone: +1 (250) 204-3624</li>
                            <li>
                                <a href="mailto:thindgagan1994@gmail.com">
                                    Email: thindgagan1994@gmail.com
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <div className={styles.socialIcons}>
                            <ul>
                                <li className={styles.socialLinkedin}>
                                    <a href="https://www.linkedin.com/in/gdeep-thind/">
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="socialIcon"
                                        />
                                    </a>
                                </li>
                                <li className={styles.socialGithub}>
                                    <a href="https://github.com/sniptags">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="socialIcon"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBar;
