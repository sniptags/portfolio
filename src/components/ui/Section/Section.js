
import Container from "react-bootstrap/Container";
const Section = props =>{
    const isDarkMode = props.isDarkMode
    return (
        <section id={props.segment} key={props.segment} className = {`${isDarkMode && 'bg-dark text-light'} ${props.segment ==='education' && "bg-gradient"}`}>
            <Container className="pt-2">
                {props.segment !=='education' && <hr/>}
                <div className={`pt-2 heading ${isDarkMode ? 'heading-dark-primary' : 'heading-light-primary'}`}>
                    <h2 className='text-uppercase'>{props.header}</h2>
                </div>
                {props.children}
            </Container>
        </section>
    )
}

export default Section