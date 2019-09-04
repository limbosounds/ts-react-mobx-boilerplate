const package = require("./package.json")
const fs = require("fs")

var v = package.version
var s = v.split(".").map(Number)

function write() {
	package.version = s.join(".")
	fs.writeFileSync("./package.json", JSON.stringify(package, null, 2))
}

module.exports = {
	v: () => `${s.join(".")}`,
	s: () => s,
	inc: () => {
		s[2]++;
		write()
	},
	incMinor: () => {
		s[1]++;
		s[2] = 0
		write()
	},
	incMajor: () => {
		s[0]++;
		s[1] = 0
		s[2] = 0
		write()
	}
}