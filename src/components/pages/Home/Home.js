import Layout from "../../layout/Layout";
import styles from "./home.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useEffect } from "react";
import ThemeContext from "../../../store/theme-context";
import Card from "../../ui/Card/Card";
import { useLoaderData } from "react-router-dom";
import Section from "../../ui/Section/Section";

const Home = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "./plugins/particles.js";
        document.body.appendChild(script);
        const script2 = document.createElement("script");
        script2.src = "./../plugins/particles-dots.js";
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(script2);
        };
    }, []);
    const themeCtx = useContext(ThemeContext);
    const isDarkMode = themeCtx.isDarkMode;

    const data = useLoaderData("home");
    const education = data.edu;
    const skills = data.skills;
    const experience = data.experience;
    const eduColLength = education.length >= 4 ? 3 : 12 / education.length;
    const expColLength = experience.length >= 4 ? 3 : 12 / experience.length;
    return (
        <Layout>
            <nav id="dotsMenu" className={styles.dotsMenu}>
                <ul>
                    <li>
                        <a href="#intro">
                            <span>About Me</span>
                        </a>
                    </li>
                    <li>
                        <a href="#education">
                            <span>Qualifications</span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            <span>Skills</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience">
                            <span>Experience</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <section
                id="intro"
                className={`${
                    isDarkMode ? styles["intro-dark"] : styles["intro-light"]
                } ${styles["intro"]} parallax pt-5 pb-2`}
            >
                <div
                    id="particles-dots"
                    className={`${styles["particles-container"]} particles`}
                ></div>
                <Container>
                    <div className="text-light">
                        <Row>
                            <Col lg={8} sm={12}>
                                <div className={`${styles["text-fade"]} mb-5`}>
                                    <h1
                                        className={`${styles["text-medium"]} mb-0`}
                                    >
                                        Hi, I’m{" "}
                                    </h1>
                                    <h1 className={styles["text-lg"]}>
                                        Gagandeep Singh
                                    </h1>
                                    <p>
                                        <b>PASSION LED ME HERE</b>
                                    </p>
                                    <p>
                                        {" "}
                                        My passion towards technology and
                                        programming encouraged me to persue Software
                                        Development as my career. To achieve
                                        that, I did my Bachelors in Computer
                                        Applications. <br/><br/>However, when I immigrated
                                        to a new country, I faced challenges in
                                        establishing myself in the field of Software
                                        Development, and as a result, I ended up
                                        working in various random jobs to make
                                        ends meet.  <br/><br/>Despite the setbacks, I
                                        firmly believe that it's never too late
                                        to start again. Embracing this
                                        philosophy, I decided to continue my
                                        journey in web development. I dedicated
                                        myself to learning and honing my skills
                                        using various online tools and
                                        resources. Through hard work and
                                        perseverance, I established myself as Software developer and learnt multiple programming and cloud technologies.

                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <Section
                segment="education"
                header="EDUCATION & Certificates"
                isDarkMode={isDarkMode}
            >
                <Row>
                    {education.map((item, i) => {
                        return (
                            <Col
                                key={item.RowKey}
                                lg={eduColLength}
                                className={
                                    (i + 1) * eduColLength !== 12 &&
                                    "border-right"
                                }
                            >
                                <Card
                                    isDarkMode={isDarkMode}
                                    item={item}
                                ></Card>
                            </Col>
                        );
                    })}
                </Row>
            </Section>
            <Section
                segment="skills"
                isDarkMode={isDarkMode}
                header="Technical Skills"
            >
                {skills.map((skillArea) => {
                    return (
                        <Row key={skillArea.RowKey} className="pb-4">
                            <Col lg={2} sm={12} className="mb-2">
                                <span
                                    className={`heading h4 ${
                                        isDarkMode
                                            ? "heading-dark-primary"
                                            : "heading-light-primary"
                                    }`}
                                >
                                    {skillArea.Area}{" "}
                                </span>
                            </Col>
                            <Col lg={10} sm={12}>
                                <img alt="skills" src={skillArea.url}></img>
                            </Col>
                        </Row>
                    );
                })}
            </Section>
            <Section
                segment="experience"
                header="Experience"
                isDarkMode={isDarkMode}
            >
                <Row>
                    {experience.map((item, i) => {
                        return (
                            <Col
                                key={item.RowKey}
                                lg={expColLength}
                                className={
                                    (i + 1) * expColLength !== 12 &&
                                    "border-right"
                                }
                            >
                                <Card
                                    isDarkMode={isDarkMode}
                                    item={item}
                                ></Card>
                            </Col>
                        );
                    })}
                </Row>
            </Section>
        </Layout>
    );
};
export default Home;
