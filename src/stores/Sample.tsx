import { observable, action } from "mobx"

class SampleStore {
	@observable sampleField: boolean = false

	@action
	toggleSampleField = () => {
		this.sampleField = !this.sampleField
	}
}

export default new SampleStore()