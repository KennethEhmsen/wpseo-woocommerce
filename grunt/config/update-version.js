// Custom task
module.exports = {
	options: {
		version: "<%= pluginVersion %>",
	},
	readme: {
		options: {
			regEx: /(Stable tag: )(\d+(\.\d+){0,3})([^\n^.\d]?.*?)(\n)/,
			preVersionMatch: "$1",
			postVersionMatch: "$5",
		},
		src: "README.md",
	},
	pluginFile: {
		options: {
			regEx: /( \* Version:\s+)(\d+(\.\d+){0,3})([^\n^.\d]?.*?)(\n)/,
			preVersionMatch: "$1",
			postVersionMatch: "$5",
		},
		src: "wpseo-woocommerce.php",
	},
	initializer: {
		options: {
			regEx: /(\n\s+const VERSION = ')(\d+(\.\d+){0,3})([^.^'\d]?.*?)(';\n)/,
			preVersionMatch: "$1",
			postVersionMatch: "$5",
		},
		src: "wpseo-woocommerce.php",
	},
};
