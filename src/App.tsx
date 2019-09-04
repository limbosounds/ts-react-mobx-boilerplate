import React from "react"
import { RouteComponentProps, Switch, Route } from "react-router-dom"

import "styles/main"
import "styles/universal"

import NotFound from "views/NotFound"
import Homepage from "views/Homepage"

export interface ApplicationProps extends RouteComponentProps<any> {}
export interface ApplicationState {}

export default
class Application
extends React.Component<ApplicationProps, ApplicationState> {
	render() {
		return <>
			<Switch>
				<Route
					path="/"
					exact
					component={Homepage}
				/>
				<Route component={NotFound} />
			</Switch>
		</>
	}
}