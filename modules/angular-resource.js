'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/angular/bower-angular-resource',
        version: 'v1.4.0',
        description: 'HTML enhanced for web apps http://angularjs.org',
        name: 'angular-resource',
        main: 'angular-resource.js',
        mapping: [
            {
                reg: /^\/angular-resource\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "angular-resource.js": {
              "deps": ["angular"]
            }
        },
        dependencies: [
            "angular@~1.4.0"
        ]
    }, {
        repos: 'https://github.com/angular/bower-angular-resource',
        version: 'v1.3.14',
        description: 'HTML enhanced for web apps http://angularjs.org',
        name: 'angular-resource',
        main: 'angular-resource.js',
        mapping: [
            {
                reg: /^\/angular-resource\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "angular-resource.js": {
              "deps": ["angular"]
            }
        },
        dependencies: [
            "angular@~1.3.14"
        ]
    }]
})();
