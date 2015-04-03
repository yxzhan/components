'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/vuejs/vue-validator',
        version: 'v1.0.2',
        description: 'Validator component for VueJS',
        name: 'vue-validator',
        main: 'vue-validator.js',
        mapping: [
            {
                reg: /^\/dist\/(vue-validator\.js)/,
                release: '$1'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();