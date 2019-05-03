const presets = [
	['@babel/preset-env', {
		targets: {
			esmodules: true
		},
		corejs: 3,
		useBuiltIns: 'usage'
	}],
	['next/babel']
];

const plugins = [
	['babel-plugin-styled-components', {
		pure: true
	}]
];

module.exports = {presets, plugins};
