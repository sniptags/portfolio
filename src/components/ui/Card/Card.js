import { Fragment } from "react"
const Card = props =>{
    const isDarkMode = props.isDarkMode
    return(
        <Fragment>
            <h4 key={"title"+props.item.RowKey }className={`${isDarkMode ? "heading-dark-primary" : "heading-light-primary"} mb-0`}>{props.item.title}</h4>
            <p key={"period"+props.item.RowKey }><i>{props.item.period}</i></p>
            <p key={"place"+props.item.RowKey }>{props.item.place}</p>
            <p key={"description"+props.item.RowKey }>{props.item.description}</p>
        </Fragment>
    )
}

export default Card
