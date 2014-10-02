// http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/

module.exports = function(grunt) {

	"use strict";
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,uglify: {
			build: {
				files: {
					'build/js/global.min.js': ['js/global.js']
				}
			}
		}
		,watch: {
			js: {
				files: ['js/global.js'],
				tasks: ['uglify']
			}
	    ,css: {
        files: ['styles/sass/global.scss'],
        tasks: ['buildcss']
	    }
		}
		,cssc: {
			build: {
				options: {
					consolidateViaDeclarations: true,
					consolidateViaSelectors:    true,
					consolidateMediaQueries:    true
				},
				files: {
					'styles/global.css': 'build/styles/global.css'
				}
			}
		}
		,cssmin: {
			build: {
				src: 'build/styles/global.css',
				dest: 'build/styles/global.css'
			}
		}
		,sass: {
			build: {
				files: {
				 'build/styles/global.css': 'styles/sass/global.scss'
				}
			}
		}
	});

	// Default task(s).
	// grunt.registerTask('default', ['uglify']);
	// grunt.registerTask('default', ['sass']);
	grunt.registerTask('default', []);
	grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);

};