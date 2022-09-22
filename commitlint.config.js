module.exports = {
	rules: {
		'type-enum': [
			2,
			'always',
			['hotfix', 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'merge', 'perf', 'refactor', 'revert', 'style', 'test'],
		],
	},
	extends: ['@commitlint/config-conventional'],
};
