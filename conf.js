exports.config = {
    // directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:3000',

    // Capabilities to be passed to the webdriver instance.
    // Capabilities : {'browserName': 'chrome' },

    //多瀏覽器測試
    multiCapabilities: [
        { 'browserName': 'firefox' },
        { 'browserName': 'chrome' }
    ],

    // Framework to use. Jasmine is recommended.
    framework: 'mocha',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['spec.js'],

    // Options to be passed to Jasmine.
    // jasmineNodeOpts: {
    //   defaultTimeoutInterval: 30000
    // }
    mochaOpts: {
        reporter: "spec",
        slow: 3000,
        enableTimeouts: false
    }
};
