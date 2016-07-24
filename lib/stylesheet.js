module.exports = {
    getRules: css => css.stylesheet.rules,
    isRuleType: type => rule => rule.type === type,

    createStylesheetAst: rules => {
        return {
            type: 'stylesheet',
            stylesheet: {
                rules: rules
            }
        }
    }
}