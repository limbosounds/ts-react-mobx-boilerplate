import React from "react"
import { RouteComponentProps } from "react-router"
import Helmet from "react-helmet"

import "styles/views/homepage"

export interface HomepageProps extends RouteComponentProps<any> {}
export interface HomepageState {}

export default
class Homepage
extends React.Component<HomepageProps, HomepageState> {
	render() {
		var title = "Hello, boilerplate!"
		return <>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<main className="v-homepage">
				<h1>{title}</h1>
			</main>
		</>
	}
}