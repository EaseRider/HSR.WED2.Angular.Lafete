require.config({
	baseUrl: './',
	paths: {
		'frameworks/angular': '../source/frameworks/angular/angular.min',
		'app': '../source/classes',
        'test': 'classes',
		'jasmine': './libraries/jasmine/jasmine',
		'jasmine-html': 'libraries/jasmine/jasmine-html',
		'jasmine-boot': 'libraries/jasmine/boot'
	},
	shim: {
		'frameworks/angular': {
			exports: 'angular'
		},
		'jasmine-html': {
			deps : 'jasmine'
		},
		'jasmine-boot': {
			deps : ['jasmine', 'jasmine-html']
		}
	}
});

require(['jasmine-boot'], function (JasmineBoot) {
	window.onload();
});
