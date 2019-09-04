import React from "react"
import { RouteComponentProps } from "react-router"
import Helmet from "react-helmet"
import { observer } from "mobx-react"

import "styles/views/homepage"

import Store from "stores/Sample"

export interface HomepageProps extends RouteComponentProps<any> {}
export interface HomepageState {}

@observer
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
				<p>
					Observable <strong>sampleField</strong> is {
						Store.sampleField
							? <span className="positive">
								ON
							</span>
							: <span className="negative">
								OFF
							</span>
					}
				</p>
				<div className="action-wrapper">
					<div className="u-button" onClick={Store.toggleSampleField}>
						Toggle sampleField
					</div>
				</div>
			</main>
		</>
	}
}