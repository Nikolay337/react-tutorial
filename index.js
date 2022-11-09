import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <img src="./react-logo.png" />
        <div>Fun facts about React</div>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walk</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))