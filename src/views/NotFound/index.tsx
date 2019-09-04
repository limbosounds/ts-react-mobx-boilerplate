import React from "react"
import { RouteComponentProps } from "react-router"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"

import "styles/views/not-found"

export interface NotFoundProps extends RouteComponentProps<any> {}
export interface NotFoundState {}

export default
class NotFound
extends React.Component<NotFoundProps, NotFoundState> {
	render() {
		var title = "Page Not Found"
		return <>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<main className="v-not-found">
				<h1>{title}</h1>
				<Link to="/" className="u-button">
					To homepage
				</Link>
			</main>
		</>
	}
}