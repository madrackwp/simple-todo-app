import React from "react"

const Header = () => {

    const headerStyle ={
        padding: "20px 0",
        lineHeight: "2em",
    }

    return(
        <header style={headerStyle}>
            {/* <h1>Simple Todo App</h1>
            <p>Please add on todos in the input field</p> */}
            <h1 style={{fontSize: "25px", marginBottom: "15px"}}>Simple Todo App</h1>
            <p style={{fontSize: "19px"}}>Please add on todos in the input field</p>
        </header>
    )
}

export default Header