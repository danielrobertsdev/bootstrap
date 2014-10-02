module.exports = function(grunt) {

  // Project configuration.

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {                                 // task
            dist: {                             // target
                files: {                        // dictionary of files
                    'main.css': 'main.scss'     // 'destination': 'source'
                }
            },
            dev: {                              // another target
                options: {                      // dictionary of render options
                    includePaths: [
                        'path/to/imports/'
                    ]
                },
                files: {
                    'main.css': 'main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass']);

};