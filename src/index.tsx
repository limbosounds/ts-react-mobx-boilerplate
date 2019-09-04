import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import Provider from "./Provider"

ReactDOM.render(
	<BrowserRouter>
		<Provider />
	</BrowserRouter>,
	document.getElementById("__root")
)